import styled from "styled-components";

const FormCheckbox = ({ name, valueSelect, valueInput, onChange, label, onClick, disabled }) => {
  return (
    <FormCheckboxWrapper>
      <input type="checkbox" name={name} id={name} onClick={onClick} className="form-checkbox-check" />
      <label htmlFor={name} className="form-checkbox-label">
        {label}
      </label>

      <select name={name + "_grade"} value={valueSelect} onChange={onChange} defaultValue="" disabled={disabled} className="form-checkbox-select">
        <option value="" disabled>
          choose
        </option>
        <option value="grade 1">grade 1</option>
        <option value="grade 2">grade 2</option>
        <option value="grade 3">grade 3</option>
      </select>

      <input type="text" name={name + "_desc"} value={valueInput} onChange={onChange} disabled={disabled} placeholder="Please input side effects" className="form-checkbox-input" />
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
  }

  .form-checkbox-select {
    text-transform: capitalize;
    padding: 0.5rem;
  }

  .form-checkbox-input {
    padding: 0.5rem;
    width: 100%;
  }
`;

export default FormCheckbox;
