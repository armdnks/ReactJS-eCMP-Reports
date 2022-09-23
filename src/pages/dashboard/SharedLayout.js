import { Outlet } from "react-router-dom";

import SideNavigation from "../../components/SideNavigation";

import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="shared-layout-main">
        <Outlet />
      </main>
      <SideNavigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  .shared-layout-main {
    width: 100%;
  }
`;

export default SharedLayout;
