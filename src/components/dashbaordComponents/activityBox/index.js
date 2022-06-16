import React,{useState} from 'react'
import styled from 'styled-components';
// import EthImgLogo from './eth.svg'
// import Image from 'next/image';

import {
  ActivityContainer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ActivityHeader,
  HeadingWrapper,
  HeaderTitle,
  Button,
  AccordianHeading,
  HeadingMain,
  SubHeadingWrap,
  HeadingSub,
  AccordionBody,
  Typography,
  AccordianWrapper,
  AccordianMain,
  AccordianSubWrap,
  AccordianSub,
  AccordianRoyaltyWrap,
  NFTinfo,
  EthWrap,
  QuestionWrapper,
} from './activityElements'


import {IoMdCart} from 'react-icons/io';
import { FaRegQuestionCircle} from 'react-icons/fa';
// import { HelpBox } from '../HelpBox';

export const ActivityBox = (data) => {


  const {nfts, helpText}  = data;

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded  ? panel : false);
  };



  const toggleAll = () => {
     
      if (expanded === 'all'){
        setExpanded('')
        console.log(expanded)
      }else{
        setExpanded('all')
        console.log(expanded)
      }
  }

  const [hoverIndex, changeHoverIndex] = useState('');
  const showBubble = {visibility: '1', opacity: '1',transition: 'all 0s ease-in-out',};
  const hideBubble = {opacity: '0',visibility: '0', transition: 'all 0s ease-in-out',};

  


  return (
    <ActivityContainer>
      
        {/* activity box title */}
        <ActivityHeader>
          <HeaderTitle>OpenSea Sales Activity</HeaderTitle>
          {/* <Button onClick={toggleAll}>{expanded === 'all' ? 'Close all' : 'See All'}</Button> */}
        </ActivityHeader>

        {/* accordian heading */}
        <AccordianHeading>
            <HeadingWrapper>

                <HeadingMain>Nft Name</HeadingMain>

                <SubHeadingWrap>
                    <HeadingSub style={{flex:'1.5'}}>Price</HeadingSub>
                    <HeadingSub style={{flex:'2'}}>Date</HeadingSub>
                    <HeadingSub style={{flex:'2'}}>Royalty Recieved</HeadingSub>
                </SubHeadingWrap>
            </HeadingWrapper>
        </AccordianHeading>

        {/* accordian section */}
        <AccordionBody>
          <div style={{ height:'220px'}}>

          {/* creates accordian for each nft */}
          {nfts.map((nft, index)=> {

              return(
              <Accordion key={`accord-${index}`} expanded={expanded === `panel${index}` || expanded==='all' } onChange={handleChange( `panel${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                  <Typography>{nft.collection_name} #{nft.token_id}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <AccordianWrapper>
                          
                          {/* fills subsection with transactions */}
                        {nft.transactions.map((transaction,innerdex)=>{
                            


                            return <div key={`transaction-${index}-${innerdex}`}>
                            <NFTinfo >
                                <AccordianMain>
                                  <IoMdCart style={{marginLeft: '1rem'}}/>
                                </AccordianMain>
                                {/* style={{justifyContent: 'flex-start'}} */}
                                <AccordianSubWrap>
                                      <EthWrap style={{flex: '1',}}>
                                        <div style={{marginRight: '.3rem',marginLeft: '33%'}}><img  src={'./eth.svg'}/></div>
                                        <AccordianSub >{transaction.value}</AccordianSub>
                                      </EthWrap>
                                    
                                    <div style={{flex: '1'}}>
                                           <AccordianSub style={{ marginLeft:'15%'}}>{transaction.date}</AccordianSub>
                                    </div>
                                   
                                  
                                </AccordianSubWrap>

                                <AccordianRoyaltyWrap>
                                    <EthWrap style={{marginLeft:' 25%'}} >
                                        <div style={{margin: '0 .3rem'}}><img  src={'./eth.svg'}/></div>
                                        <AccordianSub>{transaction.royalty_amount_earned}{transaction.royalty_amount_earned  === 0  ?'(below royalty floor)' : ''}</AccordianSub>
                                      </EthWrap>

                                      {  transaction.royalty_amount_earned === 0 ?
                                      <>
                                      <QuestionWrapper
                                            onMouseEnter={e => {
                                                      changeHoverIndex(`${index}-${innerdex}`);
                                                    }}
                                                    
                                                    onMouseLeave={e => {
                                                      changeHoverIndex(``);
                                                    }}
                                          
                                          >
                                              <FaRegQuestionCircle/>
                                        </QuestionWrapper>

                                     
                                           </> : <></>}
                                </AccordianRoyaltyWrap>
                            </NFTinfo>
                           <div style={hoverIndex === `${index}-${innerdex}` ? showBubble : hideBubble}>
                                            <HelpBox text= {helpText}/>
                            </div>
                          </div>
                        })}
                        

                    </AccordianWrapper>

                </AccordionDetails>
              </Accordion>)
   
          })}

          </div>
          </AccordionBody>
       
      </ActivityContainer>
  )
}



const Box = styled.div`
    z-index: 5000;
    position: absolute;
    background-color:  ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    width: 250px;
    right: 0;
    /* width: 80%; */
    /* height: 50px; */
    /* margin: 0 10px; */
    /* margin-top: 50px; */
    /* right: 15px; */
    /* margin-top: ${({})}; */
    
    /* transition: all .05s ease-in-out; */
    /* display: none; */

    /* top: 100px; */
    /* right: 100px; */

`

const Wrapper = styled.div`
    margin:  ${props => props.theme.boxstyle.wrapperMargin};


`

const Info = styled.p`
  font-size:  ${props => props.theme.textstyle.subtext};
    /* color:  ${props => props.theme.colors.subtitle}; */
 font-weight: 400;
`



 const HelpBox = (data) => {  
    const { text, extraTop } = data;
    // console.log(extraTop);
    // let marginTop = '100px';
  return (
    <Box alot={extraTop}>
        <Wrapper>
            <Info>
                {/* {extraTop} */}
                {text}
            </Info>
        </Wrapper>
    </Box>
  )
}
