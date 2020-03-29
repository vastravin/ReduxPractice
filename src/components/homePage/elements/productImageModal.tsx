import React, { SetStateAction, useEffect } from "react";
import { Modal, Image } from "react-bootstrap";
import ReactDOM from "react-dom";

type Props = ComponentProps;

export type ProductImageModalState = { imageRef: string; isShown: boolean };

type ComponentProps = {
  modalState: ProductImageModalState;
  setModalState: React.Dispatch<SetStateAction<ProductImageModalState>>;
};

const ProductImageModal: React.FC<Props> = ({ modalState, setModalState }) => {
  return (
    <Modal
      show={modalState.isShown}
      centered={true}
      size="lg"
      onHide={() => setModalState({ isShown: false, imageRef: "" })}
    >
      <Modal.Body>
        <Image src={modalState.imageRef} fluid />
      </Modal.Body>
    </Modal>
  );
};

export default ProductImageModal;
