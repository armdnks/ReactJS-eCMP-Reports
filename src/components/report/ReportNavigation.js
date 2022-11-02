import useFilterContext from "../../context/actions/filter-context";

import styled from "styled-components";

const ReportNavigation = () => {
  const { toggleFilters, showFilters } = useFilterContext();

  return (
    <Wrapper>
      <div className="report-navigation">
        <button onClick={toggleFilters}>{showFilters ? "hide" : "show"} filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
`;

export default ReportNavigation;
