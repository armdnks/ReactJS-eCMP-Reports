import styled from "styled-components";

const FiltersSelect = ({ label, name, value, onChange, options }) => {
  return (
    <Wrapper>
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

const Wrapper = styled.div``;

export default FiltersSelect;
