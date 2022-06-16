import React, { useState } from 'react';
import styled from 'styled-components';


let preview = [
    {
        title: 'the comic studio',
        path: './images/studioPreview.png'
    },
     {
        title: 'minting 2.0 vault',
        path: './images/vaultPreview.png'
    },
]

export const Popup = ({closePopUp}) => {
    const [showPopUp, setShowPopUp] = useState(true);

  return (
    <Container showPopUp={showPopUp}  onClick={()=>{
                setShowPopUp(false);
                closePopUp();
            }}>
        <Wrapper>
            <CloseBtn src={'./icons/close.png'}/>
            <Heading>View on desktop to<br/>experience:</Heading>
            <ImgColumn>
            
            {preview.map((img, index)=>{
                return <ImgBox key={index}>
                    <Sub>{img.title}</Sub>
                    <ImgPreview src={img.path}/>
                </ImgBox>
            })}
                

            </ImgColumn>

        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.9);
    width: 85%;
    /* height: 90%; */
    z-index: 20;
    max-width: 700px;
    max-height: 700px;
    animation: grow 1.6s 1;



    padding: 1rem; 
    padding-top: 75px;
    @media screen and (max-width:576px ) {
        padding-top: 60px;
    }

    ${({showPopUp})=> ((!showPopUp)? `
         animation: shrink 1s 1;
    ` : "")}
   
    @keyframes shrink {
        70%{
            opacity: 0;
            visibility: 0;
        }
        100%{
            width: 0;
            height: 0;
            opacity: 0;
            visibility: 0;
        }  
    }

        @keyframes grow {
        0%{
            width: 0;
            height: 0;
            opacity: 0;
            visibility: 0;

        }
        50%{
            opacity: 0;
            visibility: 0;
        }
        100%{
             opacity: 1;
            visibility: 1;
           
        }  
    }

`

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

const CloseBtn = styled.img`
    width: 50px;
	height: 50px;
    position: absolute; 
	top: 0px;
	right: 0px;
    margin: 1rem;
    z-index: 50;
    opacity: .75;
    transition: opacity 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover{
    cursor: pointer;
  }

  @media screen and (max-width:576px ) {
        width: 35px;
	    height: 35px;
    }
  
`


const ImgColumn = styled.div`
    margin-top: 1rem;
    width: 80%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (orientation: landscape){
         flex-direction: row;
    }
`


const ImgBox = styled.div`
    width: 100%;
    max-width: 250px;
    margin: 1rem;
   
    
`

const ImgPreview = styled.img`
    width: 100%;
    border: 2px white solid;
    margin-top: .5rem;
    
`


const Heading = styled.h1`
    text-transform: uppercase;
    /* font-weight: 800; */
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.4rem;
    color: white;


    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 1rem;
    }
    
`

const Sub = styled.h2`
    text-transform: uppercase;
    /* font-weight: 800; */
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.1rem;
    color: white;



    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: .8rem;
    }
    
`