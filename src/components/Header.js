import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div className="main-header-container">
        <div className="main-header-logo">
          <img src="/img/company-logo-white.png" alt="company-logo-white.png" />
        </div>

        <h2 className="main-header-title">eCMP Reports</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 65px;
  background: var(--color-primary-500);

  .main-header-container {
    width: 100%;
    height: 100%;

    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    padding: 0.5rem 1rem;
  }

  .main-header-logo {
    height: 100%;
  }

  .main-header-logo img {
    height: 100%;
    object-fit: contain;
  }

  .main-header-title {
    color: var(--color-white);
  }
`;

export default Header;
