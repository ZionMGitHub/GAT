import styled from 'styled-components';
 import { FaChevronDown} from 'react-icons/fa';

export const CollectionContainer = styled.div`
    /* background-color: ${props => props.theme.colors.primary}; */
      background-image:  ${({imgId}) => (`url('/Assets/mintWidgets/collect${imgId}.png')`)};
     background-size: cover;
     background-color: transparent;
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    box-shadow:  ${props => props.theme.boxstyle.boxShadow};
    width: 98%;
    min-width: 200px;
    margin: 10px auto;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        width: 48%;
    }

     @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
        width: 98%;
    }
  
`

export const CollectionWrapper= styled.div`
    margin:  ${props => props.theme.boxstyle.wrapperMargin};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    /* padding-bottom: 20px; */
`   

export const CollectionHeading = styled.h1`
    color:  ${props => props.theme.colors.title};
    text-transform: uppercase;
    font-size:  ${props => props.theme.textstyle.heading};
    letter-spacing: .05rem;
    margin-bottom: 1.2rem;
    font-weight:bolder ;
    letter-spacing: 1px;

     @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        font-size:  .8rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        font-size:  ${props => props.theme.textstyle.heading};
    }

`

export const CollectionSection = styled.div`
    display: flex;
    flex-direction: column;

`

export const DisplayBoxWrapper = styled.div`
    display: flex;
    width: 100%;
    align-self: center;

`

export const DisplayBox = styled.div`
    border: 2px solid ${props => props.theme.colors.secondary};
    border-radius: 3px;
    display: flex;
    align-items: baseline;
    padding: 0.3rem 0.5rem;
    flex: 3;
    margin-right: 1rem;

`

export const BtnWrapper = styled.div`

`

export const CollectionButton = styled.button`
    border-radius: 3px;
    height: 100%;
    padding: 5px 15px;
    background: ${props => props.theme.colors.hightlight};
    white-space: nowrap;
    /* padding:  */
    color: ${props => props.theme.colors.white};
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: bolder;
    font-size: .9rem;

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(85%);
    }
`

export const SubtextWrapper = styled.div`
position: relative;
    display: flex;
    align-self: flex-end;
    margin: .2rem 0;
      /* background-color: red; */

    &:hover{
        cursor: pointer;
    }

`

export const Subtext = styled.p`
    font-size:  ${props => props.theme.textstyle.subtext};
    color:  ${props => props.theme.colors.subtitle};
    font-weight: 300;
      

    @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
       font-weight: 400;
    }

      &:hover{
        cursor: pointer;
    }


`
export const QuestionWrapper = styled.div`
    color:  ${props => props.theme.colors.subtitle};
    margin-left: 3px;

      &:hover{
        cursor: pointer;
    }


`
export const DonationSection = styled.div`
    display: flex;
    margin: 1rem 0;

`
export const DonationHeading = styled.h2`
    color:  ${props => props.theme.colors.subtitle};
    font-size:  ${props => props.theme.textstyle.subtext};
    letter-spacing: .05rem;
    font-weight: 600 ;
    margin-right: 5px;

`
export const DonationPercentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid ${props => props.theme.colors.secondary};
    min-width: 110px;
`

export const Disabled = styled.div`
    position: absolute;
    z-index: 5;
    color: rgba(140, 140, 140, 0.35);
    width: 100%;
    height: 100%;
`

export const PercentAmount = styled.h6`
    color:  ${props => props.theme.colors.subtitle};
    font-weight: 600;
    margin: 0 0 0 .5rem;
    padding: 4px 0;

`

export const DropdownArrow = styled(FaChevronDown)`
    color:  ${props => props.theme.colors.subtitle};
    margin: 0 .5rem;
    height: .8rem;
`

export const CheckboxWrapper = styled.div`
    display: flex;


`
export const Checkbox = styled.input`
    height: 1.2rem;
    width: 1.2rem;
    margin: auto 5px;
    

    &:focus{    
        background-color: ${props => props.theme.colors.hightlight};
    }


`
export const DonationInfoWrapper = styled.div`

`
export const DonationText = styled.p`
    font-size:  ${props => props.theme.textstyle.subtext};
    color:  ${props => props.theme.colors.subtitle};
    font-weight: 300;
    margin: .75rem 0 ;


     @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
      
        font-weight: 400;
    }


`


export const EthLogoWrapper = styled.div`
    margin-right: .3rem;
`

export const EthAmount = styled.h4`
    color:  ${props => props.theme.colors.white};
    margin-right: .3rem;
`

export const DollarAmount = styled.h6`
    color:  ${props => props.theme.colors.subtitle};
    font-weight: 600;
    align-self: flex-end;
`

