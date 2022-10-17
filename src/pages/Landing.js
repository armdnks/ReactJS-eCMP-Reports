import styled from "styled-components";
import { LoginForm } from "../components/landing";

const Landing = () => {
  return (
    <Wrapper>
      <div className="landing-page-container">
        <div className="landing-page-blank-space"></div>
        <LoginForm />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  .landing-page-container {
    width: 100%;
    min-height: 100vh;
    /* max-width: 1280px;
    margin: 0 auto; */

    display: grid;
    grid-template-columns: 4fr 3fr;
  }

  .landing-page-blank-space {
    width: 100%;
    min-height: 100vh;
  }
`;

export default Landing;
