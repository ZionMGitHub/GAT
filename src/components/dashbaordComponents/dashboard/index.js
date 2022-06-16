import React, { useEffect, useState } from 'react';
import { YTDbox} from '../ytdBox';
import { ActivityBox } from '../activityBox';
import { DistributedBox} from '../distributedBox';
import { CollectionBox} from '../collectionBox';



import {
    DashContainer,
    DashWrapper,
    DashRow,
    DashDataColumn,
    YTDrow,
    DistributeRow,
    BtnWrapper,
    DashCollectColumn,
    Button

} from './dashboardElements';

let helpBelowRoyaltyFloor = <>Unfortunately no royalties were earned because this NFT sale sold on OpenSea for under the Royalty Floor amount - (original mint price + 10%). Only sales made above the Royalty floor are eligible for you to earn royalty earnings on.</>


let helpRoyaltyCollect = <>This balance shows the current amount of royalties that you have available to withdraw to your wallet. Press collect to action your withdrawal.</>
let helpDividendCollect = <>This balance shows the current amount of loyalty rewards that you have available to withdraw to your wallet. Press collect to action your withdrawal.</>
let helpRoyaltyDistributed = <>This is the current total amount of royalties paid out to collectors across the entire NFT project. </>
let helpDividendDistributed = <>This is the current total amount of loyalty rewards paid out to collectors across the entire NFT project. </>




var baseUserInfo = {
    ytdEarning: 0.0,
    ytdDonated: 0.0,
    royaltyToCollect: 0.0,
    dividendToCollect: 0.0,
    donationActiveRoyalty: false,
    donationPercentRoyalty: .0,
    donationActiveDividend: false,
    donationPercentDividend: .0,
    nfts: []
}

var userInfo = {
    ytdEarning: .51,
    ytdDonated: 0.0,
    royaltyToCollect: .096,
    dividendToCollect: 0.05,
    donationActiveRoyalty: false,
    donationPercentRoyalty: .0,
    donationActiveDividend: false,
    donationPercentDividend: .0,
    nfts: [
        {
            collection_name: "Gods and Titans",
            token_id: 65,
            transactions: [
                {
                    value: 0.1,
                    royalty_amount_earned: 0.0,
                    date: '10 days ago'
                }
            ]
        },
            {
            collection_name: "Gods and Titans",
            token_id: 844,
            transactions: [
                 {
                    value: 0.24,
                    royalty_amount_earned: 0.0,
                    date: '5 days ago'
                },
                {
                    value: 1.0,
                    royalty_amount_earned: 0.04,
                    date: '4 days ago'
                },
                {
                    value: 2.4,
                    royalty_amount_earned: .096,
                    date: '2 days ago'
                },
            ]
        }, {
            collection_name: "Gods and Titans",
            token_id: 2423,
            transactions: [
                 {
                    value: 1.1,
                    royalty_amount_earned: 0.044,
                    date: '20 days ago'
                },
                {
                    value: 1.5,
                    royalty_amount_earned: 0.06,
                    date: '10 days ago'
                },
                {
                    value: 1.55,
                    royalty_amount_earned: .062,
                    date: '4 days ago'
                },
            ]
        }

    ]
}

var baseCompanyInfo = {
    royaltyTotal: 0.0,
    dividendsTotal: 0.0,
    donationsTotal: 0.0,
   
}

var companyInfo = {
    royaltyTotal: 22.1,
    dividendsTotal: 3.2,
    donationsTotal: 0.0,
   
}
export const DashBoard = () => {
 const ethToDollar =  3227.74;

 const [isActivated, ToggleIsActivated] = useState(false);
 const [currentInfo, ToggleCurrentInfo] = useState(baseUserInfo);
 const [currentCompanyInfo, ToggleCompanyInfo] = useState(baseCompanyInfo);


 useEffect(()=>{
        toggleConnect()
 },[])


const toggleConnect =()=>{

        if(isActivated){
            ToggleIsActivated(false)
            ToggleCurrentInfo(baseUserInfo);
            ToggleCompanyInfo(baseCompanyInfo);

        }else{
            ToggleIsActivated(true)
            ToggleCurrentInfo(userInfo);
            ToggleCompanyInfo(companyInfo);

        }
        
    }

 
  return (
       <DashContainer>
           <DashWrapper>
                <DashRow>
                    <DashDataColumn>
                        {/* <YTDrow>
                                <YTDbox 
                                    title='ytd earnings' 
                                    eth = {currentInfo.ytdEarning}
                                    convertUSD = {ethToDollar}
                                    helpText = {lispum}
                                    order = {1}
                                    />
                                <YTDbox 
                                    title='ytd donated' 
                                    eth = {currentInfo.ytdDonated}
                                    convertUSD = {ethToDollar}
                                     helpText = {lispum}
                                     order = {2}
                                    />
                            </YTDrow> */}

                            <ActivityBox nfts = {currentInfo.nfts} helpText = {helpBelowRoyaltyFloor}/>

                            <DistributeRow>
                                <DistributedBox 
                                        title='royalties distributed' 
                                        eth = {currentCompanyInfo.royaltyTotal}
                                        convertUSD = {ethToDollar}
                                         helpText = {helpRoyaltyDistributed}
                                         order = {1}
                                        />
                                <DistributedBox 
                                        title='Loyalties distributed' 
                                        eth = {currentCompanyInfo.dividendsTotal}
                                        convertUSD = {ethToDollar}
                                        helpText = {helpDividendDistributed}
                                        order = {2}
                                        />
                                {/* <DistributedBox 
                                        title='donations collected' 
                                        eth = {currentCompanyInfo.donationsTotal}
                                        convertUSD = {ethToDollar}
                                        helpText = {lispum}
                                        order = {3}
                                        /> */}
                            </DistributeRow>

                    </DashDataColumn>

                    <DashCollectColumn>
                            <BtnWrapper>
                                <Button id='connect_wallet'
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                    
                                    onClick={toggleConnect}>

                                {!isActivated ? 
                                        <>
                                            <div>Connect Wallet</div>
                                            <h6>(Press for demo)</h6>
                                        </>
                                    :
                                        <>
                                        <div>WALLET CONNECTED</div>
                                         <h6>(Demo)</h6>
                                         </>}
                                </Button>

                            </BtnWrapper>
                            <YTDbox 
                                    title='ytd earnings' 
                                    eth = {currentInfo.ytdEarning}
                                    convertUSD = {ethToDollar}
                                    order = {1}
                                    />
                            
                            <CollectionBox
                                title='royalties to collect' 
                                eth = {currentInfo.royaltyToCollect}
                                convertUSD = {ethToDollar}
                                donationActive = {currentInfo.donationActiveRoyalty}
                                donationPercent = {currentInfo.donationPercentRoyalty}
                                helpText = {helpRoyaltyCollect}
                                order = {1}
                            />
                            <CollectionBox
                                title='Loyalty to collect' 
                                eth = {currentInfo.dividendToCollect}
                                convertUSD = {ethToDollar}
                                donationActive = {currentInfo.donationActiveDividend}
                                donationPercent = {currentInfo.donationPercentDividend}
                                helpText = {helpDividendCollect}
                                order = {2}
                                
                            />
                    </DashCollectColumn>
                </DashRow>
            </DashWrapper>
       </DashContainer>
           
  )
}
