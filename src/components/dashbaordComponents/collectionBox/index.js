import React, {useState} from 'react';
import { 
  CollectionContainer,
  CollectionWrapper,
  CollectionHeading,
  CollectionSection,
  SubtextWrapper,
  Subtext,
  DisplayBoxWrapper,
  DisplayBox,
  BtnWrapper,
  QuestionWrapper,
  EthLogoWrapper,
  EthAmount,
  DollarAmount,
  DonationSection,
  DonationHeading,
  DonationPercentWrapper,
  PercentAmount,
  Disabled,
  CheckboxWrapper,
  Checkbox,
  DropdownArrow,
  DonationText,
  CollectionButton
 } from './collectionElements';

//  import EthImgLogo from '../../../public/eth.svg'
// import Image from 'next/image';
 import { FaRegQuestionCircle} from 'react-icons/fa';
import { HelpBox } from '../HelpBox';
import { Transform } from '@mui/icons-material';


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const CollectionBox = (data) => {
  const {title, eth, donationActive, donationPercent, convertUSD, helpText, order} = data;

  const dollarAmt = numberWithCommas(Math.round(eth * convertUSD * 100) /100) ; 

  const donationAmt = donationPercent * dollarAmt;

  const [style, setStyle] = useState({opacity: '0',transition: 'all .1s ease-in-out',zIndex:-20});
  
                         
  return (
    <CollectionContainer imgId={order}>
        <CollectionWrapper>
         <div style={style}>
                <HelpBox text= {helpText} extraTop={true}/>
              </div>
          {/* header text */}
          <CollectionHeading>{title}</CollectionHeading>

          

            {/* middle section */}
            <CollectionSection>

              {/* help section */}
              <SubtextWrapper 
                onMouseEnter={e => {
                     setStyle({opacity: '1', transition: 'all .1s ease-in-out'});
                 }}
                
                 onMouseLeave={e => {
                     setStyle({opacity: '0',transition: 'all .1s ease-in-out'})
                 }}
              > 
               
                  <Subtext>What's this</Subtext>

                  <QuestionWrapper>
                    <FaRegQuestionCircle/>
                  </QuestionWrapper>
                  
              </SubtextWrapper>

           

                  {/* eth amount display */}
                  <DisplayBoxWrapper>
                    <DisplayBox>
                      <EthLogoWrapper>
                        <img  src={'./eth.svg'}/>
                      </EthLogoWrapper>

                      <EthAmount style={{alignSelf: 'center'}}>{eth}</EthAmount>
                      <DollarAmount >(${dollarAmt})</DollarAmount>
                    </DisplayBox>

                    <BtnWrapper>
                      
                      <CollectionButton id={`${title.split(' ')[0]}_collectBtn`}> Collect</CollectionButton>
                    </BtnWrapper>
                  </DisplayBoxWrapper>

                  {/* give donation section */}
                {/* <DonationSection>
                  <DonationHeading>Donation<br/>Amount</DonationHeading>
                   */}
                 {/* donation percent box */}
                  {/* <DonationPercentWrapper>
                      
                      <PercentAmount>{donationPercent * 100}% (${donationAmt})</PercentAmount>
                      <DropdownArrow/>
                  </DonationPercentWrapper> */}

                  {/* checkbox */}
                  {/* <CheckboxWrapper>
                      <Checkbox type="checkbox" id="donate-royalty"/>
                  </CheckboxWrapper>
      
              </DonationSection> */}

            </CollectionSection>

          {/* donation info lower section */}
            {/* <DonationText>
               Donations to TBD can be toggled at any time; however, your donation percentage can only be changed on the first day of every month. 
            </DonationText> */}
          

        </CollectionWrapper>
    </CollectionContainer>
  )
}


