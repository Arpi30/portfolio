import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  ConnectButtonHome,
  SectionHome,
  Title,
  AnimatedHeaderImage,
  DownloadButton,
  HomeBody,
} from "../style";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import header from "../../assets/img/header.png";

export const Home = ({ lang, onDownload }) => {
  return (
    <SectionHome id={lang.nav.navbar[0].linksId}>
      <Row className="flex-md-row">
        <Col className="d-flex flex-column align-items-start w-100">
          <Title title={lang.home.title}></Title>
          <h1 style={{ marginTop: "25px" }}>
            <span>{lang.home.titleBody}</span>
          </h1>
          <HomeBody>{lang.home.body}</HomeBody>
          <ConnectButtonHome href="#contact" className="mb-3">
            {lang.nav.connect}
            <FaRegArrowAltCircleRight className="ms-2" size={18} />
          </ConnectButtonHome>
          <DownloadButton onClick={onDownload}>
            {lang.nav.save}
            <BiSave className="ms-2" size={18} />
          </DownloadButton>
        </Col>
        <Col className="text-center text-md-end">
          <AnimatedHeaderImage src={header} />
        </Col>
      </Row>
    </SectionHome>
  );
};
