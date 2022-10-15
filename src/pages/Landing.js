import { Link } from "react-router-dom";
import styled from "styled-components";
import { Login } from "../components/landing";

const Landing = () => {
  return (
    <Wrapper>
      <div className="landing-page-container">
        <Login />
        {/* <Link to="/register" className="btn">
          login
        </Link> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  .landing-page-container {
    width: 100%;
    min-height: 100vh;
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Landing;
