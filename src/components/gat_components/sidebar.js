 import React from 'react';
 import { data } from './data';
 import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { isDesktop  } from 'react-device-detect';


const links = [
     {
        id: 1,
        label: 'White Paper',
        link: '#'
    },
    {
        id: 2,
        label: 'Comicverse Studio',
        link: '#'
    },
    {
        id: 3,
        label: 'Mint 2.0 Vault',
        link: '#'
    },
]

 
 const Sidebar = ({isOpen, toggleNav, scrollNav,mintDashCall,comicDashCall}) => {
   return (
    <SidebarContainer isOpen={isOpen} onClick={toggleNav} >

       {isDesktop && scrollNav ? <NavBtn >
            <NavBtnLink to="">Connect Wallet</NavBtnLink>
        </NavBtn> : <></>}

        <Icon onClick={toggleNav} > 
            <CloseIcon />
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink key={1} to={'#'} onClick={toggleNav}>White Paper</SidebarLink>
                <SidebarLink key={2}
                        to={'cloud'} 
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact={'true'} 
                          activeClass='active' 
                          onClick={()=>{
                              toggleNav();
                              setTimeout(() => {  
                                 comicDashCall();
                                }, 500);
                              }}>Comicverse Studio</SidebarLink>

                <SidebarLink key={3}   
                          to={'acropolis'} 
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact={'true'} 
                          activeClass='active' 
                          onClick={()=>{
                              toggleNav();
                              setTimeout(() => {  
                                 mintDashCall();
                                }, 500);
                            
                              }}>Mint 2.0 Vault</SidebarLink>

               {/* {links.map((item)=>{
                        return <SidebarLink key={item.id} to={item.link} onClick={toggleNav}>{item.label}</SidebarLink>
                    })} */}
            </SidebarMenu>
        </SidebarWrapper>

        <SidebarBtnWrap>
            {/* <SidebarRoute to='/signin'>Sign In</SidebarRoute> */}
            <BtnGroup >
                        {data.socials.map((social,index)=>{
                            return <BtnWrapper   href={social.link}  key={index}>
                                <BtnImg src={social.imgPath}/>
                            </BtnWrapper>                      
                        })}
                        </BtnGroup>
        </SidebarBtnWrap>


    </SidebarContainer>
   )
 }
 
 export default Sidebar


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    /* height: 50%; */
    background: beige;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%': '0')};
    top: ${({isOpen}) => (isOpen ? '0': '-100%')};
    -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
`
const NavBtn = styled.div`
    display: ${({scrollNav}) => (scrollNav ? 'none' : 'flex')};
    align-items: center;
    justify-self: flex-end;
    border-radius: 10px;
    /* margin-right: 200px; */
    background-color: #AE4C26;
    border: solid 2px #441511;
    transition: opacity .15s ease-in;
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    opacity: 1;


    &:hover{
         background-color: #883B1D;
    }
`

const NavBtnLink =styled.a`

white-space: nowrap;
padding: 10px 22px;
color: #FACC69;
font-size: 16px;

/* border: none; */
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
float: right;

&:hover {
    transition: all 0.2s ease-in-out;

}
`

export const CloseIcon = styled(FaTimes)`
    color: #441511;

    &:hover{
        color: #AE4C26;
    }
`

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`

const SidebarWrapper = styled.div`
color: #441511;
margin-top: 80px;


  @media screen and (max-width: 480px ){
       margin-top: 60px;
    }
`

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 480px ){
        grid-template-rows: repeat(3, 60px);
    }
`

// const SidebarLink = styled.a`
const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        color: #AE4C26;
        transition: 0.2s ease-in-out;
    }
`

const SidebarBtnWrap =styled.div`
    display: flex;
    justify-content: center;
     margin-top: .2rem;
     /* background: red; */
`

// export const SidebarRoute = styled(LinkR)`
const SidebarRoute = styled.a`

    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`


const BtnGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-self: flex-start;
    opacity: 1;
    transition: opacity .15s ease-in;
    /* background-color: red; */
    margin-bottom: .5rem;


`

const BtnWrapper = styled.a`
  display:flex;   
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-color: #AE4C26;
  border: solid 2px #441511;
  justify-content: center;
  align-items: center;  
  margin: 0 .5rem;


    &:hover{
         background-color: #883B1D;
    }

`

const BtnImg = styled.img`
  width: 70%;
  -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  /* box-shadow:; */
  /* padding: 0.5rem; */
  /* height: 50%; */
`