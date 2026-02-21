import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/constants";
import ProjectCard from "../components/cards/ProjectCard";
import { ArrowBack } from "@mui/icons-material";

const Container = styled(motion.div)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  padding: 100px 20px 60px;

  @media (max-width: 768px) {
    padding: 80px 16px 40px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-bottom: 30px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  overflow: hidden;
  background: ${({ theme }) => theme.card};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + "20"};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
  }

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary};
    color: white;

    &:hover {
      background: ${theme.primary};
    }
  `}
`;

const Divider = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.primary + "40"};
`;

const ProjectCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
`;

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const AllProjects = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState("all");

  const filteredProjects = toggle === "all"
    ? projects
    : projects.filter((item) => item.category === toggle);

  return (
    <Container
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>Projects | Serhii Opanasenko - Developer</title>
        <meta name="description" content="Browse software projects by Serhii Opanasenko - Full stack web applications, mobile apps, and platforms built with React, Node.js, Python, Flutter." />
        <link rel="canonical" href="https://github.com/23Serhii"/>
      </Helmet>
      <Content>
        <BackButton onClick={() => navigate("/")}>
          <ArrowBack /> Back to Home
        </BackButton>

        <Header>
          <Title>All Projects</Title>
          <Desc>
            A collection of all my projects, from full-stack web applications
            to mobile apps and SaaS platforms.
          </Desc>
        </Header>

        <FilterSection>
          <ToggleButtonGroup>
            <ToggleButton
              active={toggle === "all"}
              onClick={() => setToggle("all")}
            >
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "web app"}
              onClick={() => setToggle("web app")}
            >
              WEB APPS
            </ToggleButton>
          </ToggleButtonGroup>
        </FilterSection>

        <ProjectCount>
          Showing <span>{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
        </ProjectCount>

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </Content>
    </Container>
  );
};

export default AllProjects;
