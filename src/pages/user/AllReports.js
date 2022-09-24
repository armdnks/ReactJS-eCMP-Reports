import { useEffect } from "react";

import { ReportItem } from "../../components/report";
import { PageTitle } from "../../components/shared";

import useReportContext from "../../context/report-context";
import styled from "styled-components";

const AllReports = () => {
  const { reportsState: reports, getAllReports } = useReportContext();

  useEffect(() => {
    getAllReports();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="all-reports-container">
        <div className="all-reports-filter">
          <div className="all-reports-filter-content">
            <h1>filter</h1>
          </div>
        </div>

        <main className="all-reports-main">
          <PageTitle title="all reports" />

          <div className="all-reports-list">
            {reports.map((report) => {
              return <ReportItem key={report.id} report={report} />;
            })}
          </div>
        </main>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .all-reports-container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 3.5rem 1.5rem 5rem;

    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }

  .all-reports-filter {
    width: 100%;
    height: 100%;
  }

  .all-reports-filter-content {
    position: sticky;
    top: 2.5rem;
    left: 0;
    padding: 1rem;
    /* background: var(--color-gray-light); */
    /* border-radius: 0.25rem; */
    border-right: 1px solid var(--color-gray-light);
  }

  .all-reports-main {
    width: 100%;
  }

  .all-reports-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export default AllReports;
