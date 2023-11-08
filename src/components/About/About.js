import { Accordion } from "react-bootstrap";
import { AboutAccordion, Section, AboutRotateButton,Title } from "../style";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const About = ({ lang }) => {
  return (
    <Section id={lang.nav.navbar[1].linksId}>
      <div className="text-center"><Title className="text-center mb-5  d-inline-block" title={lang.about.title}></Title></div>
      <AboutAccordion defaultActiveKey="first" flush={true} bsPrefix="about">
        {lang.about.accordion.map((item, index) => {
          return (
            <Accordion.Item
              eventKey={item.eventkey}
              key={index}
              bsPrefix="aboutItem">
              <AboutRotateButton>
                <BsFillArrowDownCircleFill />
              </AboutRotateButton>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body className="show">{item.body}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </AboutAccordion>
    </Section>
  );
};
