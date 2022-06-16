import React from 'react';
import styled from 'styled-components';



export const Traits = ({info}) => {
 
  return (
      <Container>
         <BG src={'./Assets/comicWidgets/traits_base.png'}/>
          <TitleWrap>
           <Title>{info.name} #{info.number}</Title>
         </TitleWrap>

         <MainSection>
            <MainWrapper>
                <TraitContainer>
                    <div style={{direction: 'ltr'}}>

                        {info.traitsList.map((trait,index)=>{
                            return <TraitsText key={index}> 
                                    <Rarity>{trait.rarity}%</Rarity>
                                    <Attribute>{trait.attribute}: {trait.value}</Attribute>
                                </TraitsText>
                        })}  
                    </div>

                </TraitContainer>

                 <BarsWrapper>
                     <Bar><Value percent={info.xpBars[0]}/></Bar>
                       <Bar><Value percent={info.xpBars[1]}/></Bar>
                      <Bar><Value percent={info.xpBars[2]}/></Bar>
                       <Bar><Value percent={info.xpBars[3]}/></Bar>
                    {/* <Bars src={'./Assets/comicWidgets/traitBars.png'}/> */}
                </BarsWrapper>

            </MainWrapper>
         </MainSection>

   </Container> 
           
  )
}

const Container = styled.section`
    width: 100%;
    position: relative;
    /* background-color: aliceblue; */
`

const BG = styled.img`
    width: 100%;
    height: 350px;
    
`

const TitleWrap = styled.div`
position: absolute;
top: 0;
left: 0;
width: 55%;
/* background-color: green; */
margin: ${props => props.theme.comicverse.margin};
`

const Title = styled.h2`
    color: ${props => props.theme.colors.white};
    text-transform:uppercase;
    font-weight: 500;
    text-align: center;
    font-size: 110%;

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
       font-size: 120%;
        /* background-color: red; */
  
    }
`

const MainSection = styled.div`
    position: absolute;
    top: 12%;
    left: 0;
    width: 100%;
    height: 87%;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;

`

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* margin: ${props => props.theme.comicverse.margin}; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: yellow; */

`

const TraitContainer = styled.div`
    flex: 2.4;
    width: 100%;
    height: 100%;
    /* background-color: purple; */
    overflow-y: auto;
    direction: rtl;
    padding: 0 .4rem;


     &::-webkit-scrollbar {
        width: .6rem;
        z-index: 30;
       
    }
    /* Track */
    &::-webkit-scrollbar-track {
        background: #4a4a6b75;
        /* border-radius: 5px; */
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #D3d3dc;
        /* border-radius: 5px; */
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar:hover {
        /* background: #555; */
          cursor: pointer;
      
    }


`

const TraitsText = styled.div`
    display: flex;
    margin: .3rem auto;
    color: white;
    opacity: 1;

    animation: fade-in 1s 1;

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      } 
    }
`

    
const Rarity = styled.p`
    width: 20%;
   font-size: 77%;
    text-transform: uppercase;
    

    @media screen and (max-width: 1100px){
        font-size: 70%;
    }

`

const Attribute = styled.p`
 /* background-color: blue; */
    width: 80%;
    font-size: 77%;
    word-spacing: .1rem;
    margin-left: .5rem;
    font-weight: lighter;
     text-transform: uppercase;
     @media screen and (max-width:1100px){
        font-size: 70%;
        /* background-color: blue; */

    }
  

`


const BarsWrapper = styled.div`
    flex: 1;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;

    height: 100%;
    width: 30%;

`

const Bar = styled.div`
        transform: rotate(180deg);
        outline: 1px white solid;
       
        width: 18%;
        height: 100%;
        background-color: transparent;
        display: flex;
        justify-content: flex-start;
        align-self: flex-start;
         background-color: transparent;
       
`
const Value = styled.div`
        transition: height ease .5s;
        background-color:white;
        width: 100%;
        height: ${({percent})=>(percent)};       
`

const Bars = styled.img`
    height: 100%;
`


