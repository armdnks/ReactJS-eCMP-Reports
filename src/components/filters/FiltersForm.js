import styled from "styled-components";
import useFilterContext from "../../context/actions/filter-context";
import useReportContext from "../../context/actions/report-context";

import FiltersInputText from "./FiltersInputText";
import FiltersSelect from "./FiltersSelect";

import { Button } from "../shared";

const FiltersForm = () => {
  const { brand_options, molecular_diagnostic_common_options, clinical_result_options } = useReportContext();
  const { filters, onChangeFilters, clearFilters, showFilters } = useFilterContext();

  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <Wrapper className={showFilters ? "show" : null}>
      <h3 className="filters-form-title">filter reports</h3>
      <form onSubmit={onSubmitHandler} className="filters-form-container">
        <FiltersInputText
          name="text"
          value={filters.text}
          onChange={(e) => onChangeFilters(e)}
          placeholder="Search Report"
          className="col-1-span-4"
        />

        <FiltersSelect
          name="brand"
          options={["all", ...brand_options]}
          value={filters.brand}
          onChange={(e) => onChangeFilters(e)}
        />

        <FiltersSelect
          label="molecular diagnostic"
          name="molecular_diagnostic"
          options={["all", ...molecular_diagnostic_common_options]}
          value={filters.molecular_diagnostic}
          onChange={(e) => onChangeFilters(e)}
        />

        <FiltersSelect
          label="clinical result"
          name="clinical_result"
          options={["all", ...clinical_result_options]}
          value={filters.clinical_result}
          onChange={(e) => onChangeFilters(e)}
        />

        <Button type="button" title="clear filters" onClick={clearFilters} />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 2.5rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  /* margin-bottom: 2.5rem; */
  display: none;

  &.show {
    display: block;
  }

  .filters-form-title {
    text-transform: capitalize;
    margin-bottom: 1.75rem;
    color: var(--color-gray-main);
    font-weight: 500;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 1rem;
  }

  .filters-form-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: flex-end;
    gap: 1.25rem;
  }

  .col-1-span-4 {
    grid-column: 1 / span 4;
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
