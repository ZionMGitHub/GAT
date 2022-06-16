import React, { Component } from 'react';
import {GlobalStyle, Theme } from '../src/global_styles';
import styled, { ThemeProvider } from 'styled-components';
import { Link }  from 'react-scroll';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { isDesktop  } from 'react-device-detect';
import CookieConsent from "react-cookie-consent";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import MintDash from './threeJs/mintDash';
import ComicDash from './threeJs/comicDash';

import  {Preloader}  from './components/preloader';
import Navbar  from './components/gat_components/navbar';
import { Landing } from '../src/components/gat_components/landing';
import { Story } from '../src/components/gat_components/story';
import { Comicverse } from '../src/components/gat_components/comicverse';
import { Mint } from '../src/components/gat_components/mint';
import { Roadmap } from '../src/components/gat_components/roadmap';
import { Comic } from '../src/components/gat_components/comic';
import { CharDev } from './components/gat_components/charDev';
import { Teams } from '../src/components/gat_components/team';
import { Join } from '../src/components/gat_components/join';
import { Popup } from './components/gat_components/popup';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";



import { hotjar } from 'react-hotjar';

let mobileWidthCut = 770;
let dashboardCut = 900;


class App extends Component {

   static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

   constructor(props) {
    super(props);
      const { cookies } = props;
      this.state = {
        mintDisplay: false,
        comicDisplay: false,
        bubbleComic: false,
        bubbleMint: false,
        loading: true,
        desktop: false,
        isVaultLocked: isDesktop ? cookies.get('isVaultLocked') || 'false' : false,  
        showPopUp: false,
      };
      this.resizeWindow = this.resizeWindow.bind(this);
      this.toggleIsVaultLocked = this.toggleIsVaultLocked.bind(this);
      this.closePopUp = this.closePopUp.bind(this);

      // console.log(`cookies set to ${this.state.isVaultLocked}`);
    }
    

    // sets up loading logic
    async componentDidMount() {
      window.addEventListener('resize', this.resizeWindow); 
      this.targetElement = document.querySelector('#body');

      await disableBodyScroll(this.targetElement);
      if (window.innerWidth > mobileWidthCut){
          this.setState({ desktop: true });
          // console.log(true);
      }else{
          this.setState({ desktop: false });
          // console.log(false);
      }
      
      await demoAsyncCall(1500).then(() => {
        
        this.setState({ loading: false });
        this.resizeWindow();
        enableBodyScroll(this.targetElement);
        
        // pop up for not deskop
        const { cookies } = this.props;
        if(!isDesktop &  cookies.get('hasVisited') !== 'true'){
          demoAsyncCall(1000).then(()=>{
              cookies.set('hasVisited', 'true', { path: '/' });
              console.log('show pop');
              this.setState({showPopUp: true});
          });
        }
      });
      hotjar.initialize('2960422', 6);

    }

    // cookies handler
    toggleIsVaultLocked = () =>{
      const { cookies } = this.props;
      if (this.state.isVaultLocked === 'true'){
          cookies.set('isVaultLocked', 'false', { path: '/' });
          this.setState({ isVaultLocked: 'false' });
          // console.log(this.state.isVaultLocked);
          return false;
      }else{
         cookies.set('isVaultLocked', 'true', { path: '/' });
          this.setState({ isVaultLocked: 'true' });
          // console.log(this.state.isVaultLocked);
          return true;
      } 
    }


    //called on resize event
    resizeWindow = () => {
        if (window.innerWidth > mobileWidthCut){
          this.setState({ desktop: true });
          // console.log(true);
      }else{
          this.setState({ desktop: false });
          //  console.log(false);
      }
    }

    // toggle mint dahsboard
    toggleMintDash = (e,nav)=>{
      if (isDesktop && window.innerWidth > dashboardCut)

          {if(!this.state.mintDisplay){
            setTimeout(() => {  
                console.log('mint canvas display toggled on')  
                if(nav ){
                   console.log('nav')
                    this.newScene = new React.createElement( MintDash , {callBackFunc:this.toggleMintDash, isVaultLocked: 'true', lockToggler: this.toggleIsVaultLocked}, null);
                  }
                else{
                   console.log('regular')
                  this.newScene = new React.createElement( MintDash , {callBackFunc:this.toggleMintDash, isVaultLocked: this.state.isVaultLocked, lockToggler: this.toggleIsVaultLocked}, null);}

                this.setState({ mintDisplay: !this.state.mintDisplay });
                disableBodyScroll(this.targetElement);       
            }, 500);
          } else{
            console.log('mint canvas display toggled off');
            this.setState({ mintDisplay: !this.state.mintDisplay });
            enableBodyScroll(this.targetElement);
          }}

    }

    // toggle comic dahsboard
    toggleComicDash = ()=>{
      if (isDesktop && window.innerWidth > dashboardCut)
        { if(!this.state.comicDisplay ){
            setTimeout(() => {  
                console.log('comic canvas display toggled on')  
                this.newScene = new React.createElement( ComicDash , {callBackFunc:this.toggleComicDash}, null);
                this.setState({ comicDisplay: !this.state.comicDisplay });
                disableBodyScroll(this.targetElement);
            }, 500);
          } else{
            console.log('comic canvas display toggled off');
            this.setState({ comicDisplay: !this.state.comicDisplay });
            enableBodyScroll(this.targetElement);
          }}
    }

    //close btn
    closePopUp= ()=>{
      setTimeout(() => {  this.setState({showPopUp:false})}, 1000);
    }


  render() {

    return (

    <div id='body'>
          <GlobalStyle />  {/* sites styles */} 
            <ThemeProvider theme={Theme}>  {/* global variables */} 
            
            {/* loading screen */}
            {this.state.loading  ? <Preloader/> : ''}
            {!this.state.loading ? 
              <CookieConsent
                // debug={true}    //dev mode
                expires={150}   //day amount before resetting
                acceptOnScroll = {true} //accept on scroll
                buttonStyle = {{backgroundColor: 'transparent', color:"white", border: 'solid 2px white', borderRadius: '1px', padding:'.5rem',fontSize: '1.1rem'}}
                contentStyle = {{color: '#white', fontSize: '1rem' }}
                style = {{backgroundColor: '#000000',opacity: .95}}
              >This website uses cookies to enhance the user experience</CookieConsent> : ''}

            {/* app body */}
            <div style={{display: `${this.state.loading ? 'none': ''}`}}> 

             <Navbar mintDashCall={this.toggleMintDash}  comicDashCall={this.toggleComicDash} isDesktopBG={this.state.desktop}/>

              {this.state.showPopUp && <Popup closePopUp={this.closePopUp}/> }

              <BackWrapper>
                  <img 
                  src= {`${this.state.desktop  ? "./images/bg.jpg" : "./images/bg_mobile.jpg"}`} 
                  alt='bg' width={'100%'} 
                 style={{ marginBottom: '-50px', marginTop:'0px'}}
                  />
                 
                  <div 
                  style={{paddingTop: '50px'}}
                  >
                    {/* landing section */}
                   <Landing id='home' isDesktop={this.state.desktop}/>

                   {/* story section */}
                    <Story id='story' isDesktop={this.state.desktop}/>

                    {/* comicverse section */}
                    <Comicverse isDesktop={this.state.desktop}/>
                    <Cloud id='cloud' isDesktop={this.state.desktop}>

                    <CloudBtnWrapper isDesktop={this.state.desktop}
                        onMouseEnter={e => {
                         this.setState({ bubbleComic: true });
                        }}
                      
                        onMouseLeave={e => {
                        this.setState({ bubbleComic: false });
                        }}        
                    >
                       {/* bubble */}
                        {!isDesktop || window.innerWidth < dashboardCut ?  
                            <Bubble  cloud={true} style={{  visibility: `${this.state.bubbleComic ? "visible": "hidden"}`,
                                                opacity: `${this.state.bubbleComic ? "1": "0"}`}}>
                          <TextWrap>
                            <SubText>To visit this experience, view site on desktop.</SubText>
                          </TextWrap>
                      </Bubble> : ''}

                      <Link
                          to={'cloud'} 
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact={'true'} 
                          activeClass='active' >
                        <CustomBtn onClick={this.toggleComicDash}/>
                      </Link>
                    </CloudBtnWrapper >
                  </Cloud>
                    

                  {/* acropolis */}
                  <Mint isDesktop={this.state.desktop}/>
                  <Acropolis id='acropolis' isDesktop={this.state.desktop}>
                        
                    <AcropolisBtnWrapper isDesktop={this.state.desktop}
                          onMouseEnter={e => {
                         this.setState({ bubbleMint: true });
                        }}
                      
                        onMouseLeave={e => {
                        this.setState({ bubbleMint: false });
                        }}       
                    >

                      {!isDesktop || window.innerWidth < dashboardCut ? 
                            <Bubble  box={'mint'} style={{  visibility: `${this.state.bubbleMint ? "visible": "hidden"}`,
                                                opacity: `${this.state.bubbleMint ? "1": "0"}`}}>
                          <TextWrap>
                            <SubText>To visit this experience, view site on desktop.</SubText>
                          </TextWrap>
                      </Bubble>: ''}
                      <Link
                          to={'acropolis'} 
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact={'true'} 
                          activeClass='active' >
                        <CustomBtn onClick={()=>{this.toggleMintDash(null,false)}}/>
                      </Link>
                    </AcropolisBtnWrapper>
                  </Acropolis>
                  
                  {/* page elements */}
                  <Roadmap id='roadmap' isDesktop={this.state.desktop}/>
                  <Comic id='comic-creator' isDesktop={this.state.desktop}/>
                  <CharDev id='characterDev' isDesktop={this.state.desktop}/>
                  <Teams isDesktop={this.state.desktop}/>
                  <Join isDesktop={this.state.desktop}/>

                  {/* 3D scenes */}
                  <div id='scenes'>
                    {this.state.mintDisplay && <MintDashWrapper id='mintDash'>{this.newScene}</MintDashWrapper>}
                    {this.state.comicDisplay && <ComicDashWrapper id='comicverse'>{this.newScene}</ComicDashWrapper>}
                  </div>
                  </div>
              </BackWrapper>
              </div>
            </ThemeProvider>
        </div>

    );
  }
}

export default withCookies(App);


function demoAsyncCall(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));//1500
}

const firebaseConfig = {
  apiKey: "AIzaSyBVUE1T6xqjhxg0oWWYVmHRGXBLfs7i8pg",
  authDomain: "gt-dev-ca5f4.firebaseapp.com",
  projectId: "gt-dev-ca5f4",
  storageBucket: "gt-dev-ca5f4.appspot.com",
  messagingSenderId: "16308060844",
  appId: "1:16308060844:web:38d443d911679394eb9509",
  measurementId: "G-HRFS84VYCW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

const BackWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0%;
  margin: 0 auto;
  background-color: rgba(79,27,39);
`

const Acropolis = styled.section`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? '21.5%' : '41%')};
    width: 100%;
    height: ${({isDesktop}) => (isDesktop ? ' 11%' : '8%')};
    display: flex;
    justify-content: center;
    /* background-color: rgba(50,50,50,.5); */
`

const AcropolisBtnWrapper = styled.div`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? ' 39.5%' : '46.8%')};
    width: ${({isDesktop}) => (isDesktop ? ' 12%' : '14.5%')};
    padding-right: ${({isDesktop}) => (isDesktop ? ' 0%' : '0%')};
    /* margin-left: -23px; */
    height: ${({isDesktop}) => (isDesktop ? ' 20%' : '17%')};
    /* background-color: rgba(150,250,150,.5); */
    border: none;
    background-color: rgba(250,0,0,.5);
    -webkit-box-shadow:0px 0px 66px 21px rgba(255,0,0,0.6);
    -moz-box-shadow: 0px 0px 66px 21px rgba(255,0,0,0.6);
    box-shadow: 0px 0px 66px 21px rgba(255,0,0,0.6);
    animation: blink 3s infinite;

    @keyframes blink {
      0% {
        opacity: .8;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: .8;
      }
    }
`

const MintDashWrapper = styled.div`
  z-index: 10;
  top: 21.5%;
  position: absolute;
  height: 100vh;
  width: 100vw;
`

const Cloud = styled.section`
    position: absolute;
    top: 15%;
    top: ${({isDesktop}) => (isDesktop ? '15%' : '27%')};
    width: 100%;
    height: 7%;
    /* background-color: rgba(50,50,50,.5); */
`

const CloudBtnWrapper = styled.div`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? '36%' : '19%')};
    width: ${({isDesktop}) => (isDesktop ? '12%' : '14%')};
    right: ${({isDesktop}) => (isDesktop ? '23%' : '21%')};
    height: ${({isDesktop}) => (isDesktop ? '30%' : '18%')};
    border-radius: 100%;
    border: none;
    background-color: rgba(255,255,255,.5);
    -webkit-box-shadow:0px 0px 30px 20px rgba(255,255,255,.5);
    -moz-box-shadow: 0px 0px 30px 20px rgba(255,255,255,.5);
    box-shadow: 0px 0px 30px 20px rgba(255,255,255,.5);

    animation: blink 3s infinite;

    @keyframes blink {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
`
const ComicDashWrapper = styled.div`
  z-index: 10;
  top: 15%;
  position: absolute;
  height: 100vh;
  width: 100vw;
`


const CustomBtn = styled.button`
    width: 100%;
    height: 100%;
    cursor: pointer;
      border: none;
    opacity: 0;
        background-color: transparent;
    /* background-color: rgba(150,150,150,1); */
`

const Bubble = styled.div`
    visibility: hidden;
    opacity: 1;
    transition: opacity .2s ease-in-out, visibility .2s ease-in-out,;
    z-index: 10;
    position: absolute;
    background-color:  ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    width: 120px;
    height: 120px;
    top: ${({cloud}) => (cloud ? '0' : '0')};
    right: ${({cloud}) => (cloud ? '0' : '0')};
    transform: ${({box}) => (box  === 'mint'? 'translateX(120%) translateY(-20%)' : 'translateX(60%) translateY(60%)')};
    margin: 0 .2rem;
    box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);



`

const TextWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* background-color: blue; */
  top: 0;
   padding: .2rem;

`

const SubText = styled.p`
text-align: center;
`

