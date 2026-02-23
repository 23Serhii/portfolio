import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GitHub, OpenInNew } from "@mui/icons-material";

const Card = styled(motion.div)`
  width: 370px;
  height: 520px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

  @media (max-width: 400px) {
    width: 100%;
    max-width: 340px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.card_light || "#1a1a24"}; // Фалбек фон поки вантажиться
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, opacity 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, opacity 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  z-index: 10;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const OverlayButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.3s ease;

  ${Card}:hover & {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
    background: white;
    color: ${({ theme }) => theme.primary};
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + "15"};
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary + "30"};
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.primary};
  }
`;

const Subtitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-top: 2px;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  margin-top: 4px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 10px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 12px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  ${({ primary, theme }) => primary ? `
    background: ${theme.primary};
    color: white;
    border: none;

    &:hover {
      opacity: 0.9;
    }
  ` : `
    background: transparent;
    color: ${theme.text_secondary};
    border: 1px solid ${theme.text_secondary}40;

    &:hover {
      border-color: ${theme.primary};
      color: ${theme.primary};
    }
  `}
`;

const ViewMoreText = styled.span`
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.primary};
  }
`;

// --- КОМПОНЕНТ ВІДЕО З АВТОПЛЕЄМ ---
const VideoAutoPlay = ({ src, poster, onReady, className, style }) => {
  const ref = useRef(null);
  const isReadyRef = useRef(false);
  const onReadyRef = useRef(onReady);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  const handleReady = useCallback(() => {
    if (!isReadyRef.current) {
      isReadyRef.current = true;
      onReadyRef.current();
    }
  }, []);

  // Перевірка чи відео вже в кеші
  useEffect(() => {
    if (ref.current && ref.current.readyState >= 2) {
      handleReady();
    }
  }, [handleReady]);

  // Розрив дедлоку - примусовий старт
  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  return (
      <Video
          ref={ref}
          src={src}
          className={className}
          poster={poster}
          style={style}
          playsInline
          muted
          loop
          controls={false}
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
          tabIndex={-1}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          aria-hidden="true"
          onLoadedData={handleReady}
          onCanPlay={handleReady}
      />
  );
};

// --- ОСНОВНИЙ КОМПОНЕНТ КАРТКИ ---
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [mediaReady, setMediaReady] = useState(false);

  const handleCardClick = (e) => {
    if (e.target.closest('a')) return;
    navigate(`/projects/${project.id}`);
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
  };

  return (
      <Card
          onClick={handleCardClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
      >
        <ImageContainer>
          {/* Прев'ю (постер), яке показується доки медіа вантажиться */}
          {!mediaReady && project.poster && (
              <Image
                  src={project.poster}
                  alt={`${project.title} preview`}
                  style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
              />
          )}

          {project.video ? (
              <VideoAutoPlay
                  src={project.video}
                  poster={project.poster}
                  onReady={() => setMediaReady(true)}
                  style={{ opacity: mediaReady ? 1 : 0 }}
              />
          ) : (
              <Image
                  src={project.image}
                  alt={project.title}
                  onLoad={() => setMediaReady(true)}
                  style={{ opacity: mediaReady ? 1 : 0 }}
              />
          )}

          <ImageOverlay>
            <OverlayButton as="span" title="View Details">
              <OpenInNew fontSize="small" />
            </OverlayButton>
          </ImageOverlay>
        </ImageContainer>

        <Tags>
          {project.tags.slice(0, 4).map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
          ))}
          {project.tags.length > 4 && <Tag>+{project.tags.length - 4}</Tag>}
        </Tags>

        <Details>
          <Title>{project.title}</Title>
          {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>

        <ButtonGroup>
          <Button
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubClick}
          >
            <GitHub fontSize="small" /> GitHub
          </Button>
          <Button primary="true" as="span">
            <OpenInNew fontSize="small" /> Details
          </Button>
        </ButtonGroup>

        <ViewMoreText>Click to view full project details</ViewMoreText>
      </Card>
  );
};

export default ProjectCard;