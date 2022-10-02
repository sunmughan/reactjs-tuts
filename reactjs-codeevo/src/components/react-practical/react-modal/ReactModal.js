// MODAL IN REACT JS
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ReactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h1>Basic Modal Title</h1>
        <p>Basic Modal Body</p>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          Close Modal
        </button>
      </Modal>
    </>
  );
};

export default ReactModal;
