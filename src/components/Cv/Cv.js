import React from "react";
import "./style.css";
import { Section, CvSkillsItem } from "../style";
import foto from "./img/Arpi.jpg";
import { Row, Col } from "react-bootstrap";
import { skillsArray } from "../Skills/Skills";
export const Cv = ({ lang, onDownload, downloadState }) => {



  return (
    <Section id={lang.nav.navbar[4].linksId}>
      <div
        style={{ boxShadow: "0 0 40px rgb(0, 0, 0)", background: "#1d1d1d" }}
        className="containerCv position-relative m-1 d-grid rounded-5"
        id="content">
        <div className="left_Side position-relative p-3 p-md-5 d-flex flex-column justify-content-between">
          <button
            role="button"
            style={{ background: "rgb(255, 126, 126)" }}
            className="download rounded-5 fw-bolder fs-5 p-1 mb-lg-0 mb-3"
            id="noDownload"
            onClick={onDownload}>
            Letöltés
          </button>
          <div className=" position-relative d-flex flex-column align-items-center pb-3 border-bottom border-dark-subtle">
            <div
              className="imgBx position-relative rounded-circle overflow-hidden"
              style={{ width: "10rem", height: "10rem" }}>
              <img
                id="noDownload"
                src={foto}
                alt=""
                className="position-absolute w-100 object-fit-cover top-0"
                style={{ height: "100%" }}
              />
            </div>
            <h2 className="text-light mt-3 text-uppercase text-center fw-normal lh-sm fs-4">
              Ács Árpád
              <br />
              <span className="fw-light fs-5">FrontEnd Developer</span>
            </h2>
          </div>
          <div className="pt-5">
            <h5 className=" text-light text-uppercase mb-3 fw-bold contact">
              {lang.cv.contact.title}
            </h5>
            <ul className="p-0 position-relative">
              {lang.cv.contact.desc.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="list-unstyled position-relative my-1">
                    <span>{item.label}: </span>
                    <span className="text">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="contactInfo education">
            <h5 className=" text-light text-uppercase mb-3 fw-bold educ ">
              {lang.cv.education.title}
            </h5>
            <ul className="p-0">
              {lang.cv.education.desc.map((item, index) => {
                return (
                  <li className="pb-3 list-unstyled" key={index}>
                    <h5
                      className="fw-bolder"
                      style={{ color: "rgb(255, 126, 126)" }}>
                      {item.year}
                    </h5>
                    <h6 className="cook">{item.title}</h6>
                    <h6>{item.place}</h6>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="contactInfo language">
            <h5 className=" text-light text-uppercase mb-3 fw-bold lang">
              {lang.cv.lang.title}
            </h5>
            <ul className="p-0">
              {lang.cv.lang.desc.map((item, index) => {
                return (
                  <li key={index} className="list-unstyled">
                    <span className="text ger">{item.lang}</span>
                    <span
                      className="position-relative w-100 d-block mt-1"
                      style={{
                        background: "rgb(110, 110, 110)",
                        height: ".4vh",
                      }}>
                      <div
                        className="position-absolute bg-light top-0"
                        style={{ width: item.width, height: "100%" }}></div>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right-side position-relative p-md-5 p-3">
          <div className="about mb-5 workplaces">
            <h5 className=" text-light text-uppercase mb-2 experience">
              {lang.cv.experience.title}
            </h5>
            {lang.cv.experience.content.map((item, index) => {
              return (
                <div
                  className="box d-flex flex-md-row flex-column my-2"
                  key={index}>
                  <div
                    className="year_company mb-md-0 mb-2 lh-base"
                    style={{ minWidth: "150px" }}>
                    <h6
                      className="text-uppercase fw-bold fs-6"
                      style={{ color: "rgb(255, 126, 126)" }}>
                      {item.year}
                    </h6>
                    <h6
                      className="text-uppercase fw-bold fs-6"
                      style={{ color: "rgb(255, 126, 126)" }}>
                      {item.place}
                    </h6>
                  </div>
                  <div className="telekom lh-base">
                    <h4 className="text-uppercase text-light fs-6">
                      {item.title}
                    </h4>
                    <p className="text-light">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about mb-5 skills">
            <Row
              className="box d-flex flex-wrap rounded-5 p-3 align-items-center"
              style={{ maxHeight: "330px", background: "rgba(14, 14, 14, .5)" }}>
              <span className="text-center text-uppercase">
                készségek és technológiák
              </span>
              {skillsArray.map((item, index) => {
                return (
                  <CvSkillsItem
                    time={index % 2 === 0 ? 4 : 6}
                    className={`${index % 2 === 0 ? "mt-4" : ""} text-center`}
                    key={index}>
                    {item.img}
                  </CvSkillsItem>
                );
              })}
            </Row>
          </div>

          <div className="about  interest">
            <h5 className=" int">{lang.cv.interest.title}</h5>
            <div className="d-grid">
              <Row>
                {lang.cv.interest.content.map((item, index) => {
                  return (
                    <Col
                      className="text-light fw-semibold my-2 col-md-3 col-6 text-lg-start text-center flex-grow-1"
                      key={index}
                      style={{ listStyle: "none" }}>
                      {item.title}
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
