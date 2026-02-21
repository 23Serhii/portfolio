import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";

const PageContainer = styled(motion.div)`
  width: 100%;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const Home = () => {
  return (
    <PageContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>Kasasa Livingstone Trevor | Software Engineer & Full Stack Developer</title>
        <meta name="description" content="Kasasa Livingstone Trevor - Software Engineer and Full Stack Developer from Uganda. Expert in React, Node.js, Python, Flutter, and mobile app development." />
        <link rel="canonical" href="https://kasasalivingstonetrevor.me" />
      </Helmet>
      <Hero />
      <Wrapper>
        <Skills />
        <Experience />
      </Wrapper>
      <Projects />
      <Wrapper>
        <Education />
        <Contact />
      </Wrapper>
    </PageContainer>
  );
};

export default Home;
