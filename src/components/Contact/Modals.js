import { Modal, Button } from "react-bootstrap";

export const Modals = ({ show, handleClose, lang }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered={true}
        contentClassName="bg-dark">
        <Modal.Header closeButton>
          <Modal.Title>{lang.contact.modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{lang.contact.modal.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {lang.contact.modal.button}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
