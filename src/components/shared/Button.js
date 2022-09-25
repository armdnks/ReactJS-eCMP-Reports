import styled from "styled-components";

const Button = ({ type, title, onClick, className, disabled }) => {
  return (
    <ButtonStyle type={type} onClick={onClick} className={className} disabled={disabled}>
      {title}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  type: "button",
  title: "Title",
  className: "",
  disabled: false,
};

const ButtonStyle = styled.button`
  & {
    cursor: pointer;
    border: none;
    background: var(--color-primary-main);
    color: var(--color-white);
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: bold;
  }

  &:hover {
    background: var(--color-primary-light);
    color: var(--color-primary-main);
  }

  &:active {
    background: var(--color-primary-main);
    color: var(--color-white);
  }
`;

export default Button;
