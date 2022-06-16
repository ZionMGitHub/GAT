import React from 'react'

import styled from 'styled-components'
import {Textbox} from './textbox';
import { data } from './data';
import { Heading } from '../../global_styles';

export const Join = (props) => {
  const {isDesktop} = props;
  return (
     <JoinContainer isDesktop={isDesktop}>   
        <Heading>Join the Fight</Heading>
        <BtnGroup>

          {data.socials.map((social,index)=>{
             return( 
             social.name !== "discord" || (new Date("2022-06-16T18:00")) < (new Date())? 
             
             <BtnWrapper href={social.link}  key={index} target="_blank">
                <BtnImg src={social.navImg}/>
              </BtnWrapper>
              
              : <></>
             
              )
          })}

        </BtnGroup>
               
    </JoinContainer>
            
  )
}

const JoinContainer = styled.div`
    position: absolute;
    bottom:${({isDesktop}) => (isDesktop ? ' 4%' : '1%')};
    width: 100%;
    height: 11.5%;
    height: ${({isDesktop}) => (isDesktop ? ' 6%' : '4%')};
    /* background-color: rgba(200,240,100,.5); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BtnGroup = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: .75rem;

`

const BtnWrapper = styled.a`
   display:flex;   
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
  /* /* background-color: #AE4C26; */
  /* border: solid 2px #441511; */ 
  justify-content: center;
  align-items: center;  
  margin: 0 .3rem;

   &:hover{
          background-color: white;

    }

`

const BtnImg = styled.img`
  width: 100%;
  border-radius: 100%;
  -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
   &:hover{
      cursor: pointer;
  }
`
