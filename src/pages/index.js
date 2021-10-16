import Upcoming from '../components/Upcoming/Upcoming';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Timeline />
      <Upcoming/>
    </Layout>
  );
};

export default Home;
