// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors')({
    origin: true
});
var axios = require('axios');

exports.validateBluechipWL = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        wasAdded = false

        // Grab the wallet address parameter.
        const user_wallet_address = request.query.address;

        if (!user_wallet_address) {
            response.json({
                result: {
                    value: false,
                    status: `No wallet address given`,
                    token: null
                }
            });
            return
        }

        // refrence to WL user collection
        const whitelisted_wallets = admin.firestore().collection('whitelisted_wallets');
        var docRef = whitelisted_wallets.doc(user_wallet_address);

        //check if user already whitelisted
        docRef.get().then((doc) => {
            // return whitelisted token if true
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                response.json({
                    result: {
                        value: true,
                        status: `You already hold a Pre-Sale Spot under the Quality Collector Advantage.`,
                        token: doc.data()
                    }
                });
                return null;
            } else {

                // refrence to bluechip WL projects collection
                const bluechip_wl_projects = admin.firestore().collection('bluechip_WL_projects');

                // creates array of bluechip wallet addresses from refrence
                bluechip_wl_projects.listDocuments().then(res => {
                    return res.map(doc => doc.id.trim().toLowerCase())
                }).
                then(project_id_list => {

                    const url = `https://deep-index.moralis.io/api/v2/${user_wallet_address}/nft?chain=eth&format=decimal`;


                    axios.get(url, {
                            method: 'GET',
                            withCredentials: true,
                            headers: {
                                "X-API-Key": "qBDxN0jyTozrN3Vq9eaCVXuNsAF7GsZQtrzNb6Y3tbiRG5vYTnZ8klhXYjdjYv66",
                                "Content-Type": "application/json"
                            }
                        }).then(resp => resp.data.result)
                        .then(function(data) {
                            let failed_hash = [] // projects not in WL collection
                            // console.log(project_id_list)

                            //query each collect NFT until match found in bluechip WL collection
                            data.map((nft) => {

                                // only query if nft token address not already failed
                                if (!failed_hash.includes(nft.token_address)) {
                                    // add doc of user and token info if nft in bluechip collection

                                    if (project_id_list.indexOf(nft.token_address.trim().toLowerCase()) >= 0 && !wasAdded) {

                                        console.log(`found => ${nft.token_address}`)
                                        let nft_object = {
                                            walletAddress: user_wallet_address,
                                            contractAaddress: nft.token_address,
                                            tokenId: nft.token_id,
                                            isGuaranteed: true,
                                            hasMinted: false,
                                            epochTime: Date.now(),
                                        }

                                        admin.firestore().collection('whitelisted_wallets').doc(user_wallet_address).set(nft_object);
                                        wasAdded = true;

                                        response.json({
                                            result: {
                                                value: true,
                                                status: `Congratulations, you qualify for a Pre-Sale Spot under the Quality Collector Advantage.  Your spot has now been assigned to your connected wallet. `,
                                                token: nft_object
                                            }
                                        });

                                        return 'wallet added to whitelist collection';

                                    } else {
                                        // add to hash if not in bluechip collection
                                        failed_hash.push(nft.token_address)
                                    }
                                }
                            });

                            if (!wasAdded)
                                response.json({
                                    result: {
                                        value: false,
                                        status: `Unfortunately, it looks like you don’t meet the requirements needed to be eligible for the Quality Collector Advantage. Please connect a wallet holding an NFT from 1 of the top 50 NFT projects*.`,
                                        status_sub:`*View our full list of eligible top 50 NFT projects in the whitepaper under the ‘pre sale’ section.`,
                                        token: null
                                    }
                                });

                        })
                        .catch(function(error) {
                            console.log(error);
                        });

                })
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


        return 'complete'
    })
});