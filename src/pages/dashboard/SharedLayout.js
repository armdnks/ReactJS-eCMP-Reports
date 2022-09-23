import { Outlet } from "react-router-dom";

import { SideNavigation } from "../../components";

import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="shared-layout-container">
        <main className="shared-layout-main">
          <Outlet />
        </main>
      </div>
      <SideNavigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  .shared-layout-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .shared-layout-main {
    width: 100%;
    flex: 1;
  }
`;

export default SharedLayout;
