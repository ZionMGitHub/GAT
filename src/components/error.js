import React from 'react'

export const Error = () => {
  return (
    <div style={{background: '#6B5F6F', width: '100%', height: '100%'}}>
      <Wrapper>
         <BG src={'images/Loading_Screen_BG.jpg'}/>
        <Logo src={'images/logo.png'}/>
         <LoadingBox>
        <LoadingBar/>
        </LoadingBox>
      </Wrapper>

      </div>
  )
}



const BG = styled.img`
  position: absolute;
  margin: 0 auto;
  height:100Vh;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
      left: 0;
      transform: translateX(0);
      width:100vw;
     
    }
`

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
flex-direction: column;
top: 0;
left: 0;
z-index: 50;
background-color: transparent;
`

const Logo = styled.img`
    width: 50%;
    min-width: 300px;
    max-width: 350px;
    z-index: 20;
`

const LoadingBox = styled.div`
    width: 50%;
    min-width: 200px;
    max-width: 300px;
    height: 20px;
    border: .2rem solid white;
    opacity: .8;

   
`
const LoadingBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF75;
  /* transition: width 1.5s ease; */
  animation: load 1s 1;

  @keyframes load {
  0% {
    width: 0%;
  }
  30% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
`

