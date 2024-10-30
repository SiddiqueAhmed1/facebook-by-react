import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";
import { FaQuestionCircle } from "react-icons/fa";
import { day, month } from "../faker/faker";
import { useState } from "react";

const Modal = ({ hide }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (a, i) => currentYear - i
  );

  const [input, setInput] = useState({
    first_name: "",
    sur_name: "",
    email: "",
    password: "",
    day : '',
    month : '',
    year : '',
    gender : '',
  });
  
  const [border, setBorder] = useState({
    first_name: true,
    sur_name: true,
    email: true,
    password: true,
  });
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    // Reset border error when typing if there is content
    if (value.trim() !== "") {
      setBorder((prevState) => ({
        ...prevState,
        [name]: true,
      }));
    }
  };
  
  const handleBlurInput = (e) => {
    const { name, value } = e.target;
    // Set border to red if the field is empty on blur
    if (value.trim() === "") {
      setBorder((prevState) => ({
        ...prevState,
        [name]: false, // false means red border
      }));
    }
  };
  
  const handleFocusInput = (e) => {
    const { name } = e.target;
    // Set border to default on focus
    setBorder((prevState) => ({
      ...prevState,
      [name]: true, // true means default border color
    }));
  };
  
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
              <form>
                <div className="name-input">
                  <input
                    style={{
                      borderColor: border.first_name ? "#ccd0d5" : "red", // Default color or red
                    }}
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={input.first_name}
                    onChange={handleInput}
                    onBlur={handleBlurInput}
                    onFocus={handleFocusInput}
                  />
                  <input
                    style={{
                      borderColor: border.sur_name ? "#ccd0d5" : "red", // Default color or red
                    }}
                    type="text"
                    placeholder="Surname"
                    name="sur_name"
                    value={input.sur_name}
                    onChange={handleInput}
                    onBlur={handleBlurInput}
                    onFocus={handleFocusInput}
                  />
                </div>
                <input
                  style={{
                    borderColor: border.email ? "#ccd0d5" : "red", // Default color or red
                  }}
                  type="text"
                  placeholder="Mobile number or email address"
                  name="email"
                  value={input.email}
                  onChange={handleInput}
                  onBlur={handleBlurInput}
                  onFocus={handleFocusInput}
                />
                <input
                  style={{
                    borderColor: border.password ? "#ccd0d5" : "red", // Default color or red
                  }}
                  type="text"
                  placeholder="New Password"
                  name="password"
                  value={input.password}
                  onChange={handleInput}
                  onBlur={handleBlurInput}
                  onFocus={handleFocusInput}
                />
             
                <div className="reg-extra">
                  <div className="reg-extra-title">
                    <h6>Date of birth</h6>
                    <i>
                      <FaQuestionCircle />
                    </i>
                  </div>
                  <div className="dmy">
                    {/* DAY */}
                    <select name="day" onChange={handleInput}>
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
                    {/* month */}
                    <select name="month" onChange={handleInput}>
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
                    {/* year */}
                    <select
                      name="year"
                      value={input.year}
                      onChange={handleInput}
                    >
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
                  {/* gender sub section */}
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
                        <input
                          name="gender"
                          value="Male"
                          type="radio"
                          onChange={handleInput}
                        />
                      </label>
                      <label>
                        <span>Female</span>
                        <input
                          name="gender"
                          value="Female"
                          type="radio"
                          onChange={handleInput}
                        />
                      </label>
                      <label>
                        <span>Custom</span>
                        <input
                          name="gender"
                          value="Custom"
                          type="radio"
                          onChange={handleInput}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="fb-footer">
                    <p>
                      People who use our service may have uploaded your contact
                      information to Facebook. Learn more.
                    </p>

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
