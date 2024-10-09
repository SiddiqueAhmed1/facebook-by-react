import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";
import { FaQuestionCircle } from "react-icons/fa";
import { day, month } from "../faker/faker";

const Modal = ({ hide }) => {
  const years = Array.from(
    { length: 125 },
    (a, i) => new Date().getFullYear() - i
  );

  return (
    <>
      <div className="modal-area">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-content">
              <h2>Create a new account</h2>
              <p>It's quick and easy.</p>
            </div>
            <i>
              <LiaTimesSolid onClick={() => hide(false)}></LiaTimesSolid>
            </i>
          </div>
          <div className="modal-body">
            <div className="login-form">
              <form action="">
                <div className="name-input">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Surname" />
                </div>
                <input
                  type="text"
                  placeholder="Mobile number or email adress"
                />
                <input type="text" placeholder="New Password" />
                <div className="reg-extra">
                  <div className="reg-extra-title">
                    <h6>Date of birth</h6>
                    <i>
                      <FaQuestionCircle />
                    </i>
                  </div>
                  <div className="dmy">
                    <select name="" id="">
                      {day.map((item, index) => (
                        <option
                          value={item}
                          selected={
                            new Date().getDate() === item ? true : false
                          }
                          key={index}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select name="" id="">
                      {month.map((item, index) => (
                        <option
                          value={item}
                          selected={
                            new Date().getMonth() === index ? true : false
                          }
                          key={index}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select name="" id="">
                      {years?.map((item, index) => (
                        <option
                          value={item}
                          key={index}
                          selected={
                            new Date().getFullYear === item ? true : false
                          }
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
