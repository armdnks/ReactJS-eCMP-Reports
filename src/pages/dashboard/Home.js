import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="home-page-container">
        <h1>Home</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .home-page-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 1.5rem;
  }
`;

export default Home;
