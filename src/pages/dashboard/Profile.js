import { useState } from "react";
import useAuthContext from "../../context/auth-context";
import { FormInput } from "../../components/form-components";
import { Button } from "../../components";

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

    updateUser({ id: user.id, name, email, password, confirmPassword });

    if (password !== confirmPassword) {
      return;
    }

    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div>
      <h1>Profile</h1>
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

        <Button
          type="submit"
          title="update"
          className="profile-page-form-btn"
        />
      </form>
    </div>
  );
};

export default Profile;
