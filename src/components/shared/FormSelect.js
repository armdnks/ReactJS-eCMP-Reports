import styled from "styled-components";

const FormSelect = ({ type, name, value, onChange, label, options }) => {
  return (
    <FormSelectWrapper>
      <label htmlFor={name} className="form-select-label">
        {label || name}
      </label>
      <select
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-select-field"
      >
        <option value="" disabled>
          choose
        </option>
        {options.map((optionValue, index) => {
          return (
            <option key={index} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </FormSelectWrapper>
  );
};

FormSelect.defaultProps = {
  type: "text",
  options: ["option"],
  value: "",
};

const FormSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .form-select-label {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-primary-main);
    font-size: 1rem;
  }

  .form-select-field {
    padding: 1rem;
    border: 1px solid var(--color-gray-light);
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
  }
`;

export default FormSelect;
