import styled from "styled-components";

const FormInput = ({ type, name, value, onChange, label, placeholder, className, notes, required }) => {
  return (
    <FormInputWrapper className={className}>
      {name !== "" && (
        <label htmlFor={name} className="form-input-label">
          {label || name}
          <span className="form-input-label-required">{required && "*"}</span>
        </label>
      )}

      <p className="form-input-notes">{notes}</p>

      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input-field"
        required={required}
      />
    </FormInputWrapper>
  );
};

FormInput.defaultProps = {
  type: "text",
  name: "label name",
  value: "",
  placeholder: "Please input value",
  className: "",
  notes: "",
  required: false,
};

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .form-input-label {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-primary-main);
    font-size: 1rem;
  }

  .form-input-label-required {
    font-weight: 400;
    color: #f00;
    margin-left: 1px;
  }

  .form-input-notes {
    font-size: 0.8rem;
    color: #aaa;
  }

  .form-input-field {
    padding: 1rem;
    /* border: 1px solid var(--color-gray-light); */
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
    background: #f3f3f3;
  }

  .form-input-field::placeholder {
    color: var(--color-gray-light);
  }

  .form-input-field[type="date"] {
    text-transform: uppercase;
  }
`;

export default FormInput;
