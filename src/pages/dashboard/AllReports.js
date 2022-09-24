import { useEffect } from "react";

import { ReportItem } from "../../components/report";

import useReportContext from "../../context/report-context";
import styled from "styled-components";

const AllReports = () => {
  const { reportState: reports, getAllReports } = useReportContext();

  useEffect(() => {
    getAllReports();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="all-reports-container">
        <header className="all-reports-header">
          <h1 className="all-reports-header-title">all reports</h1>
        </header>

        <div className="all-reports-list">
          {reports.map((report) => {
            return <ReportItem key={report.id} report={report} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .all-reports-container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }

  .all-reports-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export default AllReports;
