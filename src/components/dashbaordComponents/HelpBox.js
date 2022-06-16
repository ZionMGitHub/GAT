import styled from 'styled-components';
import React from 'react'


const Box = styled.div`
    z-index: 50;
    position: absolute;
    background-color:  ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    width: 250px;
    /* width: 80%; */
    /* height: 50px; */
    /* margin: 0 10px; */
    /* margin-top: 50px; */
    /* right: 15px; */
    /* margin-top: ${({})}; */
    
    /* transition: all .05s ease-in-out; */
    /* display: none; */

`

const Wrapper = styled.div`
    margin:  ${props => props.theme.boxstyle.wrapperMargin};


`

const Info = styled.p`
  font-size:  ${props => props.theme.textstyle.subtext};
    /* color:  ${props => props.theme.colors.subtitle}; */
 font-weight: 400;
`



export const HelpBox = (data) => {  
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
