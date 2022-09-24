import useUIContext from "../context/ui-context";

import styled from "styled-components";

const Alert = ({ type, message }) => {
  const { isShowAlert } = useUIContext();

  return (
    <Wrapper>
      <div className={`alert-container bg-${type} ${isShowAlert ? "alert-active" : null}`}>
        <p className="alert-message">{message || "Alert..."}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 100%;

  .alert-container {
    width: 90%;
    margin: 0 auto;
    background: var(--color-gray-main);
    color: var(--color-white);
    padding: 1.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  .alert-active {
    animation: showAlert 1s cubic-bezier(0.19, 1, 0.22, 1), hideAlert 1s cubic-bezier(0.19, 1, 0.22, 1) 3s;
  }

  @keyframes showAlert {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes hideAlert {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-150%);
    }
  }
`;

export default Alert;
