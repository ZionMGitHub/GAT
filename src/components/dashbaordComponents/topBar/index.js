import React from 'react';
import { TopbarContainer, LogoWrapper, ButtonWrapper} from './topbarElements';
import {Button} from '../ButtonElement';
// import logoImg from '../../../public/images/logo-black.png';
// import Image from 'next/image';

export const TopBar = () => {
  return (
    <TopbarContainer>
      <LogoWrapper>
        {/* <Image 
            src={logoImg} 
            alt='innovation labs logo'
           intrinsic = 'true'
        /> */}
      </LogoWrapper>
        <ButtonWrapper>
          <Button 
            id='connect_wallet'
            big='true'
            fontsize='1rem'
          >Connect</Button>
        </ButtonWrapper>

    </TopbarContainer>
  )
}
