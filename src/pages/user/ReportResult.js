import { Link } from "react-router-dom";

import { ReportDetailRow } from "../../components/report";

import useReportContext from "../../context/report-context";
import snakeToCamel from "../../utils/snakeToCamel";
import styled from "styled-components";

const ReportDetail = () => {
  const { reportState: report } = useReportContext();

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
    sEffectsMildGrade,
    sEffectsMildDesc,
    sEffectsModerateGrade,
    sEffectsModerateDesc,
    sEffectsSevereGrade,
    sEffectsSevereDesc,
    mdName,
    mdClinic,
    mdEmail,
    mdPhone,
  } = reportChangeCase;

  return (
    <Wrapper>
      <div className="report-detail-actions">
        <Link to="/all-reports" className="report-detail-actions-btn">
          back
        </Link>

        <div className="report-detail-actions-btn-container">
          <button className="report-detail-actions-btn">print</button>
          <button className="report-detail-actions-btn">download</button>
          <button className="report-detail-actions-btn">edit</button>
          <button className="report-detail-actions-btn">delete</button>
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

              <h4 className="report-detail-effects-subtitle">mild</h4>
              <ReportDetailRow title="grade" body={sEffectsMildGrade || "-"} />
              <ReportDetailRow title="description" body={sEffectsMildDesc || "-"} />

              <h4 className="report-detail-effects-subtitle">moderate</h4>
              <ReportDetailRow title="grade" body={sEffectsModerateGrade || "-"} />
              <ReportDetailRow title="description" body={sEffectsModerateDesc || "-"} />

              <h4 className="report-detail-effects-subtitle">severe</h4>
              <ReportDetailRow title="grade" body={sEffectsSevereGrade || "-"} />
              <ReportDetailRow title="description" body={sEffectsSevereDesc || "-"} />
            </div>
          </div>

          <div className="report-detail-section">
            <h1 className="report-detail-section-title">medical doctor</h1>
            <ReportDetailRow title="name" body={mdName} />
            <ReportDetailRow title="clinic" body={mdClinic} />
            <ReportDetailRow title="email" body={mdEmail} />
            <ReportDetailRow title="phone" body={mdPhone} />
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