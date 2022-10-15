import styled from "styled-components";

const FormCheckbox = ({
  label,
  name,
  checked,
  valueInput,
  onChangeInput,
  onChangeCheckBox,
  disabled,
}) => {
  return (
    <FormCheckboxWrapper>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChangeCheckBox}
        className="form-checkbox-check"
      />

      <label htmlFor={name} className="form-checkbox-label">
        {label}
      </label>

      <input
        type="text"
        name={name + "_desc"}
        value={valueInput}
        onChange={onChangeInput}
        disabled={disabled}
        placeholder="Please input side effects"
        className="form-checkbox-input"
      />
    </FormCheckboxWrapper>
  );
};

const FormCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .form-checkbox-label {
    text-transform: uppercase;
    font-weight: bold;
    min-width: 6.3rem;
    color: var(--color-primary-main);
    font-size: 1rem;
  }

  .form-checkbox-select {
    text-transform: capitalize;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .form-checkbox-input {
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
  }
`;

export default FormCheckbox;
