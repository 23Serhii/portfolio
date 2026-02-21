import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/constants";
import { ArrowBack, GitHub, Launch, Code, Storage, Cloud, CheckCircle, Warning } from "@mui/icons-material";

const Container = styled(motion.div)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  padding: 80px 20px 60px;

  @media (max-width: 768px) {
    padding: 60px 16px 40px;
  }
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
    transform: translateX(-5px);
  }
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  font-weight: 500;
`;

const DateText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const TagsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.primary + "40"};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ primary, theme }) => primary ? `
    background: ${theme.primary};
    color: ${theme.white};
    border: none;

    &:hover {
      opacity: 0.9;
    }
  ` : `
    background: transparent;
    color: ${theme.text_primary};
    border: 1px solid ${theme.text_secondary};

    &:hover {
      border-color: ${theme.primary};
      color: ${theme.primary};
    }
  `}
`;

const Section = styled(motion.section)`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  white-space: pre-wrap;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.card_light};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: ${({ theme }) => theme.primary + "40"};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const TechCategory = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.card_light};
`;

const TechCategoryTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechItem = styled.span`
  background: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_secondary};
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
`;

const ListSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ListCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.card_light};
`;

const ListTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${({ theme, type }) => type === "challenge" ? "#f59e0b" : "#22c55e"};
  }
`;

const ListItem = styled.li`
  font-size: 14px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
  padding-left: 8px;
  position: relative;

  &::marker {
    color: ${({ theme }) => theme.primary};
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 100px 20px;
  color: ${({ theme }) => theme.text_secondary};

  h2 {
    font-size: 32px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Content>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowBack /> Go Back
          </BackButton>
          <NotFound>
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist.</p>
          </NotFound>
        </Content>
      </Container>
    );
  }

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>{project.title} | Kasasa Trevor</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://kasasalivingstonetrevor.me/projects/${project.id}`} />
      </Helmet>
      <Content>
        <BackButton
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowBack /> Back to Projects
        </BackButton>

        <Header>
          <ProjectImage
            src={project.image}
            alt={project.title}
            variants={itemVariants}
          />

          <TitleSection>
            <Title variants={itemVariants}>{project.title}</Title>
            {project.subtitle && <Subtitle variants={itemVariants}>{project.subtitle}</Subtitle>}
            <DateText>{project.date}</DateText>

            <TagsContainer variants={itemVariants}>
              {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsContainer>

            <ButtonGroup>
              {project.github && (
                <ActionButton href={project.github} target="_blank" rel="noopener noreferrer" primary="true">
                  <GitHub /> View on GitHub
                </ActionButton>
              )}
              {project.webapp && (
                <ActionButton href={project.webapp} target="_blank" rel="noopener noreferrer">
                  <Launch /> Live Demo
                </ActionButton>
              )}
            </ButtonGroup>
          </TitleSection>
        </Header>

        <Section variants={itemVariants}>
          <SectionTitle>
            <Code /> Overview
          </SectionTitle>
          <Description>{project.fullDescription || project.description}</Description>
        </Section>

        {project.features && project.features.length > 0 && (
          <Section variants={itemVariants}>
            <SectionTitle>
              <Storage /> Key Features
            </SectionTitle>
            <FeaturesGrid>
              {project.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeaturesGrid>
          </Section>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <Section variants={itemVariants}>
            <SectionTitle>
              <Cloud /> Tech Stack
            </SectionTitle>
            <TechStackGrid>
              {project.techStack.map((category, index) => (
                <TechCategory key={index} variants={itemVariants}>
                  <TechCategoryTitle>{category.category}</TechCategoryTitle>
                  <TechList>
                    {category.technologies.map((tech, techIndex) => (
                      <TechItem key={techIndex}>{tech}</TechItem>
                    ))}
                  </TechList>
                </TechCategory>
              ))}
            </TechStackGrid>
          </Section>
        )}

        {(project.challenges || project.outcomes) && (
          <Section variants={itemVariants}>
            <ListSection>
              {project.challenges && project.challenges.length > 0 && (
                <ListCard variants={itemVariants}>
                  <ListTitle type="challenge">
                    <Warning /> Challenges Solved
                  </ListTitle>
                  <ul>
                    {project.challenges.map((challenge, index) => (
                      <ListItem key={index}>{challenge}</ListItem>
                    ))}
                  </ul>
                </ListCard>
              )}

              {project.outcomes && project.outcomes.length > 0 && (
                <ListCard variants={itemVariants}>
                  <ListTitle type="outcome">
                    <CheckCircle /> Outcomes & Impact
                  </ListTitle>
                  <ul>
                    {project.outcomes.map((outcome, index) => (
                      <ListItem key={index}>{outcome}</ListItem>
                    ))}
                  </ul>
                </ListCard>
              )}
            </ListSection>
          </Section>
        )}
      </Content>
    </Container>
  );
};

export default ProjectDetail;
