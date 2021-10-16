import React from 'react';
import {AiFillMediumCircle,AiFillApi,AiFillYoutube, AiOutlineComment} from 'react-icons/ai'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


const Upcoming = () => (
  
  <Section>
  <SectionDivider/>  
  <SectionTitle>What's Next ?</SectionTitle>
  <Boxes>
      <Box>
        <AiFillMediumCircle size="3rem"/>
        <BoxText>Featuring interesting Medium Articles!</BoxText>
      </Box>
      <Box>
        <AiFillApi size="3rem"/>
        <BoxText>Add a form to create new portfolio pages dynamically!</BoxText>
      </Box>
      <Box>
        <AiOutlineComment size="3rem"/>
        <BoxText>Add a feedback form to get interesting ideas!</BoxText>
      </Box>
  </Boxes>
  
</Section>
);

export default Upcoming;
