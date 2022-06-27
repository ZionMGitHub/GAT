import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { MoralisProvider } from "react-moralis";


ReactDOM.render( 
     <CookiesProvider>
        <MoralisProvider appId="B5N5Cqn4P5KNFGKKqrg8MWVFm1ca6SFeZPQ2R0Qq" serverUrl="https://hlvcv9b1appm.usemoralis.com:2053/server">
                <App />
            </MoralisProvider>
    </CookiesProvider> 

    , document.getElementById('root'));


// TODO:

// GAT Site
    // mobile horizontal to portrait resize bug
    // fix sizes to adjust for white bar gone

// Mint Dashboard
    // fix dashboard using mesh ui library -> https://github.com/felixmariotto/three-mesh-ui
    // fix resizing issue

// Comicverse Dashboard
    // hanburger to choose volume
    // fix resizing issue
    // click to view nft bigger

