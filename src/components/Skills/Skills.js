import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import C from "../../assets/img/C.jpg"
import { Col, Row, Container } from "react-bootstrap";
import { SkillSlider, Section } from "../style";
import { SkillUi } from "./SkillUi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoSass } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { SiFirebase } from "react-icons/si";
import { useEffect, useState } from "react";
import React from "react";

export const skillsArray = [
  {
    title: "HTML",
    value: 80,
    img: <AiFillHtml5 size={40} className="text-danger" />,
  },
  {
    title: "CSS",
    value: 80,
    img: <DiCss3 size={40} className="text-primary" />,
  },
  {
    title: "Js",
    value: 60,
    img: <DiJavascript size={40} className="text-warning" />,
  },
  {
    title: "React",
    value: 60,
    img: <FaReact size={40} className="text-primary" />,
  },
  {
    title: "C",
    value: 30,
    img: <img src={C} style={{width: "35px"}} className="text-primary"></img>,
  },
  {
    title: "Bootstrap",
    value: 65,
    img: <FaBootstrap size={40} style={{ color: "purple" }} />,
  },
  { title: "Git", value: 80, img: <BsGit size={40} /> },
  {
    title: "VsCode",
    value: 80,
    img: <TbBrandVscode size={40} className="text-primary" />,
  },
  {
    title: "Sass",
    value: 50,
    img: <BiLogoSass size={40} className="text-primary" />,
  },
  {
    title: "NodeJs",
    value: 20,
    img: <FaNodeJs size={40} className="text-success" />,
  },
  {
    title: "Microsoft",
    value: 60,
    img: <TfiMicrosoftAlt size={40} className="text-primary" />,
  },
  {
    title: "Firebase",
    value: 40,
    img: <SiFirebase size={40} className="text-warning" />,
  },
];

export const Skills = ({ lang }) => {
  const [size, setSize] = useState(50);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setSize(25);
    }
    const resize = () => {
      if (window.innerWidth <= 991) {
        setSize(25);
      } else {
        setSize(50);
      }
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [size]);

  const skillsArrayWithSize = skillsArray.map((item) => ({
    ...item,
    img: React.cloneElement(item.img, { size }),
  }));

  return (
    <Section id={lang.nav.navbar[2].linksId}>
      <Container>
        <Row>
          <Col className="p-0">
            <SkillSlider>
              <h2 style={{ textAlign: "center" }}>{lang.skills.title}</h2>
              <p style={{ textAlign: "center" }}>{lang.skills.body}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                showDots={true}
                centerMode={true}
                keyBoardControl={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}>
                {skillsArrayWithSize.map((item, index) => {
                  return <SkillUi key={index} {...item} />;
                })}
              </Carousel>
            </SkillSlider>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
