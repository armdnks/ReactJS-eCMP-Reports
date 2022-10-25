import styled from "styled-components";

const FiltersInputRadio = ({ label, name, options, checked, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className="filters-input-radio-label">
        {label || name}
      </label>
      <div className="filters-input-radio-options">
        {options.map((option, index) => {
          const id = name + "_" + option.replace(/[\s/-]/g, "_").trim();

          return (
            <div key={index} className="filters-input-radio-item">
              <input
                type="radio"
                id={id}
                name={name}
                value={option}
                checked={checked === option}
                onChange={onChange}
                className="form-input-radio-item-field"
              />
              <label htmlFor={id} className="form-input-radio-item-label">
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .filters-input-radio-label {
    font-size: 0.75rem;
    text-transform: capitalize;
    color: #666;
  }

  .filters-input-radio-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .form-input-radio-item-label {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: #666;
  }
`;

export default FiltersInputRadio;
