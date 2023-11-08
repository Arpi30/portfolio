import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import {
  ReactIcons,
  ContactButtonNav,
  NavProgressbar,
  NavlinkButton,
  NavbarToggle,
} from "../style";
import { Select } from "./Select";
export const icons = [
  {
    link: "https://www.facebook.com/arpad.acs.7/",
    icons: <BiLogoFacebook size="20" />,
  },
  {
    link: "https://www.linkedin.com/in/acs-arpad/",
    icons: <BiLogoLinkedin size="20" />,
  },
  { link: "https://github.com/Arpi30", icons: <FiGithub size="20" /> },
];

export const NavbarTop = ({ lang, onSelectHandler }) => {
  const [activeLink, setActiveLink] = useState("Főoldal");
  const [scrolled, setScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [expanded, setExpanded] = useState(false);
  /*---------------------------------------------------------------------------------------------*/
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  /*---------------------------------------------------------------------------------------------*/

  /*---------------------------------------------------------------------------------------------*/
  const navSelectHandler = (value) => {
    onSelectHandler(value);
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`${scrolled ? "scrolled" : ""} position-fixed `}
      style={{
        background: "#121212",
        zIndex: "99",
        width: "100vw",
        justifyContent: "center",
        left: "0",
        alignItems: "start",
      }}>
      <Container className="m-0 p-0 align-items-start">
        <Navbar.Brand
          href={`/portfolio/#${lang.nav.navbar[0].linksId}`}
          className="text-light">
          Portfolio
        </Navbar.Brand>
        <NavbarToggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          open={expanded}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex-md-wrap flex-nowrap justify-content-center">
          <Nav style={{ margin: "0 auto" }}>
            {lang.nav.navbar.map((item, index) => {
              return (
                <span
                  className="w-100 d-flex flex-column align-items-center "
                  key={index}>
                  <NavlinkButton
                    href={`#${item.linksId}`}
                    className={`${
                      activeLink === item.linksId
                        ? "active-navbar-link"
                        : "navbar-link"
                    } text-light mx-3 `}
                    onClick={() => onUpdateActiveLink(item.linksId)}>
                    {item.linksId}
                  </NavlinkButton>
                </span>
              );
            })}
          </Nav>

          <span className="navbar-text d-flex flex-row justify-content-center p-0">
            <div className="social-icon d-flex">
              {icons.map((item, index) => {
                return (
                  <ReactIcons href={item.link} key={index}>
                    <span className="text-light">{item.icons}</span>
                  </ReactIcons>
                );
              })}
            </div>
            <ContactButtonNav
              onClick={() => setExpanded(false)}
              href="#contact"
              connect={lang.nav.connect}>
              {lang.nav.connect}
            </ContactButtonNav>
          </span>
        </Navbar.Collapse>
        <Select onSelectHandler={navSelectHandler} />
      </Container>
      <NavProgressbar now={scrollTop} visuallyHidden variant="danger" />
    </Navbar>
  );
};
