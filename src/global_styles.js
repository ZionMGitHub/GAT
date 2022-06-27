import styled, { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react';
import { isDesktop  } from 'react-device-detect';


export const Heading = styled.h1`
    text-transform: uppercase;
    /* font-weight: 800; */
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.6rem;

    /* @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      font-size: 1.4rem;
    } */

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 1rem;
    }
    
`

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham.otf");
    font-style: normal;
    /* font-weight: 400; */
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham-Bold";
    src: url("/fonts/Gotham-Bold.otf");
    font-style: normal;
    font-weight: bolder;
    font-display: swap;
  }


   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.1s ease;
    user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
   /* cursor: default; */

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: visible; 


    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

  }


  #root{
    font-family: 'Poppins', sans-serif;
    -webkit-overflow-scrolling: touch;
  }

  #body{
    width: 100vw;
    overflow-x: hidden;
  }

  #mintDash{
    font-family: "Poppins", sans-serif;
  }

  #comicverse {
     font-family: "Gotham", sans-serif;
  }

  .fade-out-comic {
    animation-duration: 1.2s;
    animation-name: fadeout-comic;
    animation-iteration-count: 1;
}

@keyframes fadeout-comic {
  0% {
   opacity: .6;
  }
  50% {
   opacity: .84;
  }

  100% {
   opacity: 0;
  }
}

.fade-out {
    animation-duration: 1.2s;
    animation-name: fadeout;
    animation-iteration-count: 1;
}

@keyframes fadeout {
  0% {
   opacity: 1;
  }
  50% {
   opacity: 1;
  }

  100% {
   opacity: 0;
  }
}

.fade-in {
    animation-duration: 1.8s;
    animation-name: fadein;
    animation-iteration-count: 1;
}

@keyframes fadein {
  0% {
   opacity: 0;
  }
  50% {
   opacity: 0;
  }

  100% {
   opacity: 1;
  }
}


.fade-out-scroll {
    animation-duration: 1.2s;
    animation-name: fadeout-scroll;
    animation-iteration-count: 1;
}

@keyframes fadeout-scroll {
  0% {
   opacity: .65;
  }
  50% {
   opacity: .65
  }

  100% {
   opacity: 0;
  }
}

.fade-in-scroll {
    animation-duration: 1.8s;
    animation-name: fadein-scroll;
    animation-iteration-count: 1;
}

@keyframes fadein-scroll {
  0% {
   opacity: 0;
  }
  50% {
   opacity: 0;
  }

  100% {
   opacity: .65;
  }
}

.fade-in-comic {
  opacity: .85;
    animation-duration: 1.8s;
    animation-name: fadein-comic;
    animation-iteration-count: 1;
}

@keyframes fadein-comic {
  0% {
   opacity: 0;
  }
  50% {
   opacity: 0;
  }

  100% {
   opacity: .85;
  }
}

.blink {
  animation: blink 3s infinite;

}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

  body{
    height: 100vh;
    width: 100vw;

    
    /* background-size: cover; */

      @media screen and (max-width: 750px){
       height: 100%;
       margin-bottom: 20px;
    }
  }



  /*
=============== 
Slider
===============
*/

.section-center {
  /* margin: .5rem auto; */
  width: 100%;
  /* have to have a height */
  height: 200px;
  /* height: 120%; */
  /* flex: 1; */
  max-width: 650px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  min-height:  150px;
  overflow: hidden;
}
.slider-img {
  /* margin-bottom: 1rem; */
  /* width: 150px; */

  height: 100%;
  min-height: 150px;
  /* background-color: blue; */
  object-fit: cover;
  -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
}


.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
  opacity: .75;
 border: 2px solid transparent;
  color: white;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  /* border-color: transparent; */
  font-size: 1rem;
  border-radius:  0.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.prev:hover,
.next:hover {
  opacity: 1;
   cursor: pointer;
    border: solid 2px white;
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
@media (min-width: 800px) {
  .text {
    max-width: 45em;
  }
  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s linear;
}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}

article.activeSlideBack{
  opacity: 1;
  transform: translateX(0);
}
article.lastSlideBack {
  transform: translateX(100%);
}
article.nextSlideBack {
  transform: translateX(-100%);
}


  /*
=============== 
nav menu
===============
*/

.open{
   font-family: 'Montserrat', sans-serif;
   font-style: italic;
  @media screen and (max-width: 770px) {
        order: 2;
        
    }
	position: relative; 
	top: 0px;
	right: 0px;
	display: flex;
  align-items: center;
  justify-content: center;
	cursor: pointer;
  z-index: 20;
  /* background-color: red; */
	transition: opacity 0.2s linear;
  width:100%;
	height: 100%;
  opacity: .8;
  

  /* @media screen and (max-width:576px) {
        width: 35px;
	      height: 35px;
    } */


	&:hover{
		opacity: 1;
    /* cursor: pointer; */
	}
	span{
		display: block;
		float: left;
		clear: both;
		height: 4px;
		width: 85%;
		// border-radius: 40px;
		background-color: #fff;
		position: absolute;
		/* right: 3px;*/
		top: 0px; 
		overflow: hidden;
		transition: all 0.4s ease;
		&:nth-child(1){
			margin-top: 10px;
			z-index: 9;
      
		}
		&:nth-child(2){
			margin-top: 25px;
		}
		&:nth-child(3){
			margin-top: 40px;
		}

     @media screen and (max-width:576px) {
        &:nth-child(1){
          margin-top: 5px;
          z-index: 9;  
        }
        &:nth-child(2){
          margin-top: 15px;
        }
        &:nth-child(3){
          margin-top: 25px;
        }
    }
	}
}
.sub-menu{
	  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		height: 0;
		width: 0;
		right: 0;
		top: 0;
		position: absolute;
		background-color: rgba(0,0,0,.75);
		z-index: 22;
		overflow: hidden;
    
  
		li{
			display: block;
			height: auto;
			margin-top: -160px;
			margin-left: -160px;
      width: 65%;
      padding: 1rem .75rem;
      border: 2px solid transparent;
    

      &:hover{
        border: 2px solid white;
        cursor: pointer;
        /* padding: -4px .75rem;
        */

      }
			a{
				color: #fff;
			
				font-size: 16px;
				width: 100%;
				display: block;
				float: left;
				/* line-height: 40px; */
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;

        &:hover{
          cursor: pointer;
        }
			}
		}
	}

	.oppenned{
  /* background-color: blue; */
     opacity: ${isDesktop ? '.8' : '.95'};

		.sub-menu{
			opacity: 1;
			height: ${isDesktop ? '380px' : '300px'};
			width: 300px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box;    /* Firefox, other Gecko */
      box-sizing: border-box;  
      /* background-color: red; */
       box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
       margin: 0%;
      /* filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25)); */
		}
		span:nth-child(2){
			overflow: visible;
		}
		span:nth-child(1), span:nth-child(3){
			z-index: 100;
			transform: rotate(45deg);
      opacity: 0;
		}
		span:nth-child(1){
			transform: rotate(45deg) translateY(12px) translateX(12px);
		}
		span:nth-child(2){
			height: ${isDesktop ? '380px' : '300px'};
			width: 300px;
			right: 0px;
			top: 0px;
      margin: 0%;
			// border-radius: 50%;
			/* background-color: rgba(38, 84, 133, 0.54); */
      background-color: rgba(0,0,0,.75);
		}
		span:nth-child(3){			
			transform: rotate(-45deg) translateY(-10px) translateX(10px);
		}

    @media screen and (max-width:576px) {
      	span:nth-child(2){
			overflow: visible;
      }
      span:nth-child(1), span:nth-child(3){
        z-index: 100;
        transform: rotate(45deg);
      }
      span:nth-child(1){
        transform: rotate(45deg) translateY(6px) translateX(6px);
        /* background-color: red; */
      }
      span:nth-child(2){
       	height: ${isDesktop ? '380px' : '300px'};
        width: 300px;
        right: 0px;
        top: 0;
        margin: 0%;
        // border-radius: 50%;
        /* background-color: rgba(38, 84, 133, 0.54); */
        background-color: rgba(0,0,0,.75);
       
      }
      span:nth-child(3){			
        transform: rotate(-45deg) translateY(-7.5px) translateX(7.5px);
        /* background-color: blue; */

      }
    }

		li{
			/* margin-right: 50%;
      transform:translateX(-50%); */
      transition: outline 0.2s ease-in;
      margin: .5rem auto;
      

		}
	}



  .book-page{
    &:hover{
      cursor: pointer;
    }

  }

  .flip-book {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  display: none;
  background-size: cover;
}

.page {
  padding: 20px;

  background-color: hsl(35, 55, 98);
  color: hsl(35, 35, 35);
  border: solid 1px hsl(35, 20, 70);

  overflow: hidden;

  .page-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    .page-header {
      height: 30px;
      font-size: 100%;
      text-transform: uppercase;
      text-align: center;
    }

    .page-image {
      height: 100%;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .page-text {
      height: 100%;
      flex-grow: 1;
      font-size: 80%;
      text-align: justify;
      margin-top: 10px;
      padding-top: 10px;
      box-sizing: border-box;
      border-top: solid 1px hsl(35, 55, 90);
    }

    .page-footer {
      height: 30px;
      border-top: solid 1px hsl(35, 55, 90);
      font-size: 80%;
      color: hsl(35, 20, 50);
    }
  }

  &.--left { // for left page (property will be added automatically)
    border-right: 0;
    box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
  }

  &.--right { // for right page (property will be added automatically)
    border-left: 0;
    box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);

    .page-footer {
      text-align: right;
    }
  }

  &.hard { // for hard page
    background-color: hsl(35, 50, 90);
    border: solid 1px hsl(35, 20, 50);
  }

  &.page-cover {
    background-color: hsl(35, 45, 80);
    color:  hsl(35, 35, 35);
    border: solid 1px hsl(35, 20, 50);

    h2 {
      text-align: center;
      padding-top: 50%;
      font-size: 210%;
    }

    &.page-cover-top {
      box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), -2px 0 5px 2px rgba(0, 0, 0, 0.4);
    }

    &.page-cover-bottom {
      box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), 10px 0 8px 0px rgba(0, 0, 0, 0.4);
    }
  }
}

`

export const Theme = {
   sectionStart: {
      landing: '0%',
      story: '11%',
      comicverse: '16%',
      mint: '28%',
      roadmap: '36%',
      comic: '57%',
      chardev: '66.5%',
      team1: '74%',
      team2: '80%',
      join: '88.5%'
  },
     sectionStartMobile: {
      landing: '-10%',
      traits: '8.4%',
      story: '20%',
      comicverse: '16%',
      mint: '28%',
      roadmap: '36%',
      comic: '57%',
      chardev: '66.5%',
      team1: '74%',
      team2: '80%',
      join: '88.5%'
  },
  colors: {
    primary: '#3A3A44',
    secondary: '#292A31',
    tertiary: '#484850',
    accent: '#5A5C6B',
    hightlight: '#FBBF24',
    title: '#FDE68A',
    subtitle: '#FEF3C7',
    white: '#F7F7FA',
  },
  textstyle: { 
    heading: '1.1rem',
    subheading: '3rem',
    paragraph: '1rem',
    subtext: '.8rem'

  },
  boxstyle: {
    textBoxMaxWidth: '750px',
    margin: '1.2rem',
    borderRadius: '10px',
    maxWidth: '1200px',
    minWidth: '360px',
    marginX: '1rem',
    wrapperMargin: '1rem',
    widgetMargin: '5px',
    // boxShadow: '5px 5px 0px 0px rgba(0,0,0,0.4)'
    boxShadow: 'none'
  },
  breakpoints: {
    xs: '400px',
    sm: '576px',
    md: '767px',
    lg: '1000px',
    xl: '1400px',

  },
  comicverse: {
    glow: '',
    margin: '1rem',
    maxWidth: '1300px',
  }

}

function getWindowDimensions() {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return {
    windowWidth,
    windowHeight
  };
}

export const useWindowDimensions = ()=> {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

