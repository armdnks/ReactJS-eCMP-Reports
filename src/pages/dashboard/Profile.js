import { useState } from "react";
import { Link } from "react-router-dom";

import { FormInput } from "../../components/form-components";
import { Button } from "../../components";

import useAuthContext from "../../context/auth-context";
import styled from "styled-components";

const Profile = () => {
  const { userState: user, updateUser } = useAuthContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    updateUser({ name, email, password, confirmPassword });

    setPassword("");
    setConfirmPassword("");
  }

  return (
    <Wrapper>
      <div className="profile-page-container">
        <div className="profile-page-header">
          <p className="profile-page-header-greet">hello,</p>
          <h1 className="profile-page-header-name">{name}</h1>
        </div>

        <form onSubmit={handleSubmit} className="profile-page-form">
          <FormInput
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. John Doe"
          />

          <FormInput
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. john@email.com"
          />

          <FormInput
            name="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your secret password"
          />

          <FormInput
            label="confirm password"
            name="confirmPassword"
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your secret password"
          />

          <div className="profile-page-form-action">
            <Link to="/" className="btn btn-danger btn-block">
              cancel
            </Link>

            <Button
              type="submit"
              title="update"
              className="profile-page-form-btn btn-block"
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  .profile-page-container {
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 4.5rem;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .profile-page-header {
    margin-bottom: 1.5rem;
  }

  .profile-page-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .profile-page-form-action {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    gap: 1rem;
  }
`;

export default Profile;
