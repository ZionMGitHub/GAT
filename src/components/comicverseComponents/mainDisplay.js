import React from 'react';
import styled from 'styled-components';

export const MainDisplay = (data) => {
  const {info } = data;
  const {name, xp} = info; 

  return (
      <Container>
         <BG src={'./Assets/comicWidgets/main_base.png'}/>
         
         <GodWrapper>
              <GodImg src={`./Assets/gods/${name}.png`}/>
         </GodWrapper>

          <XPWrap>
           <XP>XP - {xp}</XP>
         </XPWrap>

         

   </Container> 
           
  )
}

const Container = styled.section`
    position: relative;
    width: 75%;
    bottom: -15%;
    /* height: 100%; */
    /* display: flex;
    align-items: center; */
    /* bottom: -150px; */
    /* background-color: aliceblue; */
`

const BG = styled.img`
    width: 100%;
`
const GodWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 145%;
  height: 90%;
  /* background-color: aliceblue; */

`

const GodImg = styled.img`
  width: 100%;
`

const XPWrap = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 50%;
height: 9%;
/* background-color: green; */
margin: ${props => props.theme.comicverse.margin};
display: flex;
align-items: center;
justify-content: center;

`

const XP = styled.h2`
    color: ${props => props.theme.colors.white};
    text-transform:uppercase;
    font-weight: 500;
    text-align: center;


       @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        font-size: 1rem;
       /* background-color: red; */
  
    }
`