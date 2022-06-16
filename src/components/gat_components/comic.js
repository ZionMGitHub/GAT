import React from 'react'
// import Image from 'next/image'
// import preview from '../images/comic.jpg'

import styled from 'styled-components'
import {Textbox} from './textbox';
import { data } from './data';
import { Heading,useWindowDimensions } from '../../global_styles';


const scrollCutoff = 450

export const Comic = (props) => {
  const {isDesktop} = props;
   const {windowWidth, windowHeight } = useWindowDimensions();

  return (
     <ComicContainer isDesktop={isDesktop}>   
      <ComicWrapper>
        
        <ColWrapper>
             <Textbox data = {data['comic']}/>
              { windowWidth < `${scrollCutoff}` && <TextboxSub><strong>(Swipe right to view comic cover)</strong></TextboxSub>}
        </ColWrapper>

       
        <ImgWrapper>
                <ComicImg
                    // layout='intrinsic'
                  //   width={'100%'}
                    src='../images/comic.png'
                />
        </ImgWrapper>
    
      </ComicWrapper>    
    </ComicContainer>
            
  )
}

const ComicContainer = styled.div`
    position: absolute;
    /* top: ${props => props.theme.sectionStart.comic}; */
    top: ${({isDesktop}) => (isDesktop ? '57%' : '68.5%')};
    width: 100%;
    height:${({isDesktop}) => (isDesktop ? '7%' : '6.5%')};

    /* background-color: rgba(100,40,200,.5); */

   @media screen and (max-width: ${scrollCutoff}px){
      overflow-x: scroll;

   }

`

const ComicWrapper = styled.div`
  
   height: 100%;
   padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: ${scrollCutoff}px){
        width: 200%;
         justify-content: flex-start;
         overflow-x: scroll; 
         /* overflow-y: visible; */
         padding: 0 0rem;
         /* display: inline; */
       
    }

`


const ColWrapper = styled.div`
/* background-color: aliceblue; */
flex: 1;
max-width: 750px;

 @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
       flex: 1.8;
      /* background-color: red; */
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
       flex: 1.6;
    }

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      flex: 1.3;
      width: 100%;
       margin-left: 0%;
   }


    @media screen and (max-width:${scrollCutoff}px){
         flex: 1;
         display: block;
         width: 100%;
    }
`

const ImgWrapper = styled.div`
    max-width: 300px;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex: 1.5;
    /* background-color: red; */

     @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
       flex: 1;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
       /* display: none; */
        margin-left: 0%;
        justify-content: center;
         height: 70%;
       /* width: 100vw;  */
    }

    @media screen and (max-width: ${scrollCutoff}px){
       /* flex-direction: column; */
      flex: 1;
      max-width: none;
      width: 100%;
      justify-content: center;
    }

`



const ComicImg = styled.img`
   width: 100%;
 

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
       /* display: none; */
         width: auto;
         margin-left: 0%;
         height: 120%;
         position: relative;
         top: 50%;
         transform: translateY(-50%);
    }

     @media screen and (max-width: ${scrollCutoff}px){
         height: 140%;
       
    }


    


`


const TextboxSub = styled.div`
    position: relative;
    font-size: .8rem;
    text-align: center;
    right: 50%;
    margin-top: -.5rem;
    transform: translateX(50%);
`