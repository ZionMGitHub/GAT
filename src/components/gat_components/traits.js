import React from 'react'
// import Image from 'next/image'

// import traitsImg from '../../public/images/traits.png'
import styled from 'styled-components'
// import { Heading } from '../global_styles';
import { Heading } from '../../global_styles';






export const Traits = () => {
  return (
     <TraitsContainer>
                <Heading>Traits</Heading>
                <ImgWrapper>
                  <img
                    //  layout='intrinsic'
                     src='../images/traits.png'
                  />
                </ImgWrapper>
            </TraitsContainer>
            
  )
}


const TraitsContainer = styled.div`
    position: absolute;
    top: ${props => props.theme.sectionStart.traits};
    width: 100%;
    height: 6%;
    /* background-color: rgba(245,140,0,.5); */
    margin: 0 auto;
`

const ImgWrapper = styled.div`
    width: 40%;
    /* min-width: 150px;
    max-width: 350px; */
    margin: 0 auto;
`