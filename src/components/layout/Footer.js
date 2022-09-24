import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="main-footer-container">
        <p className="main-footer-copyright">eCMP Reports &copy; {new Date().getFullYear()}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 50px;
  background: var(--color-gray-main);

  .main-footer-container {
    width: 100%;
    height: 100%;

    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;
  }

  .main-footer-copyright {
    text-align: center;
    color: var(--color-white);
  }
`;

export default Footer;
