import React from 'react'
import styled from 'styled-components'

// import { Heading } from '../../global_styles';



// TODO:
// add subtitle
// add mint date
    // mint btn can be in place of mint date 
export const Landing = (props) => {
  const {isDesktop} = props;

  return (
    <Container isDesktop={isDesktop}>
        <Wrapper isDesktop={isDesktop}>
  
          {/* <NavBtnLink to="">Connect Wallet</NavBtnLink> */}
           <Heading>The World's first nft<br/>comicverse project</Heading>
           {isDesktop && <Subtitle>mint date: tba</Subtitle>}
        </Wrapper>
      </Container>  
  )
}



const Container = styled.div`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? '0%' : '1.9%')};
    width: 100%;
    height: ${({isDesktop}) => (isDesktop ? '11%' : '15%')};
    /* background-color: rgba(250,50,50,.5); */
    /* min-width: ${props => props.theme.boxstyle.minWidth};
    max-width: ${props => props.theme.boxstyle.maxWidth}; */
    margin: 0 auto;
`

const Wrapper = styled.div`
    position: absolute;
    right: 50%;
    width: ${({isDesktop}) => (isDesktop ? '20%' : '30%')};
    transform: translateX(50%);
    /* top: 58%; */
    top: ${({isDesktop}) => (isDesktop ? '57%' : '59%')};
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* background-color: aliceblue; */

    /* @media screen and (min-width: ${props => props.theme.breakpoints.lg}){
     top: 58%; 
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
     top: 58%;
    } */

  
`

const Heading = styled.h1`
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    /* font-weight: 800; */
    font-style: italic;
    letter-spacing: .075rem;
    text-align: center;
    font-size: 90%;
 
    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      /* font-size: .5rem; */
      font-size: 70%;
    }

     @media screen and (min-width: ${props => props.theme.breakpoints.lg}){
      /* font-size: .5rem; */
      font-size: 1.2rem;
    }


`

const Subtitle = styled.p`
    font-weight: 400;
    text-align: center;
    margin-bottom: .75rem;
    text-transform: uppercase;
    font-size: 85%;

      @media screen and (min-width: ${props => props.theme.breakpoints.lg}){
      /* font-size: .5rem; */
      font-size:  100%;
    }
`

