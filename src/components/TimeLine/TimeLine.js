import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();
  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi There! I am currently working as a <span style={{color:"#F9004D"}}>Software Development Engineer at Amazon</span>. I've completed my <span style={{color:"#F9004D"}}>B.E. in Information Science and Engineering</span> from the National Institute of Engineering, Mysore.
        Being a Mulesoft certified developer, I have previously worked on designing, developing and deploying <span style={{color:"#F9004D"}}>REST APIs</span> using Mulesoft as the underlying technology.

        Apart from my regular job, I work on different backend frameworks like Spring Boot, Django, Flask and frontend libraries like React JS, Bootstrap and JQuery along with Android programming, trying to solve real world problems with projects one step at a time.

My interests and core strength include problem solving using <span style={{color:"#F9004D"}}>Data Structures and Algorithms</span> in Java/C++.  
       </SectionText>
       <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
        {TimeLineData.map((item,index)=>(
          <CarouselMobileScrollNode key={index} final={index = TOTAL_CAROUSEL_COUNT - 1}>
          <CarouselItem
            index={index}
            id={`carousel__item-${index}`}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
          >
              
              <CarouselItemTitle>
                {item.year}
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
          </CarouselMobileScrollNode>
          ))}

        </>
       </CarouselContainer>
       <CarouselButtons>
          {TimeLineData.map((item,index)=> (
            <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e)=> handleClick(e,index)}
            type="button"
            >
              <CarouselButtonDot active={activeItem}/>
            </CarouselButton>
          )
          )}
       </CarouselButtons>
      
    </Section>
  );
};

export default Timeline;
