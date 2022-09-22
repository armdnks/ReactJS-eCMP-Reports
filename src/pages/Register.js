import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FormInput } from "../components/form-components";
import { Button } from "../components";

import useAuthContext from "../context/auth-context.js";

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

  const { setupUser, getToken } = useAuthContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      return;
    }

    const currentUser = { name, email, password, confirmPassword };

    if (isMember) {
      setupUser({ currentUser, endpoint: "login" });
    } else {
      setupUser({ currentUser, endpoint: "register" });
    }
  };

  useEffect(() => {
    // FIXME: Fix navigate("/") when user successfully register or login!
    if (getToken) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [getToken, navigate]);

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

        <form onSubmit={handleSubmit} className="register-page-form">
          {!values.isMember && (
            <FormInput
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
            />
          )}

          <FormInput
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            placeholder="e.g. john@email.com"
          />

          <FormInput
            name="password"
            type="text"
            value={values.password}
            onChange={handleChange}
            placeholder="Your secret password"
          />

          {!values.isMember && (
            <FormInput
              name="confirmPassword"
              type="text"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your secret password"
            />
          )}

          <Button
            type="submit"
            title={values.isMember ? "register" : "login"}
            className="register-form-btn"
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
