import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {contacts} from '../../constants/constants'
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  var emailTo = "mailto:" + contacts.email;
  return (
    
    <FooterWrapper id="contact">
      <LinkList>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href={emailTo}>{contacts.email}</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIcons href={contacts.github}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={contacts.linkedin}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
