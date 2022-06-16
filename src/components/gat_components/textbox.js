import { Heading, useWindowDimensions } from '../../global_styles';
import React, {useRef,useState} from 'react';


import styled from 'styled-components';
import { MobileTextViewer } from './mobileTextViewer';





export const Textbox = (data) => {
    const {tightSub, rightAlign} = data;
    const {title, text, subtext, preview} = data.data;

    const {windowWidth, windowHeight } = useWindowDimensions();
    // const [showModal, setShowModal] = useState(false);

    // const toggleView = ()=>{
    //     setShowModal(value => !value);
    //     // console.log('pres');
    //   }


  return (<>
      
    <Container >
        <Wrapper>
            {title && <Heading 
                        style={{marginBottom: `${windowWidth > 765 ? '.75rem' : '.25rem'}`, textAlign: `${rightAlign ? 'right': 'center'}`}}>{title}</Heading>}
            
            {/* {windowWidth > 765 ? 
            <> */}
            {
            text.map((info,index)=>{
                 return <Paragraph key={index}>{info}</Paragraph>
            })}

            {subtext && <Subtext 
                style={{marginTop: `${tightSub ? '-.75rem' : '0'}`}}
            >{subtext}</Subtext>}

            {/* </>:<Paragraph style={{textAlign: `${rightAlign ? 'right': 'center'}`}}>{preview}... <ReadMore onClick={toggleView}>Read More</ReadMore></Paragraph>*/}
             

        </Wrapper>

          
    </Container>
    {/* {showModal && <MobileTextViewer data={data.data} callback={toggleView}/>} */}
  </>
  )
}

const Container = styled.div`
    margin: 0 auto;
    max-width:  ${props => props.theme.boxstyle.textBoxMaxWidth};

     @media screen and (max-width:770px){
       max-width: 650px;
    }
`
const Wrapper = styled.div`
    margin: 0 ${props => props.theme.boxstyle.margin};
    overflow: hidden;
 

`

const Paragraph = styled.p`
    font-weight: 400;
    text-align: center;
    margin-bottom: .75rem;
    font-size: 1rem; 
    text-align: center;
   
    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: .8rem;
    }
/* 
     @media screen and (min-width: 550px){
      font-size: 1rem;
    }

      @media screen and (min-width: ${props => props.theme.breakpoints.lg}){
      font-size: 1.2rem; 
    } */

`

const Subtext = styled.p`
    font-size: small;
    font-weight: 400;
    text-align: center;
    
`

const ReadMore = styled.strong  `
  width: 100%;
  height: 100%;
  /* z-index: 2; */
  /* background-color: aliceblue; */
  &:hover{
    /* color: red; */
      color: ${props => props.theme.colors.accent};
      cursor: pointer;
  }

`