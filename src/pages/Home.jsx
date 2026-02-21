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
  position: relative;
  overflow-x: hidden;
  background: #070812;

  /* layered premium background */
  background-image:
      radial-gradient(900px 420px at 18% 10%, rgba(124, 92, 255, 0.26), transparent 60%),
      radial-gradient(800px 520px at 82% 22%, rgba(76, 136, 255, 0.16), transparent 58%),
      radial-gradient(700px 420px at 50% 95%, rgba(124, 92, 255, 0.12), transparent 60%),
      linear-gradient(180deg, rgba(7, 8, 18, 0.0), rgba(7, 8, 18, 0.75));

  /* subtle grid */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 70px 70px;
    opacity: 0.08;
    mask-image: radial-gradient(ellipse at 30% 10%, black 20%, transparent 70%);
  }

  /* noise (adds “film” / premium feel) */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
    opacity: 0.05;
    mix-blend-mode: overlay;
  }
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
        <title>Serhii Opanasenko | DevOps Engineer & Full Stack Developer</title>
        <meta name="description" content="Serhii Opanasenko - Software Engineer and Full Stack Developer from Uganda. Expert in React, Node.js, Python, Flutter, and mobile app development." />
        <link rel="canonical" href="https://github.com/23Serhii" />
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
