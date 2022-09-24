import { Profile } from "../../components/settings";
import { Container } from "../../components/layout";

import styled from "styled-components";

const Settings = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr;

  gap: 1rem;

  @media (max-width: 720px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Settings;
