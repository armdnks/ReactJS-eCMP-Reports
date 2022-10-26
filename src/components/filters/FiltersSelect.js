import styled from "styled-components";

const FiltersSelect = ({ label, name, value, onChange, options, className }) => {
  return (
    <Wrapper className={className}>
      <label htmlFor={name} className="filters-select-label">
        {label || name}
      </label>

      <select name={name} id={name} value={value} onChange={onChange} className="filters-select-field">
        {options.map((optionValue, index) => {
          return (
            <option key={index} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .filters-select-label {
    width: 100%;
    text-transform: capitalize;
    color: var(--color-primary-main);
  }

  .filters-select-field {
    cursor: pointer;
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 0.25rem;
    background: #f3f3f3;
    border: none;
  }
`;

export default FiltersSelect;
