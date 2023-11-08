import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import {
  Inputs,
  ContactH1,
  ContactSpan,
  ContactButton,
  ContactFormContainer,
  ContactForm,
} from "../style";
//import emailjs from "@emailjs/browser";
import { useEmailSend } from "../Hooks/useEmailSend";
import { ValidationPanel } from "./ValidationPanel";
import { Modals } from "./Modals";

export const Contact = ({ lang }) => {
  const [show, setShow] = useState(false);
  //regex validation
  const email = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const userName = /^[\w\d\s.áéíóőúü]{5,20}$/i;
  const textMessage = /^[\w\d\s.áéíóőúü]{5,200}$/i;
  //Email Template key
  const fromTemplate = "template_v3muxc6";
  const toTemplate = "template_nph5njc";
  //Send email Hook
  const { emailValues, setEmailValues, sendEmail } = useEmailSend();
  //Update the state with the Form value
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmailValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  //Form submit Function
  const messageSend = (e) => {
    sendEmail(e, fromTemplate);
    sendEmail(e, toTemplate);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  // Form inputs validation
  const formControlInputs = [
    {
      label: lang.contact.body[0].label,
      validationtext: lang.contact.body[0].validationtext,
      type: "text",
      placeholder: lang.contact.body[0].placeholder,
      name: "name",
      required: true,
      conrolid: "formGridName",
      onChange: changeHandler,
      reg: userName.test(emailValues.name).toString(),
      value: emailValues.name,
    },
    {
      label: lang.contact.body[1].label,
      validationtext: lang.contact.body[1].validationtext,
      type: "email",
      placeholder: lang.contact.body[1].placeholder,
      name: "email",
      required: true,
      conrolid: "formGridName",
      onChange: changeHandler,
      reg: email.test(emailValues.email).toString(),
      value: emailValues.email,
    },
    {
      label: lang.contact.body[2].label,
      validationtext: lang.contact.body[2].validationtext,
      type: "textarea",
      placeholder: lang.contact.body[2].placeholder,
      name: "message",
      required: true,
      conrolid: "formGridmessage",
      onChange: changeHandler,
      reg: textMessage.test(emailValues.message).toString(),
      as: "textarea",
      value: emailValues.message,
    },
  ];
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "15px",
      }}>
      <ContactFormContainer>
        <Row>
          <Col>
            <ContactH1>
              <span>&#60;</span>GET
              <ContactSpan>IN</ContactSpan>
              TOUCH<span>&#62;</span>
            </ContactH1>
            <ContactForm onSubmit={(e) => messageSend(e)}>
              <Row className="mb-3">
                {formControlInputs.map((item, index) => {
                  return (
                    index <= 1 && (
                      <Form.Group key={index}>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <Form.Label>{item.label}</Form.Label>
                          <ValidationPanel reg={item.reg}>
                            {item.validationtext}
                          </ValidationPanel>
                        </div>
                        <Inputs {...item} className="bg-light" />
                      </Form.Group>
                    )
                  );
                })}
              </Row>
              <Form.Group
                className="mb-3 d-flex flex-column"
                controlId="formGridmessage">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <Form.Label>Message</Form.Label>
                  <ValidationPanel reg={formControlInputs[2].reg}>
                    {formControlInputs[2].validationtext}
                  </ValidationPanel>
                </div>
                <Inputs
                  className="rounded-1"
                  {...formControlInputs[2]}
                  onChange={changeHandler}
                />
              </Form.Group>
              <ContactButton variant="primary" type="submit">
                {lang.contact.button}
              </ContactButton>
            </ContactForm>
            {<Modals lang={lang} handleClose={handleClose} show={show} />}
          </Col>
        </Row>
      </ContactFormContainer>
    </section>
  );
};
