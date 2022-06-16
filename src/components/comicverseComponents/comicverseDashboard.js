import React, { useEffect,useReducer,useState } from 'react';
import styled from 'styled-components';
import { Inventory } from './inventory';
import { MainDisplay } from './mainDisplay';
import { MintComic } from './mintComic';
import { Selected } from './selected';
import { Traits } from './traits';
import { PreviewModal } from './previewModal';
import {reducer, inventory, defaultState} from './comicReducer';
import { SyncLockTwoTone } from '@mui/icons-material';

// import { components } from '@reactour/tour'
// import Tour  from 'reactour'
import { useCookies } from 'react-cookie';
    
let transitionSpeed = 1.2;

export const ComicDashboard = ({toggleCloseBtn}) => {

  const [state, dispatch] = useReducer(reducer,defaultState);

  const [isTourOpen, setIsTourOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies();

// auto hides modal on resize
  useEffect(() => {
    // if(cookies['disableComicverseTutorial'] !== 'true'){ 
    //   setTimeout(() => {
    //     setIsTourOpen(true)
    // }, 1000);}
  


    window.addEventListener('resize', function(){
       dispatch({type: 'HIDE_MODAL'});
    })
    // Specify how to clean up after this effect:
    return function cleanup() {  
      window.removeEventListener('resize', function(){});
    };
  },[]);

  return (<>




   <Wrapper>
   {isTourOpen && 
   
   <>
  

   <BtnBlockOverlay
    onClick={
     (e)=>{
      //  if(dontShowAgain){
      //     setCookie('disableComicverseTutorial', 'true', { path: '/' });
      //  }
      // setIsTourOpen(false)
    }
    }
     ><CloseBtn onClick={()=>{
       setIsTourOpen(false);
      toggleCloseBtn(true);
     }}/></BtnBlockOverlay>
      </> }

   {isTourOpen && <TutorialCoverContainer/>}

     {/* title */}
      <TitleContainer style={{opacity: `${isTourOpen ? ".1" : ""}`, transition: `all .${transitionSpeed}s ease-in-out`}}>
   
          <Title>
               The Comic Studio 
            </Title>
            <SubTitle>
               An innovation labs project
            </SubTitle>
            <SubSubTitle>
              ( Prototype )
            </SubSubTitle>

          {/* mint btn */}
         
      </TitleContainer>

      <DashContainer>
        <DashWrapper>
          {/* col 1 */}
          <DashCol >
            {/* INVENTORY */}
            <div style={{height:'100%', width: '100%',position:'relative', zIndex: '100'}}>
              <Inventory 
                  state = {state}
                  dispatch = {dispatch}
                  inventory={inventory}
                  />
                 {isTourOpen && <TutorialContainer side={'top'} alignItems={'flex-end'}>
                    <Lines >
                        <MiddleLine alignSelf={'flex-end'}/>
                        </Lines>
                      <TutorialTextBox>
                              Here you will find all the NFT characters in your connected wallet. Browse and simply select the character(s) that you want to add to your comic. 
                      </TutorialTextBox>
                </TutorialContainer>}
                </div>

                {/* TRAITS */}
                <div style={{opacity: `${isTourOpen ? ".1" : ""}`, transition: `all .${transitionSpeed}s ease-in-out`}}> 
                <Traits info={inventory[state.currentIndex]} /></div>
          
          </DashCol>

           {/* col 2 */}
          <DashCol style={{opacity: `${isTourOpen ? ".1" : ""}`, transition: `all .${transitionSpeed}s ease-in-out`}}>
            {/* MAIN DISPLAY */}
            <div id='main' style={{display:'grid', placeItems:'center'}}>
                <MainDisplay  info={inventory[state.currentIndex]}/>
            </div>
          </DashCol>

           {/* col 3 */}
          <DashCol>

                {/* SELECTED NFTS */}
               <div style={{height:'100%', width: '100%',position:'relative',  zIndex: '100'}}>
                <Selected 
                      state = {state}
                      dispatch = {dispatch}/>

               {isTourOpen && <TutorialContainer side={'right'}>
                    <Lines side={'right'}>
                        <MiddleLine alignSelf={'flex-start'}/>
                        </Lines>
                      <TutorialTextBox side={'right'} alignItems={'flex-end'}>
                              These are the selected NFT characters that you’ve picked to be generated in your comic.
                      </TutorialTextBox>
                </TutorialContainer>}
                </div>


                {/* MINT COMIC BOX */}
                 <div style={{height:'100%', width: '100%' ,position:'relative', zIndex: '100'}}>
                  <MintComic
                      state = {state}
                      dispatch = {dispatch}/>

                  {isTourOpen && <TutorialContainer side={'right'} alignItems={'center'}
                  >
                      <Lines side={'right'}>
                          <MiddleLine alignSelf={'center'}/>
                          </Lines>
                        <TutorialTextBox side={'right'} >
                                Here you can preview your generated comic with and without your selected NFT characters. Hit mint when you’re happy with your comic creation.
                        </TutorialTextBox>
                  </TutorialContainer>}
                </div>

          </DashCol>
        </DashWrapper>
      </DashContainer>

      {!isTourOpen && <MsgContainer>
      <ToggleWrap onClick={()=>{
      //  setDontShowAgain((e)=>(!e))
          toggleCloseBtn(false)
          setIsTourOpen(true)
        }}>
            {/* <InputBox 
              type={'checkbox'} 
              checked={ dontShowAgain }
              onChange={(event) => {}}
              /> */}
            <ToggleText>Take a tour</ToggleText>    
        </ToggleWrap>      
      </MsgContainer>}
  
  </Wrapper>
    
  
    

  <PreviewModal 
      state = {state}
      dispatch = {dispatch}
      />
  </>
  )
}


const Wrapper = styled.div`

  opacity: 0;
  position: fixed;
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: rgba(0,0,0,.75); */
  /* height: 100vh; */

   /* z-index: -100; */
  width: 100vw;
   user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  

     @media screen and ((max-height: 750px) or (max-width: 1400px )){
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
     } 

`

// const BtnWrap = styled.button`
//   background-color: transparent;
//   position: relative;
//   margin: 0 80px;
//   height: 100%;
//   width: 250px;
//   align-self: flex-start;
//   /* background-color: #050e3375; */
//   border: none;
//   transition: all .3s ease-in-out;
//   cursor: pointer;

//   &:hover{
    
//     /* color: #7E746F; */
//     background-color: #1D2A60;
//     /* outline: 2px white solid; */
//   }

// `

const TitleContainer = styled.div`
  /* position: absolute; */
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: .5rem;
  /* top: 0; */
  /* background-color: red; */
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${props => props.theme.comicverse.maxWidth};
  /* min-width: ${props => props.theme.boxstyle.minWidth}; */
`

const Title = styled.h1`
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 0 0 3px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  text-shadow: 0 0 4px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  text-transform: uppercase;
  /* color: #E7E7E7; */
  color: #b5b4bf;
  font-size: 3rem;
   -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #FFEFFF;

  /* -webkit-text-shadow: 0px 0px 15px 5px #EBEFF5;  */
  /* text-shadow: #EBEFF5 0px 0px 3px; */

`
const SubTitle = styled.h4`
  text-transform: uppercase;
  color: #FFEFFF;
  text-shadow: 0 0 2px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  text-shadow: 0 0 1px #FFF, 0px 0px 5px rgba(206,206,206,.5);

  /* text-shadow: #EBEFF5 0px 0px 3px; */
  /* font-weight: bolder; */
`
const SubSubTitle = styled.h5`
  text-transform: uppercase;
  color: #FFEFFF;
  text-shadow: 0 0 2px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  text-shadow: 0 0 1px #FFF, 0px 0px 5px rgba(206,206,206,.5);

  /* text-shadow: #EBEFF5 0px 0px 3px; */
  /* font-weight: bolder; */
`

const DashContainer = styled.div`
  text-shadow: 0 0 2px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  text-shadow: 0 0 1px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  /* background-color: yellow; */
  width: 100%;
  /* height: 100%; */
  max-width: 1200px;
  /* min-width: ${props => props.theme.boxstyle.minWidth}; */
   /* margin: 0 auto; */

   @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
     padding: 0 ${props => props.theme.boxstyle.marginX};
    }

    @media screen and (max-height: 750px){
      max-width: 1000px;
      /* background-color: red; */
    }


      @media screen and (max-width: 1200px) and (min-height: 780px){
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* background-color: red; */

     } 

`

const DashWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: purple; */

  
`


const DashCol = styled.div`
  width: 20%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
  
/* 
    @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
      width: 28%;
  
    } */

  &:nth-child(1){
      align-self: flex-end;
     }

  &:nth-child(2){
    width: 30%;
    flex: 3;
    align-self: flex-end;
    /* transition: 'all .8s ease-in-out';
    opacity: ${({isTourOpen})=>(isTourOpen? ".1" : "")}; */
    
     
    /* background-color: red; */


    @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
       /* margin: 0 1rem; */
       /* width: 29%;   */
    }
    
  }
`


const TutorialContainer = styled.div`
    position: absolute;
    left: ${({side})=>(side==='right'? "" : "100%")};
    right: ${({side})=>(side==='right'? "100%" : "")};
    transition: ${`all .${transitionSpeed}s ease-in-out`};
    height: 100%;
    width: 135%;
    /* background-color: red; */
    top: 0;
    display: flex;
    align-items: ${({alignItems})=>(alignItems)};
    justify-content: flex-start;
    z-index: 100;
    /* opacity: 0; */
    flex-direction: ${({side})=>(side==='right'? "row-reverse" : "")};
    /* align-items: center; */
    /* &:nth-child(2){
      align-items: center;
      background-color: aliceblue;
    } */

  animation: grow 1.2s 1;
  @keyframes grow {
        0%{

            opacity: 0;

        }
        /* 50%{
            opacity: 0;
        } */
        100%{
             opacity: 1;
           
        }  
    }

`
    
const Lines = styled.div`
    margin: .5rem;
    /* border-top: 2px white solid;
    border-bottom: 2px white solid;
     */
    ${({side})=>(side==='right'? `border-right: 2px white solid; ` :`  border-left: 2px white solid;` )}
    height: 75%;
    width: 20px;
    display: flex;

    /* align-items: center; */
    /* margin: 3rem 0; */
    /* background-color: red; */
   
`

const MiddleLine = styled.span`
    width: 35px;
    height: 1px;
    background-color: white;
    border: 1px solid white;
    align-self:${({ alignSelf})=>(alignSelf)};
    margin: 2rem 0;
    /* height: 2px; */

`

const TutorialTextBox = styled.div`
    height: 50%;
    color: white;
    display: grid;
    place-items: center;
   text-align: ${({side})=>(side==='right'? "right" : "")};
    transition:  ${`all .${transitionSpeed}s ease-in-out`};
    /* width: 300px; */
    /* background-color: black; */

`

const BtnBlockOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 110;
  position: fixed;
  top: 0;
  left: 0;
  transition: ${`all .${transitionSpeed}s ease-in-out`};
  /* background-color: rgba(0,0,255,.5); */

`

const TutorialCoverContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.75);
  /* background-color:  rgba(255,0,0,.5); */

  animation: grow 1.2s 1;
  @keyframes grow {
        0%{

            opacity: 0;

        }
        /* 50%{
            opacity: 0;
        } */
        100%{
             opacity: 1;
           
        }  
    }


`

const MsgContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  margin: 24px;
  display: grid;
  place-items: center;
  text-shadow: 0 0 2px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  text-shadow: 0 0 1px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  z-index: 120;
  /* background-color: aliceblue; */
`

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  z-index: 20;

  /* background-color: red; */
  -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  /* width: max-content;
  height: max-content; */


  &:hover{
    cursor: pointer;
     text-shadow: 0 0 4px #FFF, 0px 0px 10px rgba(206,206,206,.5);
      text-shadow: 0 0 3px #FFF, 0px 0px 10px rgba(206,206,206,.5);
  }

`
const InputBox = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* create custom checkbox appearance */
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 2px;
    /* background-color only for content */
    background-clip: content-box;
    border: 2px solid white;
    border-radius: 6px;
    background-color: transparent;
    margin: 0 1rem;
    margin-left: 0;
    /* margin-left: 15px;
    margin-right: 15px; */

  &:hover{
    cursor: pointer;
  }
   

    &:checked{
        background-color: white;
    }

    &:focus{
        outline: none !important;
    }


`
const ToggleText = styled.h3`
  text-transform: uppercase;
  color: white;
  margin-left: -.5rem;
  

`


const CloseBtn = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    /* opacity: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px;
    /* margin:50px; */

    /* background-color: green; */
    background-color: rgba(255,255,255,.2);


    &:hover{
      cursor: pointer;
       background-color: rgba(255,255,255,.4);
    }

`