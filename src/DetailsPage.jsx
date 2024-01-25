import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function DetailsPage({ openModal, setOpenModal, detailsData }) {
  const toggle = () => setOpenModal(!openModal);

  return (
    <div>
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalHeader>Details Page</ModalHeader>
        <ModalBody>
          <h3>Name : {detailsData.name}</h3>
          <br />
          <h4>Height:{detailsData.height}</h4>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DetailsPage;
