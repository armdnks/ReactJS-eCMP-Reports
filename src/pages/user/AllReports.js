import { useEffect } from "react";

import { ReportItem } from "../../components/report";
import { PageTitle } from "../../components/shared";

import useReportContext from "../../context/report-context";
import styled from "styled-components";

const AllReports = () => {
  let {
    reportsState: reports,
    getAllReports,
    searchReport,
    setSearchReport,
  } = useReportContext();

  useEffect(() => {
    getAllReports({ searchReport });
    // eslint-disable-next-line
  }, [searchReport]);

  return (
    <Wrapper>
      <div className="all-reports-container">
        <div className="all-reports-filter">
          <div className="all-reports-filter-content">
            <h1 className="all-reports-filter-title">search</h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="all-reports-filter-form"
            >
              <input
                type="text"
                name="search_report"
                value={searchReport}
                onChange={(e) => setSearchReport(e.target.value)}
                className="all-reports-filter-input"
              />
            </form>
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

  .all-reports-filter-title {
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: var(--color-gray-main);
    font-weight: 500;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 1rem;
  }

  .all-reports-filter-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-gray-light);
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
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

  @media (max-width: 720px) {
    .all-reports-container {
      grid-template-columns: 1fr;
    }

    .all-reports-filter-content {
      border-right: none;
      border-bottom: 1px solid var(--color-gray-light);
    }
  }
`;

export default AllReports;
