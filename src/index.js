import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render( 
        <CookiesProvider>
            <App />
            </CookiesProvider> 
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


// TODO:

// GAT Site
    // mobile horizontal to portrait resize bug
    // fix sizes to adjust for white bar gone
    // hamburger disappears on scoll
    // not in rows of 3 while 974 < width < 1400
    // site not scrollable


// Mint Dashboard
    // fix dashboard using mesh ui library -> https://github.com/felixmariotto/three-mesh-ui
    // fix resizing issue

// Comicverse Dashboard
    // hanburger to choose volume
    // fix resizing issue
    // click to view nft bigger

