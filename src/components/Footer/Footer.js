import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    
    <FooterWrapper id="contact">
      <LinkList>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:code2sengar@gmail.com">code2sengar@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIcons href="www.github.com/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="www.linkedin.com/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
