import ReportItemTr from "./ReportItemTr";
import useFilterContext from "../../context/actions/filter-context";
import styled from "styled-components";

const ReportTable = () => {
  const { filters, filtered_reports } = useFilterContext();

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>created at</th>
            <th>brand</th>
            <th>patient name</th>
            <th>theraphy start date</th>
            <th>theraphy end date</th>
            <th>indication</th>
            <th>molecular diagnostic</th>
            <th>clinical result</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered_reports.map((report) => {
            return <ReportItemTr key={report.id} report={report} />;
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  overflow: auto;

  table {
    width: 1920px;
  }

  thead {
    padding: 1rem 0;
    display: block;
    margin-bottom: 1rem;
    background: var(--color-primary-main);
    color: #fff;
    border-radius: 0.25rem;
  }

  tr {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  th,
  td {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ReportTable;
