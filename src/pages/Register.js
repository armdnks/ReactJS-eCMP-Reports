import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogInOutline, IoDocumentTextOutline, IoEyeOff, IoEye } from "react-icons/io5";
import { Button, FormInput } from "../components/shared";
import useAuthContext from "../context/actions/auth-context.js";
import styled from "styled-components";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);

  const { user_loading: userLoading, user, setupUser } = useAuthContext();

  function toggleMember() {
    setValues({ ...values, isMember: !values.isMember });
  }

  function togglePassword() {
    setIsVisible(!isVisible);
  }

  function onChangeHandler(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword, isMember } = values;

    const currentUser = { name, email, password, confirmPassword };

    if (isMember) {
      setupUser({
        currentUser,
        endpoint: "login",
        userAlertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endpoint: "register",
        userAlertText: "User Created! Redirecting...",
      });
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, navigate]);

  return (
    <RegisterPage>
      <div className="register-page-container">
        {/* <div className="register-page-header-logo">
          <img src="img/company-logo-color.png" alt="company-logo-color.png" />
        </div> */}

        <div className="register-page-title-container">
          <div className="register-page-title">
            {values.isMember ? <IoLogInOutline /> : <IoDocumentTextOutline />}
            <h1 className="register-page-title-heading">
              {values.isMember ? "login" : "register"}
            </h1>
          </div>
          <p className="register-page-subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, placeat.
          </p>
        </div>

        <form onSubmit={onSubmitHandler} className="register-page-form">
          {!values.isMember && (
            <FormInput
              name="name"
              type="text"
              value={values.name}
              onChange={onChangeHandler}
              placeholder="e.g. John Doe"
            />
          )}

          <FormInput
            name="email"
            type="text"
            value={values.email}
            onChange={onChangeHandler}
            placeholder="e.g. john@email.com"
          />

          <div className="register-page-password-field">
            <button
              type="button"
              onClick={togglePassword}
              className="register-page-password-field-icon"
            >
              {isVisible ? <IoEye /> : <IoEyeOff />}
            </button>
            <FormInput
              name="password"
              type={isVisible ? "text" : "password"}
              value={values.password}
              onChange={onChangeHandler}
              placeholder="Your secret password"
            />
          </div>

          {!values.isMember && (
            <FormInput
              label="confirm password"
              name="confirmPassword"
              type={isVisible ? "text" : "password"}
              value={values.confirmPassword}
              onChange={onChangeHandler}
              placeholder="Confirm your secret password"
            />
          )}

          <Button
            type="submit"
            title={values.isMember ? "login" : "register"}
            disabled={userLoading}
            className="register-form-submit-btn"
          />

          <p className="register-page-member">
            {values.isMember ? "Not a member yet?" : "Already a member?"}
            <button
              type="button"
              onClick={toggleMember}
              className="register-page-member-btn"
            >
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </RegisterPage>
  );
};

const RegisterPage = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    160deg,
    var(--color-primary-light),
    var(--color-primary-main)
  );

  .register-page-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 3rem 4.5rem;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .register-page-container {
      padding: 2.5rem 2rem 4rem;
    }
  }

  .register-page-header-logo {
    width: 100%;
    height: 100px;
    margin-bottom: 0.25rem;
  }

  .register-page-header-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .register-page-title-container {
    margin-bottom: 1.75rem;
  }

  .register-page-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 3.2rem;
    height: 100px;
    color: var(--color-primary-main);
    margin-bottom: 0.25rem;
  }

  .register-page-title-heading {
    color: var(--color-primary-main);
    font-size: 3rem;
    text-transform: capitalize;
  }

  .register-page-subtitle {
    border-left: 0.25rem solid var(--color-gray-main);
    color: var(--color-gray-main);
    padding-left: 0.75rem;
  }

  .register-page-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .register-page-password-field {
    position: relative;
    z-index: 9;
  }

  .register-page-password-field-icon {
    position: absolute;
    right: 1.25rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    color: var(--color-primary-main);
  }

  .register-form-submit-btn {
    margin-top: 1rem;
  }

  .register-page-member {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1rem;
    color: var(--color-gray-main);
  }

  .register-page-member-btn {
    color: var(--color-primary-main);
    text-decoration: underline;
  }
`;

export default Register;
