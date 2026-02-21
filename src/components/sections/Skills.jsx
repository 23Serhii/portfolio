import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
  max-width: 600px;
  text-align: center;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 16px;
  padding: 24px;
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.primary};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.25s ease;
    img.skill-svg {
        width: 26px;
        height: 26px;
        object-fit: contain;
    }
    
    
  i {
    font-size: 26px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 14px rgba(124, 92, 255, 0.35);
  }
`;

const Skills = () => {
  return (
      <Container id="skills">
        <Title>Skills</Title>
        <Desc>
          Technologies and tools I use to build scalable products,
          production-ready systems, and modern applications.
        </Desc>

        <SkillsContainer>
          {skills.map((group, index) => (
              <SkillCard key={index}>
                <SkillTitle>{group.title}</SkillTitle>
                <SkillList>
                  {group.skills.map((skill, i) => (
                      <SkillItem key={i}>
                          {skill.svg ? (
                              <img className="skill-svg" src={skill.svg} alt={skill.name} loading="lazy" />
                          ) : (
                              skill.icon && <i className={skill.icon} />
                          )}
                          {skill.name}
                      </SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
          ))}
        </SkillsContainer>
      </Container>
  );
};

export default Skills;