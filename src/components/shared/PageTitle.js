import styled from "styled-components";

const PageTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1 className="page-title">{title}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-gray-light);
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  .page-title {
    font-size: 3rem;
    text-transform: capitalize;
  }
`;

export default PageTitle;
