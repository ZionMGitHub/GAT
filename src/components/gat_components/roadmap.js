import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Heading,useWindowDimensions } from '../../global_styles';
import {Textbox} from './textbox';
import { data } from './data';
import { isMobile, isDesktop as isDesktopLib } from 'react-device-detect';


let cords = [
  { top: '30%', right: '5%'}, // 1
  { top: '32%', right: '23%'},// 2
  { top: '34%', right: '45%'},// 3
  { top: '50%', right: '55%'},// 4
  { top: '58%', right: '30%'},// 5
  { top: '70%', right: '10%'},// 6
  { top: '75%', right: '36%'},// 7
  { top: '86%', right: '50%'},// 8
  { top: '90%', right: '15%'},// 9
]


export const Roadmap = (props) => {
  const {isDesktop} = props;

  const [hoverIndex, changeHoverIndex] = useState(-1);
  const {windowWidth, windowHeight } = useWindowDimensions();

  const hideBubbles = () => {
      changeHoverIndex(-1);
  }

  useEffect(() => {
        window.addEventListener('scroll', hideBubbles)
    },[])


  return (
     <RMContainer isDesktop={isDesktop}>   
         {/* <Heading>ROADMAP</Heading> */}
         <TextBoxWrapper>
             <Textbox data = {data['roadmapText']}/>
 
         </TextBoxWrapper>

         {windowWidth < 769 && 
          <SubWrap>
             <TextboxSub>{isDesktopLib ? "Hover over": "Tap"} token to view drop</TextboxSub>
          </SubWrap>
         
         }

       {/* <EventContainer> */}
           <EventWrapper isDesktop={isDesktop}>
             {data.roadmap.map((event, index)=>{
               return <div key={index} >
                <EventHolder 
                  cord={cords[index]}
                  onMouseEnter={e => {
                     changeHoverIndex(index);
                  }}
                
                  onMouseLeave={e => {
                      changeHoverIndex(-1);
                  }}            
                  >
                    <EventBG src={'./images/token.png'}/>  

                     {windowWidth > 769 &&    
                      // regular
                     <TextWrap>
                        {event.title && <Title>{event.title}</Title>}
                        {event.text && <SubText>{event.text}</SubText>}
                    </TextWrap>
                  }
                 </EventHolder>

                   {/* bubble */}
                  {windowWidth < 769 &&  <Bubble cord={cords[index]} style={{  visibility: `${hoverIndex === index ? "visible": "hidden"}`,
                                                                                    opacity: `${hoverIndex === index ? "1": "0"}`}}>
                      <TextWrap>
                        {event.title && <Title>{event.title}</Title>}
                        <SubText>{event.text}</SubText>
                      </TextWrap>

                  </Bubble>}
              </div>

             })}
           </EventWrapper>
           
         {/* </EventContainer> */}
               
    </RMContainer>
            
  )
}

const RMContainer = styled.div`
    position: absolute;
    /* top: ${props => props.theme.sectionStart.roadmap}; */
    top: ${({isDesktop}) => (isDesktop ? '36%' : '55%')};
    width: 100%;
    height: ${({isDesktop}) => (isDesktop ? '18%' : '10%')};
    /* background-color: rgba(40,40,40,.2); */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
`



const EventWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: rgba(220,10,200,.4); */
  /* max-width:  ${props => props.theme.boxstyle.maxWidth}; */
  padding: 0 ${props => props.theme.boxstyle.marginX};
  position: absolute;
  top: ${({isDesktop}) => (isDesktop ? '0' : '16.5%')};
`

const EventHolder = styled.div`
  height: 135px;
  width: 135px;
  /* background-color: rgba(220,200,200,.8); */
  border-radius: 100%;
  position: absolute;
  top:  ${props => props.cord.top};
  right:  ${props => props.cord.right};
  /* border-radius: 100%; */
  /* border: solid 2px #441511; */
  
    /* mobile */
    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      background-color: #AE4C2690;
      /* border: solid 2px #441511;; */
      height: 35px;
      width: 35px;
       &:hover{
          cursor: pointer;
        }
    }

    /* tablet */
      @media screen and (max-width: 770px) and (min-width: ${props => props.theme.breakpoints.sm}){
      background-color: #AE4C2690;
      /* border: solid 2px #441511;; */
      height: 50px;
      width: 50px;
      
    }

    /* large monitor */
    @media screen and (min-width: ${props => props.theme.breakpoints.xl}){
        height: 150px;
        width: 150px;

    }


    ${window.innerWidth < 769? `
          -webkit-box-shadow:0px 0px 20px 8px rgba(250,236,205,.7);
          -moz-box-shadow: 0px 0px 20px 8px rgba(250,236,205,.7);
          box-shadow: 0px 0px 20px 8px rgba(250,236,205,.7);
          animation: token-blink 2s infinite;


      @keyframes token-blink{
        0%{
            -webkit-box-shadow:none;
          -moz-box-shadow: none;
          box-shadow: none;
           


        }
        50%{
          -webkit-box-shadow:0px 0px 20px 8px rgba(250,236,205,.7);
          -moz-box-shadow: 0px 0px 20px 8px rgba(250,236,205,.7);
          box-shadow: 0px 0px 20px 8px rgba(250,236,205,.7);
         


        }100%{
          -webkit-box-shadow:none;
          -moz-box-shadow: none;
          box-shadow: none;
           

        }
      }
    
    ` : ''}
`



const EventBG = styled.img`
  width: 100%;
   &:hover{
          cursor: pointer;
        }
`

const TextWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 80%;
  width: 80%;
  line-height: .95rem;
  /* background-color: blue; */
  top: 50%;
  right:50%;
  transform: translate(50%, -50%);

   padding: .4rem;

   

`

const Title = styled.p`
  text-align: center;
  /* margin-bottom: .3rem; */
  font-size: 90%;
  text-transform: uppercase;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;

`

const SubText = styled.p`
  margin-top: .3rem;
  text-align: center;
  font-size: 75%;
  text-transform: uppercase;

`

const Bubble = styled.div`
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s ease-in-out, visibility .2s ease-in-out,;
    z-index: 10;
    position: absolute;
    background-color:  ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    width: 120px;
    height: 110px;
    top:  ${props => props.cord.top};
    right:  ${props => props.cord.right};
    transform: translateX(-35%) translateY(0%);
    /* margin: 0 .2rem; */
     box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
       /* padding: .5rem; */

`


const TextBoxWrapper = styled.div`
  position: absolute;
  top: 0;

`


const SubWrap =styled.div`
  height: 20%;
  width: 30%;
  position: absolute;
  top: 44%;
  left: 10%;
  /* margin: 0 1rem; */
     background-color: rgba(255,255,255,.5);
    -webkit-box-shadow:0px 0px 30px 20px rgba(255,255,255,.55);
    -moz-box-shadow: 0px 0px 30px 20px rgba(255,255,255,.55);
    box-shadow: 0px 0px 30px 20px rgba(255,255,255,.55);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding:.1rem;



`


const TextboxSub = styled.h1`

  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  /* font-weight: 800; */
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-align: center;


  ${isMobile ?'font-size: 95%;' :''}


  /* @media screen and (max-width: ${props => props.theme.breakpoints.md}){
  
  } */

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
  font-size: 1rem;
  }
`