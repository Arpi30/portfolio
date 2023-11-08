import { Nav, Row, Col, Tab, Card } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { ProjectCard, CardBody, CardLink, Stars, Section, Title, CardText, ProjectMenuItems } from "../style";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export const Projects = ({ lang }) => {
  const watch = {
    weather: localStorage.getItem("weather"),
    todo: localStorage.getItem("todo"),
    contact: localStorage.getItem("contact"),
    vadon: localStorage.getItem("vadon"),
  };
  const starIcon = Array(5).fill(0);
  const [activeLink, setActiveLink] = useState("weather");
  const [starTodoVal, setStarTodoVal] = useState(0);
  const [starContactVal, setStarContactVal] = useState(0);
  const [startWeatherVal, setStarWeatherVal] = useState(0);
  const [startVadonVal, setStartVadonVal] = useState(0);
  const [weatherHover, setWeatherHover] = useState(undefined);
  const [todoHover, setTodoHover] = useState(undefined);
  const [contactHove, setContactHover] = useState(undefined);
  const [vadonHover, setVadonHover] = useState(undefined);
  /*-------------------------------------------------------------------------*/
  const [weatherWatch, setWeatherWatch] = useState(
    watch.weather ? JSON.parse(watch.weather) : null
  );
  const [contactWatch, setContactWatch] = useState(
    watch.todo ? JSON.parse(watch.todo) : null
  );
  const [todoWatch, setTodoWatch] = useState(
    watch.todo ? JSON.parse(watch.todo) : null
  );
  const [vadonWatch, setVadonWatch] = useState(
    watch.vadon ? JSON.parse(watch.vadon) : null
  );
  /*-------------------------------------------------------------------------*/
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const Projects = {
    projectsNavbar: lang.project.projectsNavbar,
    projectsDetails: [
      {
        img: "https://techcrunch.com/wp-content/uploads/2013/12/img_0014.png",
        watch: <AiFillEye className="ms-2" />,
        title: lang.project.projectsDetails[0].title,
        desc: lang.project.projectsDetails[0].desc,
        button: lang.project.projectsDetails[0].continue,
        eventKey: "first",
        starVote: (index) => setStarWeatherVal(index + 1),
        localView: () => setWeatherWatch(weatherWatch + 1),
        over: (index) => setWeatherHover(index + 1),
        leave: () => setWeatherHover(undefined),
        link: "http://arpicv.nhely.hu/weather",
        eye: (
          <span style={{ marginLeft: "5px" }} className="watchNumber">
            {weatherWatch || "0"}
          </span>
        ),
        color: weatherHover || startWeatherVal,
        icons: (
          <span>
            <AiFillHtml5 className="text-danger" />
            <DiCss3 className="text-primary" />
            <DiJavascript className="text-warning" />
            <TbBrandVscode className="text-primary" />
          </span>
        ),
        githublink: "https://github.com/Arpi30/weatherapp",
      },
      {
        img: "https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg",
        watch: <AiFillEye className="ms-2" />,
        title: lang.project.projectsDetails[1].title,
        desc: lang.project.projectsDetails[1].desc,
        button: lang.project.projectsDetails[1].continue,
        eventKey: "second",
        starVote: (index) => setStarTodoVal(index + 1),
        localView: () => setTodoWatch(todoWatch + 1),
        over: (index) => setTodoHover(index + 1),
        leave: () => setTodoHover(undefined),
        link: "https://github.com/Arpi30/reactTodo",
        eye: (
          <span style={{ marginLeft: "5px" }} className="watchNumber">
            {todoWatch || "0"}
          </span>
        ),
        color: todoHover || starTodoVal,
        icons: (
          <span>
            <AiFillHtml5 className="text-danger" />
            <DiCss3 className="text-primary" />
            <DiJavascript className="text-warning" />
            <TbBrandVscode className="text-primary" />
          </span>
        ),
        githublink: "https://github.com/Arpi30/reactTodo",
      },
      {
        img: "https://support.zenfolio.com/hc/article_attachments/9942674860947/contacts_1.png",
        watch: <AiFillEye className="ms-2" />,
        title: lang.project.projectsDetails[2].title,
        desc: lang.project.projectsDetails[2].desc,
        button: lang.project.projectsDetails[2].continue,
        eventKey: "third",
        starVote: (index) => setStarContactVal(index + 1),
        localView: () => setContactWatch(todoWatch + 1),
        over: (index) => setContactHover(index + 1),
        leave: () => setContactHover(undefined),
        link: "https://github.com/Arpi30/C_Programming",
        eye: (
          <span style={{ marginLeft: "5px" }} className="watchNumber">
            {contactWatch || "0"}
          </span>
        ),
        color: contactHove || starContactVal,
        icons: (
          <span>
            <TbBrandVscode className="text-primary" />
            <span style={{color: "#0dcaf0", fontWeight: "700", marginLeft: "5px"}}>C</span>
          </span>
        ),
        githublink: "https://github.com/Arpi30/C_Programming",
      },
      {
        img: "https://bonyhadisportcentrum.hu/content/kepek/5c1b91a29b5477484.jpeg",
        watch: <AiFillEye className="ms-2" />,
        title: lang.project.projectsDetails[3].title,
        desc: lang.project.projectsDetails[3].desc,
        button: lang.project.projectsDetails[3].continue,
        eventKey: "fourth",
        starVote: (index) => setStartVadonVal(index + 1),
        localView: () => setVadonWatch(vadonWatch + 1),
        over: (index) => setVadonHover(index + 1),
        leave: () => setVadonHover(undefined),
        link: "https://nagyonvadon.eu",
        eye: (
          <span style={{ marginLeft: "5px" }} className="watchNumber">
            {vadonWatch || "0"}
          </span>
        ),
        color: vadonHover || startVadonVal,
        icons: (
          <span>
            <AiFillHtml5 className="text-danger ms-1" />
            <DiCss3 className="text-primary ms-1" />
            <DiJavascript className="text-warning ms-1" />
            <FaReact className="text-primary ms-1" />
            <FaBootstrap style={{ color: "purple" }} className="ms-1" />
            <TbBrandVscode className="text-primary" />
          </span>
        ),
        githublink: "https://github.com/Arpi30/nagyonvadon/tree/main/src",
      },
    ],
  };

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weatherWatch));
    localStorage.setItem("todo", JSON.stringify(todoWatch));
    localStorage.setItem("contact", JSON.stringify(contactWatch));
    localStorage.setItem("vadon", JSON.stringify(vadonWatch));
  }, [weatherWatch, todoWatch, contactWatch, vadonWatch]);

  return (
    <Section id={lang.nav.navbar[3].linksId}>
      <Tab.Container defaultActiveKey="first">
        <Row className="d-flex flex-column py-4" style={{ position: "relative", height: "700px"}}>
          <Col>
            <Nav fill variant="tabs" className="border-0">
              <ProjectMenuItems>
                {Projects.projectsNavbar.map((item, index) => {
                  return (
                    <Nav.Link
                      className={`${
                        index === 0 ? "rounded-5 rounded-end-0" : ""
                      } ${
                        index === 3 ? "rounded-5 rounded-start-0" : ""
                      } border-0  text-light d-flex align-items-center justify-content-center rounded-0 position-relative`}
                      style={{
                        background: `${
                          activeLink === item.linksId
                            ? "rgb(217, 108, 108)"
                            : "#151515"
                        }`, zIndex: "10"
                      }}
                      eventKey={item.eventkey}
                      key={index}
                      onClick={() => onUpdateActiveLink(item.linksId)}>
                      {item.linksId}
                    </Nav.Link>
                  );
                })}
              </ProjectMenuItems>
            </Nav>
          </Col>
          <Col className="d-flex justify-content-center mt-5">
            <Tab.Content>
              {Projects.projectsDetails.map((item, index) => {
                return (
                  <Tab.Pane
                    key={index}
                    className="text-light"
                    eventKey={item.eventKey}>
                    <ProjectCard >
                      <Col >
                        <Card.Img
                          className="rounded-4"
                          src={item.img}
                          style={{
                            objectFit: "cover",
                            height: "700px",
                            width: "100%"
                          }}
                        />
                      </Col>
                      <CardBody className="p-0" style={{ zIndex: "3" }}>
                        <div
                          className="d-flex flex-column justify-content-evenly"
                          style={{
                            padding: "15px",
                            height: "300px",
                          }}>
                         <Title style={{color: "white"}}  title={item.title}></Title>
                          <CardText>{item.desc}</CardText>
                          <div className="d-flex flex-row justify-content-between">
                            <div>
                              <CardLink href={item.githublink}>GitHub</CardLink>
                              <CardLink
                                href={item.link}
                                onClick={item.localView}>
                                {item.button}
                              </CardLink>
                            </div>
                            <div>
                              {item.watch}
                              {item.eye}
                            </div>
                          </div>
                          <Stars className="d-flex flex-row justify-content-between mt-2">
                            {item.icons}
                            <div>
                              {starIcon.map((star, index) => {
                                return (
                                  <BsFillStarFill
                                    className="ms-1"
                                    size={20}
                                    key={index}
                                    cursor="pointer"
                                    onClick={() => item.starVote(index)}
                                    onMouseOver={() => item.over(index)}
                                    onMouseLeave={() => item.leave()}
                                    color={
                                      item.color > index ? "#e8e819" : "grey"
                                    }
                                  />
                                );
                              })}
                            </div>
                          </Stars>
                        </div>
                      </CardBody>
                    </ProjectCard>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Section>
  );
};
