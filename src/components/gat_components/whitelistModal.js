import React, { useState } from 'react';
import styled from 'styled-components';



export const WhitelistModal = ({closePopUp, status}) => {
    const [showPopUp, setShowPopUp] = useState(true);

   
    
  return (
    <Container showPopUp={showPopUp}  onClick={()=>{
                setShowPopUp(false);
                closePopUp();
            }}>
        <Wrapper>
            <CloseBtn src={'./icons/close.png'}/>
           
            {status.map((text,index)=>{     
                if (text){
                     return <Heading key={index}>{text}</Heading>
                }
               
            })}             
            
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0);
    background-color: rgba(0,0,0,.9);
    width: 85%;
    /* height: 90%; */
    z-index: 20;
    max-width: 700px;
    /* max-height: 250px; */
    animation: grow 1.6s 1;



    padding: 1rem; 
    padding-top: 55px;
    @media screen and (max-width:576px ) {
        padding-top: 50px;
    }

    ${({showPopUp})=> ((!showPopUp)? `
         animation: shrink 1s 1;
    ` : "")}
   
    @keyframes shrink {
        30%{
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
    width: 30px;
	height: 30px;
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
       width: 25px;
	    height: 25px;
    }
  
`


const Heading = styled.h1`
    text-transform: uppercase;
    /* font-weight: 800; */
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1rem;
    color: white;



    &:nth-child(3){
        margin-top: 20px;
        margin-bottom: 10px;
        /* background-color: red; */
    }
   


    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: .8rem;
    }
    
`