import { Profile } from "../../components/settings";
import { PageTitle } from "../../components/shared";

import styled from "styled-components";

const Settings = () => {
  return (
    <Wrapper>
      <div className="settings-page-container">
        <PageTitle title="settings" />

        {/* <div className="setting-page-control">
          <h1>darkmode</h1>
        </div> */}

        <Profile />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .settings-page-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 3.5rem 1.5rem 5rem;
  }
`;

export default Settings;
