import React, {useState} from 'react';
// import EthImgLogo from '../../../public/eth.svg';
// import Image from 'next/image';
import { FaRegQuestionCircle} from 'react-icons/fa';
import {
    DistContainer,
    DistWrapper,
    DistHeading,
    DistCenterWrap,
    EthLogoWrapper,
    EthAmount,
    DollarAmount,
    QuestionWrapper,
} from './distributedElements';

import { HelpBox } from '../HelpBox';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const DistributedBox = (data) => {
  const { title, eth, convertUSD, helpText , order} = data;

  const dollarAmt = numberWithCommas(Math.round(eth * convertUSD * 100) /100) ;

   const [style, setStyle] = useState({opacity: '0',transition: 'all .1s ease-in-out'});

  
      

  return (
    <DistContainer imgId = {order}>
      <div style={style}>
           <HelpBox text= {helpText} extraTop={false}/>
        </div>
     
      <QuestionWrapper
        onMouseEnter={e => {
                     setStyle({opacity: '1', transition: 'all .1s ease-in-out'});
                 }}
                
                 onMouseLeave={e => {
                     setStyle({opacity: '0',transition: 'all .1s ease-in-out'})
                 }}
      
      >
           <FaRegQuestionCircle/>
         </QuestionWrapper>
      <DistWrapper>

        

        <DistHeading>{title}</DistHeading>

        <DistCenterWrap>

          <EthLogoWrapper>
           <img  src={'./eth.svg'}/>
          </EthLogoWrapper>
          <EthAmount>{eth}</EthAmount>

        </DistCenterWrap>

        <DollarAmount>(${dollarAmt})</DollarAmount>

         
      </DistWrapper>

      

    </DistContainer>
  )
}


