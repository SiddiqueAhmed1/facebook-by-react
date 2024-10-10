import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";
import { FaQuestionCircle } from "react-icons/fa";
import { day, month } from "../faker/faker";

const Modal = ({ hide }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (a, i) => currentYear - i
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
                <input type="text" name="password" placeholder="New Password" />
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
                  <div className="gender">
                    <div className="gender-title">
                      <h6>Gender</h6>
                      <i>
                        <FaQuestionCircle />
                      </i>
                    </div>
                    <div className="gender-input">
                      <label>
                        <span>Male</span>
                        <input name="gender" type="radio" />
                      </label>
                      <label>
                        <span>Female</span>
                        <input name="gender" type="radio" />
                      </label>
                      <label>
                        <span>Custom</span>
                        <input name="gender" type="radio" />
                      </label>
                    </div>
                  </div>
                  <div className="fb-footer">
                    <p>
                      People who use our service may have uploaded your contact
                      information to Facebook. Learn more.
                    </p>
                    <br />
                    <p>
                      By clicking Sign Up, you agree to our Terms, Privacy
                      Policy and Cookies Policy. You may receive SMS
                      notifications from us and can opt out at any time.
                    </p>
                    <button>Sign up</button>
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
