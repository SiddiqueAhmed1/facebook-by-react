import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";
import { useState } from "react";

const Modal = ({ hide }) => {
  return (
    <>
      <div className="modal-area">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-content">
              <h2>Create a new account</h2>
              <p>It's quick and easy.</p>
            </div>
            <i><LiaTimesSolid name="close-icon" onClick={() => hide(false)}></LiaTimesSolid></i>
          </div>
          <div className="modal-body">
            {/* <div className="login-form">
              <form action="">
                <input type="text" />
              </form>
            </div> */}
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
