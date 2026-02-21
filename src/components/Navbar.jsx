import { useState } from "react";
import { Link as LinkR, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded, Close } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.bg + "ee"};
  border-bottom: 1px solid ${({ theme }) => theme.card_light};
  transition: all 0.3s ease;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  padding: 0 6px;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.02);
    box-shadow: 0 4px 15px ${({ theme }) => theme.primary}40;
  }
`;

const MobileIcon = styled.div`
  display: none;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.card_light};
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.card};
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 30px;
  gap: 24px;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
`;

const MobileMenuHeader = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.card_light};

  &:hover {
    color: ${({ theme }) => theme.primary};
    padding-left: 10px;
  }
`;

const MobileGithubButton = styled.a`
  margin-top: auto;
  background: ${({ theme }) => theme.primary};
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleNavClick = (e, sectionId) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          Kasasa <span>Trevor</span>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded />
        </MobileIcon>

        <NavItems>
          <NavLink href="/#About" onClick={(e) => handleNavClick(e, "About")}>About</NavLink>
          <NavLink href="/#Skills" onClick={(e) => handleNavClick(e, "Skills")}>Skills</NavLink>
          <NavLink href="/#Experience" onClick={(e) => handleNavClick(e, "Experience")}>Experience</NavLink>
          <NavLink href="/#Projects" onClick={(e) => handleNavClick(e, "Projects")}>Projects</NavLink>
          <NavLink href="/#Education" onClick={(e) => handleNavClick(e, "Education")}>Education</NavLink>
          <NavLink href="/#Contact" onClick={(e) => handleNavClick(e, "Contact")}>Contact</NavLink>
        </NavItems>

        <AnimatePresence>
          {isOpen && (
            <>
              <MobileMenuOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <MobileMenu
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <MobileMenuHeader>
                  <MobileIcon onClick={() => setIsOpen(false)}>
                    <Close />
                  </MobileIcon>
                </MobileMenuHeader>

                <MobileNavLink href="/#About" onClick={(e) => handleNavClick(e, "About")}>
                  About
                </MobileNavLink>
                <MobileNavLink href="/#Skills" onClick={(e) => handleNavClick(e, "Skills")}>
                  Skills
                </MobileNavLink>
                <MobileNavLink href="/#Experience" onClick={(e) => handleNavClick(e, "Experience")}>
                  Experience
                </MobileNavLink>
                <MobileNavLink href="/#Projects" onClick={(e) => handleNavClick(e, "Projects")}>
                  Projects
                </MobileNavLink>
                <MobileNavLink href="/#Education" onClick={(e) => handleNavClick(e, "Education")}>
                  Education
                </MobileNavLink>
                <MobileNavLink href="/#Contact" onClick={(e) => handleNavClick(e, "Contact")}>
                  Contact
                </MobileNavLink>

                <MobileGithubButton
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Profile
                </MobileGithubButton>
              </MobileMenu>
            </>
          )}
        </AnimatePresence>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
