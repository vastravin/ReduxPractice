import React, { SetStateAction, useEffect } from "react";
import { Modal, Image } from "react-bootstrap";
import ReactDOM from "react-dom";

type Props = ComponentProps;

export type ProductImageModalState = { imageRef: string; isShown: boolean };

type ComponentProps = {
  modalState: ProductImageModalState;
  setModalState: React.Dispatch<SetStateAction<ProductImageModalState>>;
};

const ModalElement: React.FC<Props> = ({ modalState, setModalState }) => {
  useEffect(() => {
    return () => {
      let modalNode: HTMLElement | null = document.getElementById(
        "product-modal"
      );

      if (modalNode) {
        document.removeChild(modalNode);
      }
    };
  });
  return (
    <Modal
      show={modalState.isShown}
      onHide={() => setModalState({ isShown: false, imageRef: "" })}
    >
      <Modal.Body>
        <Image src={modalState.imageRef} />
      </Modal.Body>
    </Modal>
  );
};

const ProductImageModal: React.FC<Props> = ({ modalState, setModalState }) => {
  useEffect(() => {
    let modalNode: HTMLElement | null = document.getElementById(
      "product-modal"
    );

    if (!modalNode) {
      modalNode = document.createElement("div");

      modalNode.setAttribute("id", "product-modal");

      document.appendChild(modalNode);

      const element = (
        <ModalElement modalState={modalState} setModalState={setModalState} />
      );

      ReactDOM.render(element, modalNode);
    }
  }, [modalState]);
  return null;
};

export default ProductImageModal;
