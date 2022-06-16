import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


import styled from 'styled-components'
import { data } from './data';
import { Heading, useWindowDimensions } from '../../global_styles';

// import Image from 'next/image'
// import halo from '../../public/images/halo.png'



export const Teams = (props) => {
  const {isDesktop} = props;
    const {windowWidth, windowHeight } = useWindowDimensions();
    
    return (<TeamsHolder>
    {/* //  tablet view */}
    <>
    { windowWidth > 614 ? 
        <Team title='the team and creative department' start={1} isDesktop={isDesktop}/>
        : 
         //mobile view
        <TeamMobile start={3} isDesktop={isDesktop}/>}
    </>

   </TeamsHolder>);
}


export const TeamMobile = (props) => {
    const { title, start,isDesktop} = props;
    const {windowWidth, windowHeight } = useWindowDimensions();

    const [pairs,setPairs] = useState(data['pairs']);
    const [index,setIndex] = useState(0);


    useEffect(()=>{
       const lastIndex = pairs.length-1;

      if(index < 0){
        setIndex(lastIndex);
      }
      if(index > lastIndex){
        setIndex(0);
      }

      if (windowWidth < 770)
      {let slider = setInterval(()=>{
        setIndex(index+1);
        // console.log('hello');
      },6000)
      
      return ()=> clearInterval(slider);}
    },[index,pairs]);


  
  return (
     <TeamContainer type={start} isDesktop={isDesktop}>

         <Heading style={{marginBottom: '1rem'}}>the team and <br/>creative department</Heading>
           
        {/* all images displayed over md breakpoint*/}
          <BubbleWrapper>
                 {/* switch to slider under md breakpoint */}
                <div className='section-center'>
                  {pairs.map((pair,pairIndex)=> {
                       let p1= pair[0];
                      let p2 = pair[1];
                      // let p3 = pair[2];


                      let position = 'nextSlide'; 
                      if(pairIndex === index){
                        position='activeSlide';
                      }
                      if( pairIndex === index - 1 || 
                        (index === 0 && pairIndex === pairs.length - 1)){
                        position='lastSlide';

                      }
                      return (
                      <article key={pairIndex} className={position}>
                          <PersonPair key={`${'mobile'}-${index}`}>
                                {/* person 1 */}
                                <PersonBox>   
                                    <a href={p1.link} target={'true'}>
                                    <Bubble backimage={p1.imgPath} >
                                    
                                        {/* {p1.name === 'richard' ? <HaloWrap>
                                        <img width={'100%'} src='./images/halo.png'/>
                                        </HaloWrap> : ''} */}
                                    </Bubble>
                                    </a>
                                    <Description>
                                        <Text strong={true}>{p1.name}</Text>
                                        <Text>{p1.role}</Text>
                                    </Description>
                                </PersonBox>

                                {/* person 2 */}
                                <PersonBox>   
                                    <a href={p2.link} target={'true'}>
                                    <Bubble backimage={p2.imgPath} >
                                        
                                    </Bubble>
                                    </a>
                                    <Description>
                                        <Text strong={true}>{p2.name}</Text>
                                        <Text>{p2.role}</Text>
                                    </Description>
                                </PersonBox>

                                {/* person 3 */}
                                 {/* <PersonBox>   
                                    <a href={p3.link} target={'true'}>
                                    <Bubble backimage={p3.imgPath} >
                      
                                    </Bubble>
                                    </a>
                                    <Description>
                                        <Text strong={true}>{p3.name}</Text>
                                        <Text>{p3.role}</Text>
                                    </Description>
                                </PersonBox> */}
                        </PersonPair>
                         
                      </article>
                      );
                  })}

                  <button className="prev" onClick={()=> setIndex(index - 1)}><FiChevronLeft style={{cursor: 'pointer'}}/></button>
                  <button className="next"onClick={()=> setIndex(index +1)} ><FiChevronRight style={{cursor: 'pointer'}}/></button>

                </div>
            </BubbleWrapper>     
    </TeamContainer>
            
  )
}


export const Team = (props) => {
    const { title, start, isDesktop} = props;
    let list;

    if (start === 1){
      list = data['team']
    }


    // let list = start === 4 ? data['team'].concat( data['deptartment']).slice(0,-1): data[`${title.split(' ').pop()}`];
    
  
  return (
     <TeamContainer type={start} isDesktop={isDesktop}>

         <Heading>{title}</Heading>
           
        {/* all images displayed over md breakpoint*/}
          <BubbleWrapper>
                {list.map((person, index)=>{
                    return (
                        <PersonBox key={`${title.split(' ').pop()}-${index}`}
                                    type={start}>
                            
                             <a href={person.link} target={'true'}>
                            <Bubble backimage={person.imgPath}>
                                {/* <img width={'100%'} src={person.imgPath}/> */}
                                {person.name === 'richard' ? <HaloWrap>
                                <img width={'100%'} src='./images/halo.png'/>
                                </HaloWrap> : ''}
                            </Bubble>
                            </a>
                            <Description>
                                <Text strong={true}>{person.name}</Text>
                                <Text>{person.role}</Text>
                            </Description>
                        </PersonBox>
                        )})}
         </BubbleWrapper>
               
    </TeamContainer>
            
  )
}

const TeamsHolder = styled.section`
`

const TeamContainer = styled.div`
    position: absolute;
    width: 100%;
    /* background-color: rgba(50,40,50,.5); */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    top: 78%;
    height: ${({type}) => (type === 1 ? '8%' : '6%')};

     @media screen and (max-width: 950px){
       /* width: 85px; */
        /* background-color: blue; */
        top: 80%;
    }

       @media screen and (max-width: 770px){
       /* width: 85px; */
        /* background-color: grey; */
        /* max-width: 600px; */
        top: ${({type}) => (type === 1 ? '85%' : '86%')};
    }

       @media screen and (max-width: 596px){
       /* width: 85px; */
        /* background-color: red; */
        top: ${({type}) => (type === 1 ? '85%' :'89%')};
        padding: 0 0%;
    }




`


const BubbleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 1rem;
  flex-wrap: wrap;
  width: 100%;
  /* height: 100%; */
  /* background-color: limegreen; */
  /* min-width: 560px; */
  /* max-width: 750px; */
  margin-top: .5rem;
  min-height: 200px;
  max-width: 700px;


`

const PersonBox = styled.div`
    width: 120px;
    height: 200px;
    /* background-color: red; */
    margin: .8rem .75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
    color: aliceblue;


    @media screen and (min-width: ${props => props.theme.breakpoints.xl}){
       width: 140px;
      /* background-color: purple; */
    }

     @media screen and (min-width: 576px) and (max-width: 770px){
       /* width: 85px; */
        /* background-color: yellow; */
        width: 120px;

      /* &:nth-of-type(1) ~ div{ */
          /* background-color: black; */
          margin: .5rem 4.5%;
        /* } */

        &:nth-of-type(3) ~ div{
          /* background-color: purple; */
          margin: 1rem 2%;

        }
        &:nth-of-type(7) ~ div{
          /* background-color: grey; */
          margin: .5rem 4.5%;

        }
    }

     @media screen and (min-width: 770px){
          width: 95px;
        /* background-color: green; */
        
    }


     @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        width:  120px;
        margin: .5rem .5;
    }

    &:hover{
      cursor: pointer;
    }

    @media screen and (min-width: 950px){
       /* width: 85px; */
        /* background-color: yellow; */
        width: 120px;

      /* &:nth-of-type(1) ~ div{ */
          /* background-color: black; */
          margin: .5rem 4.5%;
        /* } */

        &:nth-of-type(3) ~ div{
          /* background-color: purple; */
            margin: 1rem 2%;
        }
        &:nth-of-type(7) ~ div{
          /* background-color: grey; */
          margin: .5rem 4.5%;

        }
    }


`


const PersonPair = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
     /* background-color: blue; */
`


const Bubble = styled.div`
    width: 95px;
    height: 95px;
    border-radius: 100%;
    background-color: antiquewhite;
    border: 2px;
    border-style: solid;
    border-color: #ffffff;
    outline: none;
    background-image: url('${(props) => props.backimage}');
    background-position: center;
    background-size: cover;
    background-repeat: none;
    transition: filter .4s ease;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);

    &:hover{
         -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
        cursor: pointer;
    }

    @media screen and (max-width: 614px){
       width: 95px;
       height: 95px;
 
    }

     @media screen and (min-width: ${props => props.theme.breakpoints.xl}){
       width: 110px;
       height: 110px;
     
    }



`
const Description = styled.div`
    margin-top: 1rem;
    

`
const Text = styled.p`
    text-align: center;
    text-transform: uppercase;
    font-weight: ${({strong}) => (strong ? 'bold' : 'normal')};
    font-size: ${({strong}) => (strong ? 'normal' : 'small')};
    line-height: 1rem;
    margin-bottom: ${({strong}) => (strong ? '.25rem' : '')};
     /* background-color: antiquewhite; */
`

const HaloWrap = styled.div`
    width: 80px;
    position: relative;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
`

