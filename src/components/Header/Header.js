import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import {contacts} from '../../constants/constants'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style = {{display:"flex",alignItems:"center",color:"white", marginBottom:"20px"}}>
          <DiCode size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#contact">
        <NavLink>Contact</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href={contacts.github}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={contacts.linkedin}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href={contacts.twitter}>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
