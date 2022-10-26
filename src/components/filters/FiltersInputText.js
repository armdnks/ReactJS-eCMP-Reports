import styled from "styled-components";

const FiltersInputText = ({ label, name, type, value, onChange, placeholder, className }) => {
  return (
    <Wrapper className={className}>
      {/* <label htmlFor={name} className="filters-input-text-label">
        {label || name}
      </label> */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="filters-input-text-field"
      />
    </Wrapper>
  );
};

FiltersInputText.defaultProps = {
  type: "text",
  name: "label name",
  value: "",
  placeholder: "Please input value",
};

const Wrapper = styled.div`
  width: 100%;

  .filters-input-text-field {
    width: 100%;
    border: none;
    background: #f3f3f3;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }
`;

export default FiltersInputText;
