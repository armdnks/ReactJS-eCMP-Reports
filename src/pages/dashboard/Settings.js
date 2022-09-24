import { Profile } from "../../components/settings";

import styled from "styled-components";

const Settings = () => {
  return (
    <Wrapper>
      <div className="settings-page-left">
        <div className="settings-page-title">
          <h1>Settings</h1>
        </div>

        <div className="setting-page-control">
          <h1>darkmode</h1>
        </div>
      </div>
      <Profile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  gap: 1rem;
  padding: 1.5rem;

  @media (max-width: 720px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Settings;
