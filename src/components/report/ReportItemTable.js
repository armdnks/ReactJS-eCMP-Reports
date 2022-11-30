import ReportItemTableRow from "./ReportItemTableRow";
import useFilterContext from "../../context/actions/filter-context";
import styled from "styled-components";

const ReportItemTable = () => {
  const { filtered_reports } = useFilterContext();

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
            return <ReportItemTableRow key={report.id} report={report} />;
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  overflow: auto;
  width: 100%;

  table {
    width: 100%;

    width: 1810px;
    font-size: 1rem;
  }

  thead {
    width: 100%;
    padding: 1rem 0;
    display: block;
    margin-bottom: 1rem;
    background: var(--color-primary-main);
    color: #fff;
    border-radius: 0.25rem;
  }

  tr {
    width: 100%;
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

export default ReportItemTable;
