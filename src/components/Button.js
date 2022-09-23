import styled from "styled-components";

const Button = ({ type, title, onClick, className }) => {
  return (
    <ButtonStyle type={type} onClick={onClick} className={className}>
      {title}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  type: "button",
  title: "Title",
  className: "",
};

const ButtonStyle = styled.button`
  & {
    cursor: pointer;
    border: none;
    background: var(--color-primary-500);
    color: var(--color-white);
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: bold;
  }

  &:hover {
    background: var(--color-primary-200);
    color: var(--color-primary-600);
  }

  &:active {
    background: var(--color-primary-500);
    color: var(--color-white);
  }
`;

export default Button;
