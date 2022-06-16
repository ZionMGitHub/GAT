import React,{ useEffect,useState } from 'react';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import { isDesktop  } from 'react-device-detect';

const SidebarNew = ({mintDashCall,comicDashCall}) => {

    const[ isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if (isOpened) 
             { setIsOpened(false);}
        })
    },[isOpened])

    const toggleNav = (event) => {
      if (isOpened){
          // console.log('close nav')
         setIsOpened(false);
      }else{
        // console.log('open nav')
         setIsOpened(true);
      }
       event.stopPropagation();
    }

  return (
    <Wrapp onClick={toggleNav}>
      <CloseBtn src={'./icons/close.png'} isOpened={isOpened} onClick={toggleNav}/>

    <div className={`open ${isOpened ? "oppenned" : ""}`}>
      

      <span className="cls" ></span>

      <span>
        <ul className="sub-menu">
         { isDesktop && <li>
            <a href="/" onClick={(e)=>{e.preventDefault()}}>Connect wallet</a>
          </li>}
          <li>
            <a href="./whitepaper.pdf" target={'true'}>whitepaper</a>
          </li>
          <li>
            <LinkS key={2}
                            to={'cloud'} 
                              smooth={true} 
                              duration={500} 
                              spy={true} 
                              exact={'true'} 
                              activeClass='active' 
                              onClick={()=>{
                                //   toggleNav();
                                  setTimeout(() => {  
                                    comicDashCall();
                                    }, 500);
                                  }}>Comic Studio</LinkS>
          </li>
          <li>
            <LinkS key={3}   
                              to={'acropolis'} 
                              smooth={true} 
                              duration={500} 
                              spy={true} 
                              exact={'true'} 
                              activeClass='active' 
                              onClick={()=>{
                                //   toggleNav();
                                  setTimeout(() => {  
                                    mintDashCall(null, true);
                                    }, 500);
                                
                                  }}>Minting Vault</LinkS>
          </li>
        </ul>
      </span>

      <span className="cls"></span>
      </div>
  </Wrapp>
  )
}

export default SidebarNew


const Wrapp = styled.div`
  /* background-color: yellow; */
  width: 50px;
	height: 50px;

   @media screen and (max-width: 770px) {
        order: 2;  
    }

  @media screen and (max-width:576px) {
        width: 35px;
	      height: 35px;
    }


`


const CloseBtn = styled.img`
   width: 50px;
	height: 50px;
  position: absolute; 
	top: 0px;
	right: 0px;
  margin: 28px;
  z-index: 50;
  opacity: ${({isOpened})=> isOpened ? '.75' : '0'};
  transition: opacity 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover{
    cursor: pointer;
  }
  /* display: none; */

  @media screen and (max-width:576px ) {
        width: 35px;
	      height: 35px;
    }

 @media screen and (max-width: 770px) {
        /* order: 2;   */
    }
  
`