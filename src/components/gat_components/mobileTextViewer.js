import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import {IoCloseCircleSharp} from 'react-icons/io5';
import { useWindowDimensions } from '../../global_styles';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


export const MobileTextViewer = (data) => {
    const { callback } = data;
    const {title, text, mobileTitle } = data.data;
    const [showModal, setShowModal] = useState(false);
    const {windowWidth, windowHeight } = useWindowDimensions();
    const targetElement = document.querySelector('#body');

    const mintText = document.querySelector('#mintText');


  useEffect(()=>{
        // mintText.style.zIndex = 0;
        setShowModal(true);
        disableBodyScroll(targetElement);
        window.addEventListener('resize',close);
    return ()=> { 
        window.removeEventListener('resize',close); 
    };
  }, []);

    const close = () =>{
        setShowModal(false);
       
      
        setTimeout(() => {  
                enableBodyScroll(targetElement);
                //  mintText.style.zIndex = 1;
                callback();
            }, 500);
    }
    

  return (
    <MobileViewContainer id='mobileViewContainer' show={showModal}>
        <MobileViewWrapper id='mobileViewBody' show={showModal}>
            <MobileBG src={`${windowWidth > 500 ? '/images/textViewBG2.png': '/images/textViewBG.png'}`}/>
            <CloseIconWrap onClick={close}>
                    <CloseIcon/>
            </CloseIconWrap>

            <MobileTextWrap>
            <MobileHeader>
               {title ? title : mobileTitle}
            </MobileHeader>

            {text.map((info,index)=>{
                 return <MobileText key={index} >{info}</MobileText>
            })}


            </MobileTextWrap>
        </MobileViewWrapper>
    </MobileViewContainer>
  )
}


const MobileViewContainer = styled.div`
    position: fixed;
    z-index:  ${({show}) => (show ? '100' : '-1')};
    width: 100vw;
    height: 100vh;
    background-color: ${({show}) => (show ? '#FFFFFF75' : 'transparent')};
    top: 0;
    left: 0;
    transition: background-color .5s ease-in, z-index .5s ease-in;

`

const MobileViewWrapper = styled.div`
    position: absolute;
    width: 85%;
    max-width: 450px;
    height: min-content;
    transition: top .5s ease-in;
    top: ${({show}) => (show ? '50%' : '150%')};
    right: 50%;
    border-radius: 20px;
    overflow: hidden;
    transform: translateX(50%) translateY(-50%);
    z-index:  ${({show}) => (show ? '1000' : '-1')};


`

const MobileBG = styled.img`
    position: relative;
    /* top: 50%; */
    /* transform: translateY(-50%); */
    width: 100%;
    margin: 0 auto;



`

const CloseIconWrap = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 1.75rem;
    height: 1.75rem;
    /* background-color: red; */
    margin: 1rem;
    border-radius: 100%;
    z-index: 11;

`

const CloseIcon = styled(IoCloseCircleSharp)`
    width: 100%;
    height: 100%;
    color: #FFFFFF95;

    &:hover{
        color: #464545;
    }

`

const MobileTextWrap = styled.div`
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0%);
    position: absolute;
    width: 85%;
    height: 90%;
    /* height: 75%; */
    /* margin: 1rem; */
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
    /* padding: 0.5rem; */



`

const MobileHeader= styled.h3`
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.2rem;
    margin: 1rem .5rem;
    color: #FEF3C7;
    font-size: 1.2rem;
    font-weight: bolder;
`

const MobileText = styled.p`
    /* font-weight: 500; */
    text-align: center;
    color: #FEF3C7;
    font-size: 1rem;
    line-height: 1.1rem;
    margin-bottom: .75rem;
   
`
