import styled, { keyframes } from "styled-components";
import {
  Form,
  Button,
  Card,
  Container,
  ProgressBar,
  Accordion,
  Nav,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";

const animatedHeaderImg = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;
const animatedSkills = keyframes`
  0% {
      transform: translate(0);
    }

    20% {
      transform: translate(-2px, 2px);
    }

    40% {
      transform: translate(-2px, -2px);
    }

    60% {
      transform: translate(2px, 2px);
    }

    80% {
      transform: translate(2px, -2px);
    }

    100% {
      transform: translate(0);
    }
`;

export const CvSkillsItem = styled(Col)`
  animation: ${animatedSkills} ${(props) => props.time}s ease-in-out 0s infinite
    normal forwards;
`;

export const ReactIcons = styled.a`
  width: 42px;
  height: 42px;
  background: rgba(217, 217, 217, 0.1);
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #d96c6c;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover::before {
    transform: scale(1);
  }
`;
export const ContactButtonNav = styled.a`
  background: #1d1d1d;
  text-decoration: none;
  border-radius: 15px;
  padding: 0 10px;
  color: white !important;
  display: flex;
  align-items: center;
  margin-left: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "${(props) => props.connect}";
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 500;
    color: black;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    transform: translatey(+100%);
    background-color: #d96c6c;
    z-index: 1;
  }
  &:hover::before {
    transform: translatey(0);
  }
`;
export const NavlinkButton = styled(Nav.Link)`
  border-radius: 15px;
  background: #1d1d1d;
  padding: 10px 25px !important;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  width: 110px;
  text-align: center;

  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
`;
/*HOME Component*/
export const SectionHome = styled.section`
  min-height: 100vh;
  width: 70vw;
  margin: 0 auto;
  padding-top: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 991px) {
    width: 100vw;
    margin: 0;
    padding: 100px 10px 0 10px;
  }
`;
export const ConnectButtonHome = styled.a`
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 3px;
  color: white;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #d96c6c;
  }
`;
export const DownloadButton = styled.span`
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 3px;
  color: white;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #d96c6c;
  }
`;
export const Title = styled.span`
  padding: 10px;
  background: #803380;
  position: relative;
  width: 260px;
  height: 45px;
  z-index: -1;

  &::before {
    position: absolute;
    content: "${(props) => props.title}";
    width: 100%;
    height: 100%;
    bottom: -10px;
    right: -10px;
    background: #d96c6c;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
`;

export const AnimatedHeaderImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  animation: ${animatedHeaderImg} 4s ease 0s infinite normal forwards;
  z-index: -1;
  @media (max-width: 425px) {
    margin-top: 20px;
    max-width: 250px;
  }
`;
export const HomeBody = styled.p`
  font-size: 14px;
  font-style: italic;
  background: #151515;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 10px 8px 15px 5px black;
`;
export const SkillSlider = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 50px;
  box-shadow: 10px 8px 15px 5px black;
  border-radius: 65px;
  background: #1d1d1d;

  }
`;
export const CircularDiv = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 50px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
  }
`;
export const CorcularIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 991px) {
    padding: 100px 10px 0 10px;
    top: -50%;
  }
`;
export const Inputs = styled(Form.Control)`
  &:focus {
    background: ${({ reg }) =>
      reg === "true" ? "#adffaf" : "#ffb2b2"} !important;
  }
`;

export const ContactH1 = styled.h1`
  width: 100%;
  letter-spacing: 8px;
  margin-bottom: 20px;
  text-align: center;
`;
export const ContactSpan = styled.span`
  color: #d96c6c;
  display: inline-block;
  background: rgba(217, 217, 217, 0.1);
  padding-left: 8px;
  margin-right: 5px;
`;
export const ContactButton = styled(Button)`
  background: transparent !important;
  border: 1px solid white !important;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    transform: translatex(-100%) translatey(+100%);
    background-color: #d96c6c;
    z-index: -1;
  }
  &:hover::before {
    transform: translatex(0%) translatey(0%);
    border-top-right-radius: 10px;
  }
`;
export const ContactForm = styled(Form)`
  width: 50vw;
  margin: 0 auto;

  @media (max-width: 425px) {
    width: 80vw;
  }
`;
export const ProjectCard = styled(Card)`
  background: transparent; 
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const CardBody = styled(Card.Body)`
  color: #9d9d9d;
  background: #181818;
  position: absolute;
  bottom: -10px;
  width: 100%;

  /* &::before {
    position: absolute;
    content: "";
    background: rgb(217, 108, 108);
    background: linear-gradient(
      90deg,
      rgba(217, 108, 108, 1) 0%,
      rgba(203, 237, 39, 1) 50%,
      rgba(217, 108, 108, 1) 100%
    );
    bottom: -1px;
    right: -1px;
    height: 101%;
    width: 100%;
    z-index: -1;
    border-radius: 15px;
  }
  &::after {
    position: absolute;
    content: "";
    background: rgb(128, 51, 128);
    background: linear-gradient(
      90deg,
      rgba(128, 51, 128, 1) 0%,
      rgba(68, 212, 54, 1) 50%,
      rgba(128, 51, 128, 1) 100%
    );
    top: -2px;
    left: -1px;
    height: 101%;
    width: 100%;
    z-index: -1;
    border-radius: 15px;
  } */
`;
export const CardLink = styled(Card.Link)`
  text-decoration: none;
  color: rgb(217, 108, 108);
  padding: 5px 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgb(217, 108, 108);
`;
export const CardText = styled(Card.Text)`
  text-align: justify;
  padding-top: 10px;

  @media (max-width: 598px) {
    font-size: 12px;
  }
`
export const ProjectMenuItems = styled(Nav.Item)`
  display: flex;
  flex-direction: row;
  height: 70px;
  
  @media (max-width: 598px) {
    height: 50px;
    font-size: 12px;
  }
`
export const Stars = styled.div`
  cursor: pointer;
  .star:hover {
    transform: scale(1.4);
    transition: transform 0.2s ease-in-out;
  }
`;
export const ContactFormContainer = styled(Container)`
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background: #1d1d1d;
  padding: 40px 0;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    background: rgb(217, 108, 108);
    background: linear-gradient(
      90deg,
      rgba(217, 108, 108, 1) 0%,
      rgba(203, 237, 39, 1) 50%,
      rgba(217, 108, 108, 1) 100%
    );
    bottom: -1px;
    right: -1px;
    height: 101%;
    width: 100%;
    z-index: -1;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  &::after {
    position: absolute;
    content: "";
    background: rgb(128, 51, 128);
    background: linear-gradient(
      90deg,
      rgba(128, 51, 128, 1) 0%,
      rgba(68, 212, 54, 1) 50%,
      rgba(128, 51, 128, 1) 100%
    );
    top: -1px;
    left: -1px;
    height: 101%;
    width: 100%;
    z-index: -1;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;
export const Selectnav = styled(Form.Select)`
  appearance: auto;
  width: 70px;
  margin-left: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  background: #1d1d1d;
  border: none;
  color: white;
  border-radius: 15px;

  &:focus {
    box-shadow: none !important;
  }

  option {
    background: rgb(18, 18, 18);
    padding: 25px;
  }

  @media (max-width: 991px) {
    position: absolute;
    right: 5px;
    top: 8px;
    margin: 0;
  }
`;
export const NavbarToggle = styled(Navbar.Toggle)`
  @media (max-width: 991px) {
    position: absolute;
    right: 100px;
    top: 8px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none !important;
    border-radius: 15px;
    background: #1d1d1d;
  }
  .navbar-toggler-icon {
    background-image: none;
    background-color: ${(props) => (props.open ? "transparent" : "white")};
    height: 2px;
    position: relative;
    transition: all 0.2s ease-in-out;

    &::before {
      position: absolute;
      content: "";
      background: white;
      width: ${(props) => (props.open ? "75%" : "100%")};
      height: ${(props) => (props.open ? "3px" : "2px")};
      top: 0;
      left: ${(props) => (props.open ? "3px" : "0")};
      transition: all 0.2s ease-in-out;
      transform: ${(props) =>
        props.open ? "rotate(50deg)" : "translateY(-8px)"};
    }
    &::after {
      position: absolute;
      content: "";
      background: white;
      width: ${(props) => (props.open ? "75%" : "100%")};
      height: ${(props) => (props.open ? "3px" : "2px")};
      bottom: 0;
      left: ${(props) => (props.open ? "3px" : "0")};
      transition: all 0.2s ease-in-out;
      transform: ${(props) =>
        props.open ? "rotate(-50deg)" : "translateY(8px)"};
    }
  }
`;
export const NavProgressbar = styled(ProgressBar)`
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(128, 51, 128, 1) 0%,
    rgba(68, 212, 54, 1) 50%,
    rgba(128, 51, 128, 1) 100%
  );
`;
export const AboutAccordion = styled(Accordion)`
  padding: 15px;

  .aboutItem {
    background: #1d1d1d;
    margin-bottom: 15px;
    padding: 0 10px;
    border-radius: 25px;
    position: relative;
  }

  /* .accordion-button::after {
    content: "⯆";
  } */

  .accordion-header,
  .accordion-body {
    padding: 15px 0;
  }
`;
export const Section = styled.section`
  min-height: 50vh;
  width: 70vw;
  padding-top: 200px;
  margin: 0 auto;

  @media (max-width: 991px) {
    width: 100vw;
    margin: 0;
    padding: 100px 15px 0 15px;
  }
`;
export const AboutRotateButton = styled(Accordion.Button)`
  position: absolute !important;
  width: 100%;
  text-align: end;
  top: 10px;
  right: 15px !important;
  display: block !important;
`;
