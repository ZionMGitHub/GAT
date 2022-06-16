import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
// import { links } from './links';
// import { IconContext} from 'react-icons/lib';
// import { animateScroll as scroll } from 'react-scroll/modules';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { data } from './data';
import styled from 'styled-components';
import Sidebar from './sidebar';
import { isDesktop, isMobileOnly  } from 'react-device-detect';
import SidebarNew  from './sidebar2';




const links = [
    {
        id: 1,
        label: 'whitepaper',
        link: 'about'
    },
    {
        id: 2,
        label: 'comic studio',
        link: 'discover'
    },
     {
        id: 3,
        label: 'the vault',
        link: 'services'
    },
]


const Navbar = ( {mintDashCall,comicDashCall,isDesktopBG }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
        console.log('toggled')
    }

    const changeNav = () => {
        if((isDesktopBG && window.scrollY >= 30) || (!isDesktopBG &&  window.scrollY >= 110)){
            setScrollNav(true);
        }else{
             setScrollNav(false);
        }

        
    }

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            changeNav();
            setIsOpen(false);
        })
    },[])

    const toggleHome = () =>{
        // scroll.scrollToTop();
    }



  return ( <>
 

        <Nav scrollNav = {scrollNav}>
            <NavbarContainer scrollNav = {scrollNav}>
                    
                    {/* initial view */}
                    {/* <BtnGroup scrollNav = {scrollNav}>
                        {data.socials.map((social,index)=>{
                            return <BtnWrapper   href={social.link}  key={index} scrollNav = {scrollNav} target="_blank">
                                <BtnImg src={social.navImg}/>
                            </BtnWrapper>                      
                        })}
                        </BtnGroup> */}


                          <NavMenu scrollNav = {scrollNav}>
                    {/* {links.map((item)=>{
                        return <NavItem key={item.id}>
                            <NavLinks key={item.id}
                                to={item.link} 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact={'true'} 
                                offset={-80}
                                activeClass='active' >
                                {item.label}  
                            </NavLinks>
                        </NavItem>

                    })} */}
                
                    <NavItem >
                            <NavLinkA href="./whitepaper.pdf" target={'true'}>
                               whitepaper
                            </NavLinkA>
                        </NavItem>

                        <NavItem >
                            <NavLinks
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
                                  }}>
                               comic studio
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks 
                                to={'acropolis'} 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact={'true'} 
                                onClick={()=>{
                                //   toggleNav();
                                  setTimeout(() => {  
                                    mintDashCall(null,true);
                                    }, 500);
                                  }} >
                                the vault
                            </NavLinks>
                        </NavItem>
                </NavMenu>
             
                  <NavBtn>
                    {!scrollNav ?  <NavLinks to="" onClick={(e)=>{e.preventDefault()}}>Connect Wallet</NavLinks>:   <SidebarNew mintDashCall={mintDashCall}  
                            comicDashCall={comicDashCall}/>}
                   

                </NavBtn>

              
                    {window.innerWidth < 770 ? 
                    <><MintDateWrapper scrollNav = {scrollNav}>Mint date: Tba</MintDateWrapper>
                         <SidebarNew mintDashCall={mintDashCall}  
                            comicDashCall={comicDashCall}/>
                    </>
                    
                        :<></>
                }


                {/* {isDesktop  ? 
  
                <></>
 
               : <MintDateWrapperMobile scrollNav = {scrollNav}>Mint date: Tba</MintDateWrapperMobile>}
                {isDesktop && !isDesktopBG ? <MintDateWrapper scrollNav = {scrollNav}>Mint date: Tba</MintDateWrapper>: ''} */}
            </NavbarContainer>
        </Nav>
        
                 {/* </IconContext.Provider> */}
    </>
   
  )
}

export default Navbar

const Nav = styled.nav`
  
    background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'transparent')};
    height: 80px;
    width: 100%;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top:0;
    z-index: 10;
    /* background-color: rgba(5,5,5,.5); */

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`

const NavbarContainer = styled.div`
    display: flex;
    justify-content:${({scrollNav}) => (scrollNav ? 'flex-end' : 'space-between')};
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    /* background-color: blue; */

    @media screen and (max-width: 770px){
         /* justify-content: flex-end; */
    }


`


const BtnGroup = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
justify-self: flex-start;
opacity: ${({scrollNav}) => (scrollNav ? '0' : '1')};
transition: opacity .0s ease-in;
/* background-color: red; */

  @media screen and (max-width: 770px){
        display: none;
    }

    

`

const BtnWrapper = styled.a`
    display:flex;   
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 100%;
    justify-content: center;
    align-items: center;  
    margin: 0 .3rem;

    &:hover{
        background-color: white;
            
    }

        @media screen and (max-width: 770px){
        order: 1;
    }

`

const BtnImg = styled.img`
  width: 100%;
  -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
   border-radius: 100%;
  /* box-shadow:; */
  /* padding: 0.5rem; */
  /* height: 50%; */

  &:hover{
      cursor: pointer;
  }
`



export const NavMenu = styled.ul`
    opacity: ${({scrollNav}) => (scrollNav ? '0' : '1')};
    transition: opacity .0s ease-in;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -22px; can be changed */
    /* height: 100%; */
    /* background-color: red; */

    @media screen and (max-width: 770px) {
        display: none;
    }
`

export const NavItem = styled.li`
    /* height: 80px; */
    /* background-color: blue; */
    display: flex;
    align-items: center;
`

export const NavLinks = styled(LinkS)`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-style: italic;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .9rem 1rem;
    /* height: 100%; */
    border: 2px solid transparent;
    background-color: rgba(0,0,0,.45);
    opacity: .95;
    /* background-color: transparent; */


    &:hover {
        cursor: pointer;
        border: 2px solid white;
        background-color: rgba(0,0,0,.85);
         opacity: 1;
    }
    `


export const NavLinkA = styled.a`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-style: italic;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .9rem 1rem;
    /* height: 100%; */
    border: 2px solid transparent;
    background-color: rgba(0,0,0,.45);
    opacity: .95;
    /* background-color: transparent; */


    &:hover {
        cursor: pointer;
        border: 2px solid white;
        background-color: rgba(0,0,0,.85);
         opacity: 1;
    }
    `

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`


export const NavBtnLink = styled(LinkS)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const NavHamburger = styled.div`
    font-size: 1.8rem;
    cursor: pointer;
    -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
    display: block;
  

    @media screen and (max-width: 770px) {
        order: 2;
        
    }
`


const HamIcon = styled(FaBars)`
  color: #FFF;

  &:hover{
      color: #883B1D;
  }

`

const MintDateWrapperMobile = styled.div`
    display: ${({scrollNav}) => (scrollNav ? 'none' : 'flex')};
    align-items: center;
    transition: opacity .15s ease-in;
    text-transform: uppercase;
    color: white;
    font-weight: bolder;
    font-size: 1rem;
    /* margin-top: -80px;
    position: absolute;
    top: 0;
    left: 0; */

    opacity: ${({scrollNav}) => (scrollNav ? '0' : '1')};

     /* @media screen and (min-width: 770px){
        position: absolute;
        right: 26.5%;
    } */

    @media screen and (min-width: ${props => props.theme.breakpoints.sm}){
        font-size: 1.4rem;
    }

`




const MintDateWrapper = styled.div`
    display: ${({scrollNav}) => (scrollNav ? 'none' : 'flex')};
    align-self: center;
    transition: opacity .15s ease-in;
    text-transform: uppercase;
    color: white;
    font-weight: bolder;
    font-size: 1rem;
     font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-style: italic;

    /* position: sticky; */
    /* top: 80px; */
    /* left: 0; */
    z-index: 10;
    /* padding: 0 24px; */
    height: 20px;
    /* margin-top: -20px; */

    opacity: ${({scrollNav}) => (scrollNav ? '0' : '1')};

     /* @media screen and (min-width: 770px){
        position: absolute;
        right: 26.5%;
    } */

    @media screen and (min-width: ${props => props.theme.breakpoints.sm}){
        font-size: 1.4rem;
    }
`