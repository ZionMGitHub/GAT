import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import {IoCloseCircleSharp} from 'react-icons/io5';
import { useWindowDimensions } from '../../global_styles';
import HTMLFlipBook from 'react-pageflip';
import ToggleButton from 'react-toggle-button';




export const PreviewModal = ({ state, dispatch }) => {

    const close = () =>{
        // setTimeout(() => {  
                dispatch({type: 'HIDE_MODAL'})
            // }, 500);
    }
    

  return (
    <ModalContainer id='mobileViewContainer' show={state.isModalOpen}>
        <MobileViewWrapper id='mobileViewBody' show={state.isModalOpen}>
            
            {/* close btn */}
            <CloseIconWrap onClick={close}>
                    <CloseIcon/>
            </CloseIconWrap>

             {/* page flip btns */}
              <ChevronWrap onClick={()=>{
                  dispatch({type: 'CHANGE_PREVIEW_INDEX', newIndex: state.comicPreviewIndex -= 1})

              }}><CHImg src={'/icons/arrow.png'} style={{transform:'rotate(180deg)'}}/></ChevronWrap>
            <ChevronWrap onClick={()=>{
                dispatch({type: 'CHANGE_PREVIEW_INDEX', newIndex: state.comicPreviewIndex += 1})

            }}><CHImg src={'/icons/arrow.png'} /></ChevronWrap>
           

            <ContentWrap>

                {/* flip book */}
                <BookWrapper>
                    <DemoPage src={['./Assets/comicPreview/cover.png', state.comicImgPath][state.comicPreviewIndex]}/>

                    {/* <MyBook comicImgPath={['./Assets/comicPreview/cover.png', state.comicImgPath,'./Assets/comicPreview/demo.jpg','./Assets/comicPreview/demo.jpg',]}/> */}
                     {/* <HTMLFlipBook
                        showCover={true}
                        width={'50%'}
                        height={'100%'}
                        style={{ margin: "0 auto" }}
                        >
                        <div className="demoPage" key={'cover'}>
                            <img src={'./Assets/comicPreview/cover.png'} width={'100%'}alt="" />
                        </div>

                        
                        {['./Assets/comicPreview/cover.png', state.comicImgPath].map((el, i) => (
                            <div className="demoPage" key={el.id}>
                            <PageImg src={el} alt="" />
                            </div>
                        ))}
                        </HTMLFlipBook> */}
                    {/* <img src={state.comicImgPath} width={'50%'}/> */}
                    {/* {console.log(state.comicImgPath)} */}
                </BookWrapper>

                {/* bottom btn panel */}
                <BtnGroupWrap>

                    {/* cancel btn */}
                   <ButtonWrap>
                       <BtnImg src={'./Assets/comicWidgets/button.png'}/>
                       <BtnText onClick={()=>{
                            dispatch({type: 'CANCEL_MODAL'})
                       }}>Cancel</BtnText></ButtonWrap>

                    {/* mint btn */}
                   <ButtonWrap mint={true}>
                       <BtnImg src={'./Assets/comicWidgets/button.png'}/>
                       <BtnText mint={true} onClick={()=>{
                            dispatch({type: 'CANCEL_MODAL'});
                       }}>Mint Comic</BtnText></ButtonWrap>

                    {/* toggle bubbles */}
                    <ButtonWrap>
                        <ToggleText>Speech bubbles</ToggleText>
                        <ToggleWrap>
                            
                            <ToggleButton
                                value={ state.showTextBubbles || false }
                                thumbStyle={borderRadiusStyle}
                                trackStyle={borderRadiusStyle}
                                onToggle={(value) => { 
                                    // console.log(!value)
                                    dispatch({type: 'TOGGLE_BUBBLE' , newValue: !value})
                                    
                                }}
                                 />

                        </ToggleWrap>

                    </ButtonWrap>

                </BtnGroupWrap>
            </ContentWrap>

        </MobileViewWrapper>
    </ModalContainer>
  )
}


const ModalContainer = styled.div`
  text-shadow: 0 0 2px #FFF, 0px 0px 5px rgba(206,206,206,.5);
  text-shadow: 0 0 1px #FFF, 0px 0px 5px rgba(206,206,206,.5);
    position: fixed;
    z-index:  ${({show}) => (show ? '100' : '-1')};
    width: 100vw;
    height: 100vh;
    /* background-color: ${({show}) => (show ? 'rgba(255,255,255,.6)' : 'transparent')}; */
    background-color: ${({show}) => (show ? 'rgba(0,0,0,.8)' : 'transparent')};

    top: 0;
    left: 0;
    transition: background-color .5s ease-in, z-index .5s ease-in;

`

const MobileViewWrapper = styled.div`
    background-color: rgba(1,10,56,.85);
    position: absolute;
    width: 85%;
    max-width: 850px;
    /* max-width: 450px; */
    height: 75%;
    transition: top .5s ease-in;
    top: ${({show}) => (show ? '52%' : '150%')};
    right: 50%;
    border: 2px solid white;
    /* border-radius: 20px; */
    overflow: hidden;
    transform: translateX(50%) translateY(-50%);
    z-index:  ${({show}) => (show ? '1000' : '-1')};
    display: flex;
    flex-direction: column;



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

    &:hover{
        cursor: pointer;
    }
`

const CloseIcon = styled(IoCloseCircleSharp)`
    width: 100%;
    height: 100%;
    color: #FFFFFF95;
    background-color: transparent;

    &:hover{
        color: #464545;
        cursor: pointer;
    }

`

const ChevronWrap = styled.button`
    position: absolute;
    top: 40%;
    margin: 0 5%;
    background-color: transparent;
    border: none;
    height: 50px;
     &:hover{
         /* cursor: pointer; */
         filter: drop-shadow(0 0 6px rgb(255, 255, 255, .9));
    }

    &:nth-child(2){
        right: 0;
    }
`

const CHImg = styled.img`
    height: 100%;
    &:hover{
        cursor: pointer;
    }
`

const ContentWrap = styled.div`

    top: 5%;
    left: 50%;
    transform: translate(-50%, 0%);
    position: absolute;
    width: 75%;
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

const BookWrapper = styled.div`
    width: 100%;
    height: 80%;
    /* border: 2px white solid;   */
    padding:  0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: RED; */
`

const DemoPage = styled.img`
    height: 100%;

`

const Book = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: yellow; */
`

const BtnGroupWrap = styled.div`
    width: 100%;
    height: 20%;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;

    

`


const ButtonWrap = styled.div`
    width: 130px;
    height: 40px;
    
    margin: 0 .8rem;
    position: relative;

    &:nth-child(3){
       /* outline: 2px solid white; */
       display: flex;
       justify-content: space-between;
       align-items: center;
       
    }

`



const BtnImg = styled.img`
  width: 100%;
    &:hover{
            cursor: pointer;    
    }
`

const BtnText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    transform: translate( -50%, -50%);
    font-size: 90%;
    text-transform: uppercase;
    transition: all ease .2s;
    background-color: ${({mint}) => (mint ? 'rgba(255,255,255,.25)': ' transparent')};

    ${({mint}) => (mint ? 
    `
        // background-color: rgba(255,255,255,.3);
        -webkit-box-shadow:0px 0px 6px 0px rgba(255,255,255,0.9);
        -moz-box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);
        box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.9);   
    
    
    `: '')};
    transition: all ease .2s;

    &:hover{
        cursor: pointer;
        background-color: rgba(255,255,255,.35);
        -webkit-box-shadow:0px 0px 10px 0px rgba(255,255,255,0.9);
        -moz-box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.9);
        box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.9);            
    }

`


const ToggleText = styled.p`
    flex: 1;
    color: white;
    text-transform: uppercase;
    font-size: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    /* background-color: yellow; */
`


const borderRadiusStyle = { borderRadius: 2 }
const ToggleWrap = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

  
`



const Page = React.forwardRef((props, ref) => {
  return (
    <div className="book-page" ref={ref}> 
      {/* <h1>Page Header</h1> */}
     <img className={' page-image'}src={props.src} width={'100%'}/>
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

function MyBook(props) {
  return (
    <HTMLFlipBook 
        width={'50%'} 
        height={'150%'} 
        size={'stretch'} 
        showCover={true} 
        style={{marginTop:'-50%'}}

        >
        {props.comicImgPath.map((path, index)=>{
              return <Page key={index} number={index} src={path}/>
        })}
    
      {/* <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page> */}
    </HTMLFlipBook>
  );
}