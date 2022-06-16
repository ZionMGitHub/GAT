import React from 'react';
// import EthImgLogo from '../../../public/eth.svg'
// import Image from 'next/image';
import { 
  YtdContainer,
  YtdWrapper,
  YtdHeading,
  YtdSubheadingWrap,
  EthLogoWrapper,
  EthAmount,
  DollarAmount,

} from './ytdElements';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const YTDbox = (data) => { 
  const { title, eth, convertUSD, order } = data;

  const dollarAmt = numberWithCommas(Math.round(eth * convertUSD * 100) /100) ;

  return (
    <YtdContainer imgId={order}>
      <YtdWrapper>
        <YtdHeading>{title}</YtdHeading>

        <YtdSubheadingWrap>
          <EthLogoWrapper>
            <img  src={'./eth.svg'}/>
          </EthLogoWrapper>
          <EthAmount>{eth}</EthAmount>
          <DollarAmount>(${dollarAmt})</DollarAmount>

        </YtdSubheadingWrap>
      </YtdWrapper>
    </YtdContainer>
  )
}
