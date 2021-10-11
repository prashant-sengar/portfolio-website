import React from 'react';
import {heroText} from '../../constants/constants';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {heroText.sectionTitle}<br/>
        
      </SectionTitle>
      <SectionText>
      {heroText.sectionText}
      </SectionText>
      <Button onClick={(e) => {
      e.preventDefault();
      window.location.href= heroText.buttonLink
      }}>{heroText.buttonTitle}</Button>
    </LeftSection>

  </Section>
);

export default Hero;