import React, { useEffect,useReducer } from 'react';
import styled from 'styled-components';
import { Inventory } from './inventory';
import { MainDisplay } from './mainDisplay';
import { MintComic } from './mintComic';
import { Selected } from './selected';
import { Traits } from './traits';
import { PreviewModal } from './previewModal';
import {reducer, inventory, defaultState} from './comicReducer';


export const ComicDashboard = () => {

  const [state, dispatch] = useReducer(reducer,defaultState);

// auto hides modal on resize
  useEffect(() => {
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
     {/* <BtnContainer>
        <BtnWrap  onClick={()=>{
                 setSelectedNFTs((prevSelected) => [
                              ...prevSelected,
                              zeusInfo,
                          ]);
              }}>
              <WalletBtn src={'/Assets/comicWidgets/walletBtn.png'}/>
              <BtnText>Connect Wallet</BtnText>
        </BtnWrap>
      </BtnContainer> */}

     {/* title */}
      <TitleContainer>
   
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
          <DashCol>
              <Inventory 
                  state = {state}
                  dispatch = {dispatch}
                  inventory={inventory}
                  />
              <Traits info={inventory[state.currentIndex]}/>
          </DashCol>

           {/* col 2 */}
          <DashCol>
              <MainDisplay info={inventory[state.currentIndex]}/>
          </DashCol>

           {/* col 3 */}
          <DashCol>
              <Selected 
                    state = {state}
                    dispatch = {dispatch}/>
              <MintComic 
                    state = {state}
                    dispatch = {dispatch}
                   />
          </DashCol>
        </DashWrapper>
      </DashContainer>
  
  </Wrapper>

  <PreviewModal 
      state = {state}
      dispatch = {dispatch}
      />
      
  </>)
}


const Wrapper = styled.div`

  opacity: 0;
  position: fixed;
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: blue; */

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
        background-color: red;

     } 

`

const BtnWrap = styled.button`
  background-color: transparent;
  position: relative;
  margin: 0 80px;
  height: 100%;
  width: 250px;
  align-self: flex-start;
  /* background-color: #050e3375; */
  border: none;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover{
    
    /* color: #7E746F; */
    background-color: #1D2A60;
    /* outline: 2px white solid; */
  }

`

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
    /* background-color: red; */


    @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
       /* margin: 0 1rem; */
       /* width: 29%;   */
    }
    
  }
`
