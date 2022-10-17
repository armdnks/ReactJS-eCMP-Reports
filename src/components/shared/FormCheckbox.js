import styled from "styled-components";

const FormCheckbox = ({ label, name, checked, valueInput, onChangeInput, onChangeCheckBox, disabled }) => {
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
        placeholder={disabled ? "No side effects" : "Please input side effects"}
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
    width: 100%;
    padding: 1rem;
    /* border: 1px solid var(--color-gray-light); */
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
    background: #f3f3f3;
  }

  .form-checkbox-input:disabled {
    background: #fee3e2;
    color: #ff7770;
  }

  .form-checkbox-input:disabled::placeholder {
    color: #ff7770;
  }
`;

export default FormCheckbox;
