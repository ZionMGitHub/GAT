import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import styled from 'styled-components'
import {Textbox} from './textbox';
import { data } from './data';
import { Heading,useWindowDimensions } from '../../global_styles';
import { isMobile  } from 'react-device-detect';

let imgPaths = [
   '../Assets/chardev/cronos1.png',
     '../Assets/chardev/cronos2.png',
   '../Assets/chardev/cronos3.png',
]


export const CharDev = (props) => {
    const {isDesktop} = props;
    const {windowWidth, windowHeight } = useWindowDimensions();

    const [paths,setPaths] = useState(imgPaths);
    const [index,setIndex] = useState(0);


    useEffect(()=>{
      const lastIndex = paths.length-1;

      if(index < 0){
        setIndex(lastIndex);
      }
      if(index > lastIndex){
        setIndex(0);
      }

    },[index,paths]);
    
    useEffect(()=>{

      if (false )
      {let slider = setInterval(()=>{
        setIndex(index+1);
        // console.log('hello');
      },4500)
      
      return ()=> clearInterval(slider);}
    },[index]);


  return (
     <CharDevContainer isDesktop={isDesktop}> 
         
         <Wrapper>
            <Heading style={{marginBottom: '.5rem'}}>Character Development</Heading>
            {/* all images displayed over md breakpoint*/}
            {true ?
            
            <ImagesWrapper>
                   {imgPaths.map((path,index)=>{
                       return <ImageDev key={index}
                                         src={path}
                            />
                   })}
            </ImagesWrapper> 
            :
              // {/* switch to slider under md breakpoint */}
                <div className='section-center'>
                  {paths.map((path,pathIndex)=> {

                      let position = 'nextSlideBack'; 
                      if(pathIndex === index){
                        position='activeSlideBack';
                      }
                      if( pathIndex === index - 1 || 
                        (index === 0 && pathIndex === paths.length - 1)){
                        position='lastSlideBack';

                      }
                      return (
                      <article key={pathIndex} className={position}>
                          <img src={path} alt={'character-dev'} className='slider-img'/>
                      </article>
                      );
                  })}

                  <button className="prev" onClick={()=> setIndex(index - 1)}><FiChevronLeft style={{cursor: 'pointer'}}/></button>
                  <button className="next"onClick={()=> setIndex(index + 1)} ><FiChevronRight style={{cursor: 'pointer'}}/></button>

                </div>}
            <div>

              <Textbox style={{marginTop: '.5rem'}} data = {data['chardev']}/>
            </div>
          
        </Wrapper>      
           
    </CharDevContainer>
            
  )
}

const CharDevContainer = styled.div`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? '68%' : '76.5%')};
    width: 100%;
    height: 7%;
    /* background-color: rgba(200,240,100,.5); */
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const Wrapper = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: flex-start; */
    width: 100%;
    height: 100%;
    /* background-color: rgba(200,240,100,.5); */
    position: relative;
    margin: 0 1rem;

   
`

const ImagesWrapper = styled.div`
    /* height:200px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
    /* background-color: rgba(200,0,100,.5); */
   
`


const ImageDev = styled.img`
    width: 31%;
     -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
`