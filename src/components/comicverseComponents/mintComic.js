import React from 'react';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

export const MintComic = ({
    state,dispatch}) => {

  return (
      <Container>
         <BG src={'./Assets/comicWidgets/comic_base.png'}/>
         <BG src={'./Assets/comicWidgets/mintBtn.png'} />
         <CoverContainer>
             <HamburgerContain>
                <HamburgerWrap>
                    <Hamburger/>
                </HamburgerWrap>
             </HamburgerContain>
            <CoverWrapper>
                <Cover src={'./Assets/comicPreview/cover.png'}/>
            </CoverWrapper>
         </CoverContainer>

         {/* preview btn */}
         <PreviewBtnWrap onClick={()=>{
                 dispatch({type: 'DISPLAY_MODAL', preview:true});

             }}>
            <BtnText>preview</BtnText>

         </PreviewBtnWrap>

        {/* title holder */}
         <VolumeTitleWrap>
            <BtnText>gods {'&'} titans vol : 1 </BtnText>
         </VolumeTitleWrap>

        {/* mint btn */}
         <MintBtnWrap isActive={state.selectedNFTs.length > 0} onClick={()=>{
             if(state.selectedNFTs.length > 0) {
                    dispatch({type: 'DISPLAY_MODAL'})
                }         
             }}>
                <MintBtnText isActive={state.selectedNFTs.length > 0}>generate comic</MintBtnText>
         </MintBtnWrap>

   </Container> 
           
  )
}

const Container = styled.section`
    width: 100%;
    position: relative;

    /* background-color: aliceblue; */
`

const BG = styled.img`
    width: 100%;
`

const CoverContainer = styled.div`
    position: absolute;
    top: 0%;
    left:0;
    width: 100%;
    height: 80%;
    /* background-color: beige; */
    display: flex;
    justify-content: center;
    align-items: center;


`
const HamburgerContain = styled.div`
    position: absolute;
    top:0;
    left:1%;
    height: 100%;
    width: 12%;
    
    /* background-color: rgba(240,5,5,.5); */
`

const HamburgerWrap = styled.div`
    /* background-color: green;  */
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;


    &:hover{
        cursor: pointer;
            filter: drop-shadow(0 0 6px rgb(255, 255, 255, .9));
    }

`

const Hamburger = styled(FaBars)`
     width: 100%;
     margin: 1rem .2rem;
      
`

const CoverWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-49%);
    width: 75%;
    height: 99.9%;
    /* background-color: red;   */
    overflow: hidden;
`

const Cover = styled.img`
   width: 100%;
    
`

const VolumeTitleWrap = styled.div`
    position: absolute;
    bottom: 11%;
    height: 8%;
    left: 1%;
    width: 61%;
    /* background-color: rgba(240,20,20,.5); */
     display: flex;
    justify-content: center;
    align-items: center;

`

const PreviewBtnWrap = styled.div`
   position: absolute;
    bottom: 11%;
    height: 8%;
    right: 1%;
    width: 37%;
     display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(20,20,240,.5); */

     &:hover{
         transition: all ease .2s;
        cursor: pointer;
         -webkit-box-shadow:0px 0px 5px 0px rgba(255,255,255,0.5);
        -moz-box-shadow: 0px 0px 5px 0px rgba(255,255,255,0.5);
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,0.5);
        background-color: rgba(255,255,255,.25);

    }
`
const MintBtnWrap = styled.div`
    position: absolute;
    bottom: 1.5%;
    height: 7%;
    width: 99%;
    right: .5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${({isActive}) => (isActive ?  'rgba(255,255,255,.1)': 'rgba(0,0,0,.4 ) ')};


     ${({isActive}) => (isActive ? 
    `   
            
        &:hover{
            cursor: pointer;
            transition: all ease .2s;
            background-color: rgba(255,255,255,.35);
             -webkit-box-shadow:0px 0px 6px 0px rgba(255,255,255,0.9);
                -moz-box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);
                box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);
        }

        animation: blinkComic 2s infinite;

        @keyframes blinkComic {
            0% {
                rgba(255,255,255,0)
            }
            45% {
                background-color: rgba(255,255,255,.25);
                -webkit-box-shadow:0px 0px 6px 0px rgba(255,255,255,0.9);
                -moz-box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);
                box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);
            } 
            55% {
                background-color: rgba(255,255,255,.25);
                -webkit-box-shadow:0px 0px 6px 0px rgba(255,255,255,0.9);
                -moz-box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);
                box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);
            }
            100% {
            rgba(255,255,255,0)
            }
        }
    
    ` : ''
        

     )};
    
  

`


const MintBtnText = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-size: 85%;
    color: ${({isActive}) => (isActive ? 'white': 'grey')};
       vertical-align: center;
 
`


const BtnText = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-size: 75%;
    color: white;
    vertical-align: center;
`