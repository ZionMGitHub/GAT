import React, {useState} from 'react';
import styled from 'styled-components';
import { NftCard } from './nftCard';


export const Selected = ({ state,dispatch }) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const cycleIndex = (type) => {

        if (state.selectedNFTs.length > 3){
            const lastIndex = state.selectedNFTs.length-1;
            
            let newIndex;
            if (type === 'inc' ){
                newIndex = currentIndex + 1
            }else{
                newIndex = currentIndex - 1
            }

            if(newIndex < 0){
                setCurrentIndex(lastIndex);
            }
            else if(newIndex > lastIndex){
                setCurrentIndex(0);
            }else{
                setCurrentIndex(newIndex);
            }
        }
    }

    let displayedNFTs = getDisplayed(state.selectedNFTs, currentIndex, 3);
  return (
       <Container>
         <BG src={'./Assets/comicWidgets/selected_base.png'}/>

        <TitleWrap>
           <Title>selected nfts</Title>
         </TitleWrap>

        <InviteBtnWrap>
             <BtnImg src={'./Assets/comicWidgets/button.png'}/>
             <WalletTxt style={{fontSize: '50%'}} onClick={()=>{dispatch({type: 'CANCEL_MODAL'})}}>clear all</WalletTxt>
         </InviteBtnWrap>




         <MidSection>
           <MidWrap>
              <ChevronWrap onClick={()=>{cycleIndex('dec')}}><img src={'/icons/arrow.png'} height={'100%'}/></ChevronWrap>

              <SelectedWrap>
                  {displayedNFTs.map((cardInfo, index)=>{

                    return <SmallCardWrap 
                        key = {index}
                        showHover={cardInfo.name}
                        onClick={()=>{
                         dispatch({type: 'REMOVE_SELECTED', selected: cardInfo})
                    }}>
                            
                            <NftCard info={cardInfo}/>
                            {cardInfo.name && <RemoveBtnWrap>
                                 <RemoveBtn 
                                 src={'./icons/close.png'}
                                 onClick={()=>{
                                    // dispatch({type: 'REMOVE_SELECTED', selected: cardInfo})
                                 }}/>
                            </RemoveBtnWrap>}
                        </SmallCardWrap>;
                    })} 

              </SelectedWrap>

              <ChevronWrap onClick={()=>{cycleIndex('inc')}}><img src={'/icons/arrow.png'} height={'100%'} style={{transform:'rotate(180deg)'}}/></ChevronWrap>


           </MidWrap>
         </MidSection>

           {/* <ApplyBtnWrap onClick={()=>{
               if (selectedNFTs.length > 0)
                   console.log(getImgPath(displayedNFTs));
           }}>
             <ApplyBtn>Apply to comic</ApplyBtn>
         </ApplyBtnWrap> */}

   </Container> 
           
  )
}

const Container = styled.section`
    width: 100%;
    position: relative;
    margin-bottom: .5rem;

    /* background-color: aliceblue; */
`

const BG = styled.img`
    width: 100%;
`
const TitleWrap = styled.div`
position: absolute;
top: 0;
left: 0;
width: 50%;

margin: ${props => props.theme.comicverse.margin};
`

const Title = styled.h4`
    color: ${props => props.theme.colors.white};
    text-transform:uppercase;
    font-weight: 500;

       @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        font-size: .8rem;
     
  
    }
`

const MidSection = styled.div`
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aliceblue; */
 
`

const MidWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    margin:  0 .4rem;
   
`

const ChevronWrap = styled.button`
    margin: 0 .2rem;
    background-color: transparent;
    border: none;
    height: 25px;

    &:hover{
         cursor: pointer;
         filter: drop-shadow(0 0 6px rgb(255, 255, 255, .9));
    }
   
`

const SelectedWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: purple; */
    /* margin: ${props => props.theme.comicverse.margin}; */
   
`

const SmallCardWrap = styled.div`
    width: 30%;
    margin: .2rem; 
    height: 48%;

    ${({showHover})=>(showHover ? `
       &:hover{
        cursor: pointer;
    }
    
    `: ``)}
 
    /* background-color: blue; */
`
const RemoveBtnWrap = styled.div`
    position: relative;
    top:-75%;
    float: right;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    z-index: 50;

    @media screen and (max-width: 1200px){
        height: 20px;
        width: 20px;
    }



`

const RemoveBtn = styled.img`
    width: 90%;
    height: 90%;
    border-radius: 100%;

    &:hover{
        cursor: pointer;
    }

`

const ApplyBtnWrap = styled.div`
    position: absolute;
    /* background-color: red; */
    bottom: 5%;
    right: 1%;
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }

`



const InviteBtnWrap = styled.div`
    position: absolute;
    top: 1.5%;
    right: 0%;
    margin: .75rem 0;
    width: 26.2%;
    height: 12.5%;
    /* background-color: red; */

`



    const BtnImg = styled.img`
    height: 100%;
    width: 100%;
    

    `


const WalletTxt = styled.div`
    position: absolute;
    padding: .1rem;
    top: 0%;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 70%;
    text-transform: uppercase;
    background-color: transparent;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    z-index: 50;
     /* background-color: red; */
    
    /* transition: translateX(50%); */

    &:hover{
        transition: all ease .2s;
        cursor: pointer;
         -webkit-box-shadow:0px 0px 5px 0px rgba(255,255,255,0.5);
        -moz-box-shadow: 0px 0px 5px 0px rgba(255,255,255,0.5);
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,0.5);
        background-color: rgba(255,255,255,.25);

    }
`





const getDisplayed = (inventory, currentIndex, displayLength) => {
        const lastIndex = inventory.length-1;
        let displayedNFTs = []
        if (inventory.length !== 0) {displayedNFTs.push(inventory[currentIndex])}
        else {  displayedNFTs.push({});}
        // sets mini displayed nfts 
        for (let i=1; i<displayLength ; i++ ) {
        
            // logic for next index over last index
            if(currentIndex + i > lastIndex){
            
                let nextNft = inventory[Math.abs(inventory.length-(currentIndex + i))];

                // adds empty block
                if (displayedNFTs.includes(nextNft) || 
                   
                    Math.abs(inventory.length-(currentIndex + i)) > lastIndex){
                    displayedNFTs.push({});
                
                // adds next wrapped nft
                } else { displayedNFTs.push(nextNft); }       
            }
            // add next 
            else{ displayedNFTs.push(inventory[currentIndex+i]) }
        }
        return displayedNFTs;
    }


    