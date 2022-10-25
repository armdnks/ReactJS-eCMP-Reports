/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { ReportItem } from "../../components/report";
import { Loader, PageTitle } from "../../components/shared";
import { FiltersForm } from "../../components/filters";
import useReportContext from "../../context/actions/report-context";
import useFilterContext from "../../context/actions/filter-context";
import styled from "styled-components";

const AllReports = () => {
  let { report_loading: loading, reports, getAllReports } = useReportContext();
  const { filters, filtered_reports } = useFilterContext();

  useEffect(() => {
    getAllReports();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="all-reports-container">
        <div className="all-reports-filter">
          <FiltersForm />
        </div>

        <main className="all-reports-main">
          <PageTitle title="all reports" />

          {loading && <Loader />}
          <div className="all-reports-list">
            {filtered_reports.map((report) => {
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

    /* display: grid; */
    /* grid-template-columns: 1fr 3fr; */
    /* gap: 2rem; */
  }

  .all-reports-filter {
    width: 100%;
    height: 100%;
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
