/* eslint-disable no-unused-vars */
import { useState } from "react";

import { FormInput } from "../components/form-components";
import { Button } from "../components";
import styled from "styled-components";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <RegisterPage>
      <div className="register-page-container">
        <div className="register-page-header">
          <h1 className="register-page-title">Join Us</h1>
          <p className="register-page-subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, placeat.
          </p>
        </div>

        <form className="register-page-form">
          <FormInput
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
          />

          <FormInput
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="e.g. john@email.com"
          />

          <FormInput
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Your secret password"
          />

          <FormInput
            label="confirm password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your secret password"
          />

          <Button
            type="submit"
            title="register"
            className="register-form-btn"
          />

          {/* <p className="register-page-member">
            {values.isMember ? "Not a member yet?" : "Already a member?"}
            <button
              type="button"
              onClick={toggleMember}
              className="register-page-member-btn"
            >
              {values.isMember ? "Register" : "Login"}
            </button>
          </p> */}
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
    var(--color-accent),
    var(--color-primary)
  );

  .register-page-container {
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 4.5rem;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .register-page-header {
    margin-bottom: 1.5rem;
  }

  .register-page-title {
    color: var(--color-primary);
    margin-bottom: 0.5rem;
    font-size: 3rem;
  }

  .register-page-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .register-form-btn {
    margin-top: 1rem;
  }

  .register-page-member {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1rem;
  }

  .register-page-member-btn {
    color: var(--color-primary);
    text-decoration: underline;
  }
`;

export default Register;
