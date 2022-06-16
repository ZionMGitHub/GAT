import styled from 'styled-components';

export const DistContainer = styled.div`
  background-color: transparent;
    /* background-color: ${props => props.theme.colors.primary}; */
    background-image:  ${({imgId}) => (`url('/Assets/mintWidgets/dist${imgId}.png')`)};
    background-size: cover;
    
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    box-shadow:  ${props => props.theme.boxstyle.boxShadow};
    width: 48%;
    min-width: 125px;
    margin: 5px auto;

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        width: 85%;
    }
  
  
`

export const DistWrapper = styled.div`
    margin:  ${props => props.theme.boxstyle.wrapperMargin};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;

`

export const DistHeading = styled.h1`
    color:  ${props => props.theme.colors.title};
    text-transform: uppercase;
    font-size:  ${props => props.theme.textstyle.heading};
    letter-spacing: .05rem;
    letter-spacing: 1px;

     @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        font-size:  .8rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        font-size:  ${props => props.theme.textstyle.heading};
    }
`

export const DistCenterWrap = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-top: .75rem;
    margin-bottom: 2rem;

`

export const EthLogoWrapper = styled.div`
    margin-right: .3rem;
`

export const EthAmount = styled.h2`
    color:  ${props => props.theme.colors.white};
    margin-right: .3rem;
    font-size: 2rem;
`

export const DollarAmount = styled.h3`
    color:  ${props => props.theme.colors.subtitle};
    font-size:  ${props => props.theme.textstyle.paragraph};
    font-weight: 600;
`

export const QuestionWrapper = styled.h3`
    color:  ${props => props.theme.colors.subtitle};
    margin:  ${props => props.theme.boxstyle.wrapperMargin};
    font-size: 1rem;
    font-weight: 600;
    position: relative;
    float: right;
      &:hover{
        cursor: pointer;
    }


`
