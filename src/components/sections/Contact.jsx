import styled from "styled-components";
import { motion } from "framer-motion";
import { WhatsApp, Email, Phone, LocationOn } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled(motion.div)`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled(motion.div)`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 40px;
  width: 100%;
  max-width: 600px;
`;

const ContactCard = styled(motion.div)`
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateX(8px);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $color }) => $color || "#25D366"};
  color: white;

  svg {
    font-size: 24px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContactLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ContactValue = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const WhatsAppButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 18px 32px;
  background: #25D366;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
  }

  svg {
    font-size: 28px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.card_light};
  }
`;

const Contact = () => {
  const phoneNumber = "380739878325";
  const whatsappMessage = encodeURIComponent("Hi Serhii! I visited your portfolio and would like to connect with you.");

  return (
    <Container id="Contact">
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </Title>
        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <WhatsAppButton
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsApp /> Chat on WhatsApp
          </WhatsAppButton>

          <Divider>or reach me at</Divider>

          <ContactCard>
            <ContactItem
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper $color="#25D366">
                <WhatsApp />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>WhatsApp</ContactLabel>
                <ContactValue>+380 73 987 83 25</ContactValue>
              </ContactInfo>
            </ContactItem>

            <ContactItem
              href="tel:+380739878325"
            >
              <IconWrapper $color="#854CE6">
                <Phone />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>+380 73 987 83 25</ContactValue>
              </ContactInfo>
            </ContactItem>

            <ContactItem
              href="mailto:opanasenkoserhii@gmail.com"
            >
              <IconWrapper $color="#EA4335">
                <Email />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>opanasenkoserhii@gmail.com</ContactValue>
              </ContactInfo>
            </ContactItem>

            <ContactItem as="div" style={{ cursor: "default" }}>
              <IconWrapper $color="#4285F4">
                <LocationOn />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>Kyiv, Ukraine</ContactValue>
              </ContactInfo>
            </ContactItem>
          </ContactCard>
        </ContactContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
