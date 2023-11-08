import {
  Section,
  FooterYearandLocation,
  ReactIcons,
  FooterTopContainer,
} from "../style";
import { icons } from "../Nav/Nav";
import { Nav, Col, Row, Container } from "react-bootstrap";

export const Footer = ({ lang }) => {
  return (
    <Section
      style={{
        minHeight: "100vh",
      }}
      className="p-0 footerbg position-relative w-100 d-flex flex-column align-items-center justify-content-center"
      id={lang.nav.navbar[5].linksId}>
      <Container
        fluid
        className="w-100  px-5 d-flex flex-row flex-wrap my-3"
        style={{ top: "40%" }}>
        <Row className="w-100 align-items-start">
          {lang.footer.title.map((item, index) => {
            return (
              <Col
                key={index}
                className="d-flex flex-column col-md-3 col-6 align-items-center justify-content-evenly">
                <h4 className="text-uppercase text-center">{item.title}</h4>
                {item.content.map((e, i) => {
                  return (
                    <span role="button" className="mb-2 fw-semibold" key={i}>
                      {e.label}
                    </span>
                  );
                })}
              </Col>
            );
          })}
          <Col className="d-flex flex-column col-md-3 col-6 align-items-center justify-content-evenly">
            <h4 className="text-center">Menu</h4>
            {lang.nav.navbar.map((item, index) => {
              return (
                <span
                  role="button"
                  className="w-100 d-flex flex-column align-items-center border rounded-pill bg-dark my-1 "
                  key={index}>
                  <Nav.Link
                    href={`#${item.linksId}`}
                    style={{ fontSize: "12px" }}
                    className={`text-light my-1 text-uppercase `}>
                    {item.linksId}
                  </Nav.Link>
                </span>
              );
            })}
          </Col>
        </Row>
      </Container>
      <Row className="w-100  bottom-0 d-flex flex-row justify-content-center mb-3">
        {icons.map((item, index) => {
          return (
            <ReactIcons className="mz-3" href={item.link} key={index}>
              <span className="text-light">{item.icons}</span>
            </ReactIcons>
          );
        })}
      </Row>
    </Section>
  );
};
