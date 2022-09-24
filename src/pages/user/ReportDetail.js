import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ReportDetailRow } from "../../components/report";

import useReportContext from "../../context/report-context";
import snakeToCamel from "../../utils/snakeToCamel";
import styled from "styled-components";

const ReportDetail = () => {
  const { id } = useParams();

  const { reportState: report, getReport } = useReportContext();

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
    user,
    userId,
    createdAt,
    updatedAt,
  } = reportChangeCase;

  useEffect(() => {
    getReport(id);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="report-detail-container">
        <ReportDetailRow title="brand" body={brand} />

        <div className="report-detail-row">
          <p className="report-detail-title">patient name</p>
          <p className="report-detail-body">{patientFirstName}</p>
          <p className="report-detail-body">{patientLastName}</p>
        </div>

        <ReportDetailRow title="gender" body={patientGender} />
        <ReportDetailRow title="age" body={patientAge} />
        <ReportDetailRow title="therapy start date" body={therapyStartDate} />
        <ReportDetailRow title="therapy end date" body={therapyEndDate} />
        <ReportDetailRow title="indication common" body={indicationCommon} />
        <ReportDetailRow title="indication other" body={indicationOther || "-"} />
        <ReportDetailRow title="total dosing per cycle" body={totalDosingPerCycle} />
        <ReportDetailRow title="clinical result" body={clinicalResult} />

        <div className="report-detail-grid">
          <ReportDetailRow title="sEffects mild grade" body={sEffectsMildGrade || "-"} />
          <ReportDetailRow title="sEffects mild desc" body={sEffectsMildDesc || "-"} />
          <ReportDetailRow title="sEffects moderate grade" body={sEffectsModerateGrade || "-"} />
          <ReportDetailRow title="sEffects moderate desc" body={sEffectsModerateDesc || "-"} />
          <ReportDetailRow title="sEffects severe grade" body={sEffectsSevereGrade || "-"} />
          <ReportDetailRow title="sEffects severe desc" body={sEffectsSevereDesc || "-"} />
        </div>

        <ReportDetailRow title="md name" body={mdName} />
        <ReportDetailRow title="md clinic" body={mdClinic} />
        <ReportDetailRow title="md email" body={mdEmail} />
        <ReportDetailRow title="md phone" body={mdPhone} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .report-detail-container {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default ReportDetail;
