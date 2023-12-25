import { useState } from "react";
import djiga from "./djiga.jpeg";
const Modal = () => {
  const [showModal, toggle] = useState(false);
  return (
    <>
      <div className="button-wrapper">
        <button className="button  button-primary" onClick={() => toggle(true)}>
          Open Modal
        </button>
        <button className="button" onClick={() => toggle(true)}>
          Confirm
        </button>
      </div>
      {showModal && (
        <div class="modal">
          <div class="modal-content">
            <span class="close" onClick={() => toggle(false)}>
              &times;
            </span>
            <p>АААА НИХ_ЯЯЯЯЯ </p>
            <img alt="" src={djiga} className="djiga" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
