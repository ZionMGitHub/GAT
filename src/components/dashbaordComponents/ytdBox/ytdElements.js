import styled from 'styled-components';


export const YtdContainer = styled.div`
    /* background-color: ${props => props.theme.colors.primary}; */
    background-color: none;
    background-image:  ${({imgId}) => (`url('/Assets/mintWidgets/ytd${imgId}.png')`)};
    /* ${({big}) => (big ? '14px 32px' : '10px 20px')}; */
    background-size: cover;
     
    border-radius: ${props => props.theme.boxstyle.borderRadius};
    box-shadow:  ${props => props.theme.boxstyle.boxShadow};
    min-width: 150px;
    width: 100%;
    height:6.5rem;
    margin: 2.5px auto;

     @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
        width: 48%;
    }
  

`

export const YtdWrapper = styled.div`
    margin:  ${props => props.theme.boxstyle.wrapperMargin};

     @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
        padding-bottom: 50px;
    }
`

export const YtdHeading = styled.h1`
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

export const YtdSubheadingWrap = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: .75rem;
    margin-bottom: 2rem;

`

export const EthLogoWrapper = styled.div`
    margin-right: .3rem;
`

export const EthAmount = styled.h2`
    color:  ${props => props.theme.colors.white};
    margin-right: .3rem;;
`

export const DollarAmount = styled.h3`
    color:  ${props => props.theme.colors.subtitle};
     font-size:  ${props => props.theme.textstyle.paragraph};
    font-weight: 600;
`
