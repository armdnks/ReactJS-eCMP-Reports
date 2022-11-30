import ReportItemGridCard from "./ReportItemGridCard";
import useFilterContext from "../../context/actions/filter-context";
import styled from "styled-components";

const ReportItemGrid = () => {
  const { filtered_reports } = useFilterContext();

  return (
    <Wrapper>
      {filtered_reports.map((report) => {
        return <ReportItemGridCard key={report.id} report={report} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;

export default ReportItemGrid;
