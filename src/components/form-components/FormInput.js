import styled from "styled-components";

const FormInput = ({
  type,
  name,
  value,
  onChange,
  label,
  placeholder,
  className,
}) => {
  return (
    <FormInputWrapper className={className}>
      {name !== "" && (
        <label htmlFor={name} className="form-input-label">
          {label || name}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input-field"
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
};

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .form-input-label {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-primary-500);
    font-size: 1rem;
  }

  .form-input-field {
    padding: 1rem;
    border: 1px solid var(--color-gray-300);
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-700);
  }

  .form-input-field::placeholder {
    color: var(--color-gray-300);
  }

  .form-input-field[type="date"] {
    text-transform: uppercase;
  }
`;

export default FormInput;
