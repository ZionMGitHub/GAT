import styled from 'styled-components';


export const DashContainer = styled.div`
  /* background-color: yellow; */
  width: 80vw;
  /* width: 100%; */
  min-width: ${props => props.theme.boxstyle.minWidth};
  max-width: ${props => props.theme.boxstyle.maxWidth};
  margin: 0 auto;
     user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  transform-style: preserve-3d;
 

`

export const DashWrapper = styled.div`
  margin: 0 ${props => props.theme.boxstyle.marginX};
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        margin: 0 .5rem;
    }
  

`
export const DashRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;


  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }

`

export const DashDataColumn = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: aquamarine; */
  flex: 4;
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    order: 2;
    flex: 2;
}

  
`

export const DashCollectColumn = styled.section`
  height: 100%;
  width: 100%;
  flex: 2;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 5px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    order: 2;
    flex-direction: row;

  }

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    flex-direction: column;

  }
  
  
`

export const YTDrow = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* flex-wrap: wrap; */

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
   justify-content: space-around;

}

 @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
  /* flex-direction: column;
  align-items: center; */
  justify-content: space-between;
}


`

export const DistributeRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  /* @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
       flex-direction: column;
       align-items: center;
    } */

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
   justify-content: space-around;

}

`

export const BtnWrapper = styled.div `
  margin-top: 10px;
  margin-bottom: 5px;
  width: 98%;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
          display: none;
        
      }

`

export const Button = styled.button`
background-color: transparent;

    box-shadow:  ${props => props.theme.boxstyle.boxShadow};
    width: 100%;
    border-radius: 5px;
    /* background: ${props => props.theme.colors.hightlight}; */
    background-image: url('/Assets/mintWidgets/walletBtn.png');
    background-size: cover;
    white-space: nowrap;
    padding: 20px 32px;
    /* color: ${props => props.theme.colors.white};  */
    color:  ${props => props.theme.colors.title};
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    font-weight: bolder;
     font-size:  ${props => props.theme.textstyle.paragraph};

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(85%);
    }


`

