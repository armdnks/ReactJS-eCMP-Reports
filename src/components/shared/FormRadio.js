import styled from "styled-components";

const FormRadio = ({ name, options, onChange, label }) => {
  let radio;
  return (
    <FormRadioWrapper>
      <label htmlFor={name} className="form-input-label">
        {label || name}
      </label>
      <div className="form-input-radio">
        {options.map((option, index) => {
          const id = name + "_" + option;
          return (
            <div key={index} className="form-input-radio-container">
              <input
                type="radio"
                id={id}
                name={name}
                value={option}
                checked={radio}
                onChange={onChange}
                className="form-input-radio-field"
              />
              <label htmlFor={id} className="form-input-radio-label">
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </FormRadioWrapper>
  );
};

FormRadio.defaultProps = {
  type: "text",
  name: "name_title",
};

const FormRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .form-input-label {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-primary-main);
    font-size: 1rem;
  }

  .form-input-radio {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .form-input-radio-field {
    margin-right: 0.5rem;
  }

  .form-input-radio-label {
    text-transform: uppercase;
  }
`;

export default FormRadio;
