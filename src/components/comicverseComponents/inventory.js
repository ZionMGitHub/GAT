import React, {useState} from 'react';
import styled from 'styled-components';
import { NftCard } from './nftCard';

export const Inventory = ({
    dispatch,state,
    inventory}) => {

     let displayedNFTs = getDisplayed(inventory, state.currentIndex, 4);

  return (
   
     <Container>
         <ConnectBtnWrap>
             <BtnImg src={'./Assets/comicWidgets/button.png'}/>
             <WalletTxt>Wallet Connected</WalletTxt>
         </ConnectBtnWrap>

         <InviteBtnWrap>
             <BtnImg src={'./Assets/comicWidgets/button.png'}/>
             <WalletTxt style={{fontSize: '60%'}}>Invite +</WalletTxt>
         </InviteBtnWrap>

         <BG src={'./Assets/comicWidgets/inventory_base.png'}/>
         <TitleWrap>
           <Title>Inventory</Title>
         </TitleWrap>

         <MidSection>
            <MidSectionWrap>
                <ToggleWrap>

                    <ChevronWrap onClick={()=>{
                        dispatch({type: 'CHANGE_INDEX', newIndex: state.currentIndex -= 1})
                        }}><img src={'/icons/arrow.png'} height={'100%'}/></ChevronWrap>

                    <CardHolder  onClick={()=>{
                                    console.log('toggle')
                                        // adds to selected
                                if( !state.selectedNFTs.includes(inventory[state.currentIndex])){
                                    dispatch({type: 'ADD_SELECTED', selected: inventory[state.currentIndex]});

                                // removes from selected
                                }else{ 
                                    dispatch({type: 'REMOVE_SELECTED', selected: inventory[state.currentIndex]});
                                }
                            }}>
                        {/* check box logic */}
                        <SelectBox type={'checkbox'} 
                                    checked={ state.selectedNFTs.includes(inventory[state.currentIndex])}
                                    onChange={(event) => { }}/>

                        <NftCard info={inventory[state.currentIndex]} isSelected={state.selectedNFTs.includes(inventory[state.currentIndex])} size='big'/>

                    </CardHolder>

                     <ChevronWrap onClick={()=>{
                     
                        dispatch({type: 'CHANGE_INDEX', newIndex: state.currentIndex += 1})
                         }}><img src={'/icons/arrow.png'} height={'100%'} style={{transform:'rotate(180deg)'}}/></ChevronWrap>

                </ToggleWrap>

                 <GroupWrap>
                    {displayedNFTs.map((cardInfo, index)=>{

                    return <SmallCardWrap 
                        key = {index}
                        showHover={cardInfo.name}
                        onClick={()=>{    
                            let nftIndex = inventory.indexOf(cardInfo);
                            if (nftIndex !== -1)  dispatch({type: 'CHANGE_INDEX', newIndex: nftIndex})
                            }}
                            >
                            <NftCard info={cardInfo}/>
                        </SmallCardWrap>;
                    })}  
                </GroupWrap>
               

            </MidSectionWrap>
         </MidSection>

         <InviteBtnWrap>

         </InviteBtnWrap>

   </Container> 
           
  )
}

const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0%;
     /* margin-bottom: 1rem; */
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
/* background-color: green; */
margin: ${props => props.theme.comicverse.margin};
`

const Title = styled.h4`
    color: ${props => props.theme.colors.white};
    text-transform:uppercase;
    font-weight: 500;
@media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: .8rem;
    /* background-color: red; */
  
    }
`

const MidSection = styled.div`
    position: absolute;
    top: 9%;
    left: 0;
    width: 100%;
    height: 75%;
    /* background-color: teal; */
    display: flex;
    justify-content: center;
    align-items: center;

`
const MidSectionWrap = styled.div`
    margin: ${props => props.theme.comicverse.margin};
    width: 100%;
    height: 90%;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ToggleWrap = styled.div`
    /* background-color: red; */
    width: 52%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
const CardHolder = styled.div`
    width: 75%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    position: relative;
    /* padding-bottom: 3.8%; */
 
    &:hover{
        cursor: pointer;
    }
    /* background-color: black; */
`
const SelectBox = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 10;
    /* transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1); */

    display: inline-block;
    width: 20%;
    height: 20%;
    max-width: 25px;
    max-height: 25px;
    padding: 2px;

    /* background-color only for content */
    background-clip: content-box;
    border: 2px solid #4a4a6b;
    border-radius: 4px;
    background-color: #4a4a6b;

    &:checked{
        -webkit-appearance: auto;
        -moz-appearance: auto;
        appearance: auto;
        background-color: #FAFAFC;
        border: 2px solid #FAFAFC;
        padding: 0px;
    }

    &:focus{
        outline: none !important;
    }


     &:hover{
    cursor: pointer;
  }
`

const GroupWrap = styled.div`
    /* background-color: blue; */
    width: 48%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* align-items: space-between; */

`

const SmallCardWrap = styled.div`
    width: 40%;
    height: 50%;

     ${({showHover})=>(showHover ? `
       &:hover{
        cursor: pointer;
    }
    
    `: ``)}
`

const ChevronWrap = styled.button`
    margin: 0 .2rem;
    background-color: transparent;
    border: none;
    height: 30px;
     &:hover{
         cursor: pointer;
         filter: drop-shadow(0 0 6px rgb(255, 255, 255, .9));
    }
`


const InviteBtnWrap = styled.div`
    position: absolute;
    bottom: -2.5%;
    right: .5%;
    margin: .75rem 0;
    width: 26.2%;
    height: 12.5%;
    /* background-color: red; */

`



const ConnectBtnWrap = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    height: 15%;
    margin: .75rem 0;
    width: 47%;
    min-height: 40px;
    /* background-color: azure; */

`

    const BtnImg = styled.img`
    height: 100%;
    width: 100%;
    

    `


const WalletTxt = styled.div`
    position: absolute;
    padding: .3rem;
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
        // sets mini displayed nfts 
        for (let i=1; i<displayLength+1 ; i++ ) {
        
            // logic for next index over last index
            if(currentIndex + i > lastIndex){
            
                let nextNft = inventory[Math.abs(inventory.length-(currentIndex + i))];

                // adds empty block
                if (displayedNFTs.includes(nextNft) || 
                    nextNft === inventory[currentIndex] || 
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


    