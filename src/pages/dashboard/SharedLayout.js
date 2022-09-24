import { Outlet } from "react-router-dom";

import { Footer } from "../../components/layout";
import { Navigation } from "../../components/navigation";

import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Navigation />
      <main className="shared-layout-main">
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .shared-layout-main {
    width: 100%;
    flex: 1;
  }
`;

export default SharedLayout;
