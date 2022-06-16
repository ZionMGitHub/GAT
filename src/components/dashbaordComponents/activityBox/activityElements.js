import styled from 'styled-components';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled as styledMui } from '@mui/material/styles';

import React from 'react';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


export const ActivityContainer = styled.div`
    /* background-color: ${props => props.theme.colors.primary}; */
    background-image: url('/Assets/mintWidgets/activity.png');
    background-size: cover;
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    box-shadow:  ${props => props.theme.boxstyle.boxShadow};
    width: 98%;
    height: 325px;   
    margin: 8px auto;

     @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        width: 98%;
    }
`

export const ActivityWrapper = styled.div`
    margin:  ${props => props.theme.boxstyle.wrapperMargin};
    width: 100%;
    width: 100%;
     
  
`


export const ActivityHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${props => props.theme.boxstyle.wrapperMargin};
    margin-bottom: 0;
`

export const HeaderTitle = styled.h1`
    color:  ${props => props.theme.colors.title};
    text-transform: uppercase;
    font-size:  ${props => props.theme.textstyle.heading};
    letter-spacing: .05rem;
    margin-bottom: 1.2rem;
    font-weight:bolder ;
    letter-spacing: 1px;

     @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        font-size:  .8rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        font-size:  ${props => props.theme.textstyle.heading};
    }


`
export const Button = styled.button`
    height: 100%;
    border-radius: 5px;
    background: ${props => props.theme.colors.hightlight};
    white-space: nowrap;
    padding: 5px 30px;
    color: ${props => props.theme.colors.white};
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    font-weight: 600;
    font-size:  ${props => props.theme.textstyle.subtext};

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(85%);
    }


`

export const AccordianHeading = styled.div`
    background-color: rgba(0,0,0,.25);
    border-radius: 4px;
    /* margin: .1rem .3rem; */
     margin: 0 .8rem;
`
export const HeadingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 ${props => props.theme.boxstyle.wrapperMargin};
    padding: .75rem 0;
    align-items: center;
`

export const HeadingMain = styled.h6`
    flex: 2;
    color: ${props => props.theme.colors.subtitle};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
`

export const SubHeadingWrap = styled.div`
     display: flex;
     justify-content: space-between;
     flex: 4;
    align-items: center;

      @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        display: none;
    }
`

export const HeadingSub = styled.h6`
    color: ${props => props.theme.colors.subtitle};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
`

export const AccordionBody = styled.div`
    /* max-height: 200px; */
    /* background-color: red; */
    /* background-color: transparent; */
    /* height: min-content; */
    margin: 0 .5rem;
    overflow-y: scroll;
    overflow-x: hidden;
    /* padding: 1rem; */
     -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
    overflow-x: visible;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

`


export const Accordion = styledMui((props) => (
  <MuiAccordion disableGutters={true} elevation={5}  {...props}
   sx={{
       backgroundColor: 'transparent',
       marginBottom:' 0px',
       height: 'max-content',
        //  borderBottom: `1px solid #F7F7FA`,
        }}
        
        />
))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
  ':last-child': {
    borderBottom: 0,
    marginBottom:' 0px'
  },
//   '&:before': {
//     display: 'none',
//   },
}));

export const AccordionSummary = styledMui((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ 
        // backgroundImage:` url('/Assets/mintWidgets/walletBtn.png')`,
        // backgroundColor: 'transparent',
        // backgroundSize: '100%',
        fontSize: '1rem' ,
        color: '#FEF3C7',
        transform: 'rotate(90deg)',
        marginBottom:' 0px',
         
        // boxShadow: '0px 16px 20px -7px rgba(0,0,0,0.5)',
        
        
    }} />}
    {...props}
  />
))(({ theme }) => ({
//   backgroundColor: '#3A3A44',
  //  backgroundImage:` url('/Assets/mintWidgets/walletBtn.png')`,
    backgroundColor: 'rgba(0,0,0,.45)',
    borderRadius: '4px',
    margin:'.1rem .3rem',
    boxShadow: 'none',

  
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    // marginLeft: theme.spacing(1),
  },
}));

export const Typography = styled.h5`
    color: ${props => props.theme.colors.white};
    font-weight: 500;
    letter-spacing: 1px;
`


export const AccordionDetails = styledMui(MuiAccordionDetails)(({ theme }) => ({
    //  maxHeight: '85px',
    //     overflowX: 'hidden',
    //     overflowY:'scroll',
          // backgroundColor: 'blue',

  borderTop: '1px solid rgba(0, 0, 0, .125)',
//   background: '#484850',
  margin: 0,
  padding: 0,
       overflow: 'hidden'


}));



export const AccordianWrapper = styled.div`
    /* max-height: 125px; */
    overflow-y: scroll;


    &NFTinfo:last-child{
       /* padding-bottom: .75rem; */
    }
`

export const NFTinfo = styled.div`
    display: flex;
    justify-content: space-between;
      align-items: center;
    /* border-bottom: .05rem solid ${props => props.theme.colors.white}; */
     background-color: rgba(255,255,255,.2);
    border-radius: 4px;
    margin: .1rem .3rem;
    

    /* background-color: red;  */
`

export const AccordianMain = styled.p`
    flex: 2.2;
    color: ${props => props.theme.colors.subtitle};
    font-weight: 600;
    letter-spacing: 1px;
    /* background-color: aliceblue; */
    display: flex;
    align-items: center;
    /* justify-content: center; */

     @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      flex: none;
    }
`


export const AccordianSubWrap = styled.div`
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex: 4;
     
    
    
     
`

export const AccordianRoyaltyWrap = styled.div`
    flex: 3;
    background-color: ${props => props.theme.colors.accent};
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
     background-color: rgba(0,0,0,.4);
    border-radius: 4px;
    margin: .1rem auto;
    
  
    
`

export const AccordianSub = styled.h6`
    color: ${props => props.theme.colors.white};
    font-weight: 400;
    letter-spacing: 1px;
     padding: .75rem 0;

`

export const EthWrap =styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  /* margin-left: 20%; */


   @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
        margin-left: 0;
    }
  
`


export const QuestionWrapper = styled.h3`
  
  /* background-color: red;  */
    color:  ${props => props.theme.colors.subtitle};
    /* margin:  ${props => props.theme.boxstyle.wrapperMargin}; */
    margin: 0 .5rem;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
      &:hover{
        cursor: pointer;
    }


`