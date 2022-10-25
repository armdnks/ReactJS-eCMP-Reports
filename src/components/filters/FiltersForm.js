import styled from "styled-components";
import useFilterContext from "../../context/actions/filter-context";
import useReportContext from "../../context/actions/report-context";

import FiltersInputText from "./FiltersInputText";
import FiltersSelect from "./FiltersSelect";

const FiltersForm = () => {
  const { brand_options, molecular_diagnostic_common_options, clinical_result_options } = useReportContext();
  const { filters, onChangeFilters } = useFilterContext();

  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <h1 className="filters-form-title">search</h1>
      <form onSubmit={onSubmitHandler} className="filters-form-container">
        <FiltersInputText
          name="text"
          value={filters.text}
          onChange={(e) => onChangeFilters(e)}
          placeholder="Search Report"
        />

        <FiltersSelect
          name="brand"
          options={["all", ...brand_options]}
          value={filters.brand}
          onChange={(e) => onChangeFilters(e)}
        />

        <FiltersSelect
          name="molecular_diagnostic"
          options={["all", ...molecular_diagnostic_common_options]}
          value={filters.molecular_diagnostic}
          onChange={(e) => onChangeFilters(e)}
        />

        <FiltersSelect
          name="clinical_result"
          options={["all", ...clinical_result_options]}
          value={filters.clinical_result}
          onChange={(e) => onChangeFilters(e)}
        />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 2.5rem;
  left: 0;
  padding: 1rem;
  /* background: var(--color-gray-light); */
  /* border-radius: 0.25rem; */
  /* border-right: 1px solid var(--color-gray-light); */

  .filters-form-title {
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: var(--color-gray-main);
    font-weight: 500;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 1rem;
  }

  .filters-form-container {
    display: flex;
  }

  .all-reports-filter-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-gray-light);
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
  }
`;

export default FiltersForm;
