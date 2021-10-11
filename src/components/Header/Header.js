import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

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
      <SocialIcons href="https://github.com/prashant-sengar">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/code2sengar/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/code2sengar">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
