import { BsFillGridFill, BsList } from "react-icons/bs";
import useFilterContext from "../../context/actions/filter-context";
import useSettingsContext from "../../context/actions/settings-context";

import styled from "styled-components";

const ReportNavigation = () => {
  const { toggleFilters, showFilters } = useFilterContext();
  const { setGridView, setTableView } = useSettingsContext();

  return (
    <Wrapper>
      <div className="report-navigation-toggle">
        <button onClick={toggleFilters} className="btn">
          {showFilters ? "hide" : "show"} filters
        </button>
      </div>

      <div className="report-navigation-buttons">
        <button onClick={setGridView} className="report-navigation-btn">
          <BsFillGridFill />
        </button>
        <button onClick={setTableView} className="report-navigation-btn">
          <BsList />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .report-navigation-buttons {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .report-navigation-btn {
    font-size: 1rem;
    padding: 0.75rem;
    background: #ccc;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ReportNavigation;
