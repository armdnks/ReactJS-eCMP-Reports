import { Form } from "../../components/form";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="home-page-container">
        <Form />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .home-page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
  }
`;

export default Home;
