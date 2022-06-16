import React from 'react';
import styled from 'styled-components';

export const NftCard = (data) => {
    const {info, size, isSelected} = data;
    const {name, number, imgPath} = info;

  return (
    <Container>
         <BG isSelected={isSelected} src={'./Assets/comicWidgets/nftCardBase.png'}/>

       
       <MainImg  src={imgPath}/>
         {/* <TitleWrap>
           <Title fontSize={size}>{name} #{number}</Title>
         </TitleWrap> */}

    </Container>
  )
}

const Container = styled.section`
    position: relative;
    width: 100%;
    height:75%;
    /* background-color: aliceblue; */
`

const BG = styled.img`
    position: absolute;
    width: 100%;
    z-index: 2;
    background-color: transparent;
      border: 2px transparent solid;

    ${({isSelected})=>(isSelected? `
        -webkit-box-shadow:0px 0px 20px 5px rgba(255,255,255,0.3);
        -moz-box-shadow: 0px 0px 20px 5px rgba(255,255,255,0.3);
        box-shadow: 0px 0px 20px 5px rgba(255,255,255,0.3);
        background-color: rgba(255,255,255,.1);
        border: 2px white solid;
    
    `: '')}
`

const MainImg = styled.img`
    z-index: 1;
    position: relative;
    top: 0;
    left: 0;
    width: 100%; 
     border: 2px transparent solid; 
`
const TitleWrap = styled.div`
    z-index: 3;
    position: relative;
    bottom: 0;
    left: 0;
    /* background-color: green; */


`

const Title = styled.p`
    color: ${props => props.theme.colors.white};
    text-transform:uppercase;
    font-weight: 500;
    font-size: ${({fontSize}) => (fontSize === 'big' ? '1rem' : '.5rem')};
`
