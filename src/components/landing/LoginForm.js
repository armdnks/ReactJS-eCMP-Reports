import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogInOutline, IoDocumentTextOutline, IoEyeOff, IoEye } from "react-icons/io5";
import { Button, FormInput, Loader } from "../shared";
import useAuthContext from "../../context/actions/auth-context.js";
import styled from "styled-components";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: true,
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);

  const { user_loading: loading, user, setupUser } = useAuthContext();

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
    <Wrapper>
      {loading && (
        <Loader
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 99,
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(5px)",
          }}
        />
      )}

      <div className="login-form-title-container">
        <div className="login-form-title">
          {values.isMember ? <IoLogInOutline /> : <IoDocumentTextOutline />}
          <h1 className="login-form-title-heading">{values.isMember ? "login" : "register"}</h1>
        </div>
        <p className="login-form-subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, placeat.
        </p>
      </div>

      <form onSubmit={onSubmitHandler} className="login-form-main">
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

        <div className="login-form-password-field">
          <button type="button" onClick={togglePassword} className="login-form-password-field-icon">
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
          disabled={loading}
          className="login-form-submit-btn"
        />

        <p className="login-form-member">
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="login-form-member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding: 0 4rem;

  .login-form-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 3.2rem;
    height: 100px;
    color: var(--color-primary-main);
    margin-bottom: 0.25rem;
  }

  .login-form-title-heading {
    color: var(--color-primary-main);
    font-size: 3rem;
    text-transform: capitalize;
  }

  .login-form-subtitle {
    border-left: 0.25rem solid var(--color-gray-main);
    color: var(--color-gray-main);
    padding-left: 0.75rem;
  }

  .login-form-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .login-form-password-field {
    position: relative;
    z-index: 9;
  }

  .login-form-password-field-icon {
    position: absolute;
    right: 1.25rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    color: var(--color-primary-main);
  }

  .login-form-submit-btn {
    margin-top: 1rem;
  }

  .login-form-member {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1rem;
    color: var(--color-gray-main);
  }

  .login-form-member-btn {
    color: var(--color-primary-main);
    text-decoration: underline;
  }
`;

export default LoginForm;
