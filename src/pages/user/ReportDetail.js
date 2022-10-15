import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ReportDetailRow } from "../../components/report";

import useReportContext from "../../context/actions/report-context";
import snakeToCamel from "../../utils/snakeToCamel";
import toCapitalize from "../../utils/toCapitalize";

import styled from "styled-components";

const ReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { report, report_id, getReport, setUpdateReport, deleteReport } = useReportContext();

  const reportChangeCase = snakeToCamel(report);

  const {
    brand,
    patientFirstName,
    patientLastName,
    patientGender,
    patientAge,
    therapyStartDate,
    therapyEndDate,
    indicationCommon,
    indicationOther,
    totalDosingPerCycle,
    clinicalResult,
    sEffectsMild,
    sEffectsMildDesc,
    sEffectsModerate,
    sEffectsModerateDesc,
    sEffectsSevere,
    sEffectsSevereDesc,
    mdName,
    mdClinic,
    mdEmail,
    mdPhone,
  } = reportChangeCase;

  useEffect(() => {
    if (id) getReport(id);

    // if (Object.keys(report.length === 0)) navigate("/");
    // eslint-disable-next-line
  }, []);

  function onEditReport() {
    setUpdateReport(id);
    navigate(`/report/edit/${id ? id : report_id}`);
  }

  function onDeleteReport() {
    if (window.confirm("are you sure?")) deleteReport(id);
  }

  return (
    <Wrapper>
      <div className="report-detail-actions">
        <Link to="/all-reports" className="report-detail-actions-btn">
          back
        </Link>

        <div className="report-detail-actions-btn-container">
          <button className="report-detail-actions-btn">print</button>
          <button className="report-detail-actions-btn">download</button>
          <button onClick={onEditReport} className="report-detail-actions-btn">
            edit
          </button>
          <button onClick={onDeleteReport} className="report-detail-actions-btn">
            delete
          </button>
        </div>
      </div>

      <div className="report-detail-container">
        <header className="report-detail-header"></header>

        <main className="report-detail-main">
          <div className="report-detail-section">
            <ReportDetailRow title="brand" body={brand} />
          </div>

          <div className="report-detail-section">
            <h1 className="report-detail-section-title">patient information</h1>

            <ReportDetailRow title="name" body={patientFirstName + " " + patientLastName} />

            <ReportDetailRow title="gender" body={patientGender} />
            <ReportDetailRow title="age" body={patientAge} />

            <ReportDetailRow title="theraphy start date" body={therapyStartDate} />
            <ReportDetailRow title="theraphy end date" body={therapyEndDate} />

            <ReportDetailRow title="indication" body={indicationCommon} />
            <ReportDetailRow title="indication other" body={indicationOther || "-"} />

            <ReportDetailRow title="total dosing per cycle" body={totalDosingPerCycle + " mg"} />
            <ReportDetailRow title="clinical result" body={clinicalResult} />

            <div className="report-detail-effects">
              <h4 className="report-detail-effects-title">side effects</h4>

              <ReportDetailRow title="mild" body={sEffectsMild ? toCapitalize(sEffectsMild) : "-"} />
              <ReportDetailRow title="description" body={sEffectsMildDesc || "-"} />

              <ReportDetailRow title="moderate" body={sEffectsModerate ? toCapitalize(sEffectsModerate) : "-"} />
              <ReportDetailRow title="description" body={sEffectsModerateDesc || "-"} />

              <ReportDetailRow title="severe" body={sEffectsSevere ? toCapitalize(sEffectsSevere) : "-"} />
              <ReportDetailRow title="description" body={sEffectsSevereDesc || "-"} />
            </div>
          </div>

          <div className="report-detail-section">
            <h1 className="report-detail-section-title">medical doctor</h1>
            <ReportDetailRow title="name" body={mdName || "-"} />
            <ReportDetailRow title="clinic" body={mdClinic || "-"} />
            <ReportDetailRow title="email" body={mdEmail || "-"} />
            <ReportDetailRow title="phone" body={mdPhone || "-"} />
          </div>
        </main>

        <footer className="report-detail-footer"></footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .report-detail-actions {
    width: 100%;
    max-width: 720px;
    margin: 2.5rem auto 2rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 1rem;
  }

  .report-detail-actions-btn {
    padding: 0.5rem 1rem;
    background: var(--color-gray-light);
    color: var(--color-white);
    border-radius: 0.25rem;
  }

  .report-detail-actions-btn-container {
    display: flex;
    gap: 1rem;
  }

  .report-detail-container {
    width: 100%;
    max-width: 720px;
    margin: 1rem auto 3rem;

    min-height: 90vh;
    border: 1px solid var(--color-gray-light);
    border: 1px solid var(--color-gray-light);
    padding: 4.5rem;
  }

  .report-detail-main {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .report-detail-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .report-detail-section-title {
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0.5rem 0;
    border-bottom: 1px solid var(--color-gray-light);
    padding-bottom: 0.5rem;
  }

  .report-detail-effects {
    margin: 0.75rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .report-detail-effects-title {
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 600;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .report-detail-effects-subtitle {
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 600;
    margin-top: 0.25rem;
  }

  @media (max-width: 600px) {
    .report-detail-container {
      padding: 2.5rem;
    }
  }
`;

export default ReportDetail;
