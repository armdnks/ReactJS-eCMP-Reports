import { useNavigate, Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import useReportContext from "../../context/actions/report-context";
import { snakeToCamel, toCapitalize, dateFormatter } from "../../utils";

import styled from "styled-components";

const ReportItemTableRow = ({ report }) => {
  const navigate = useNavigate();

  const { setUpdateReport, deleteReport } = useReportContext();

  const reportChangeCase = snakeToCamel(report);

  const {
    id,
    brand,
    patientFirstName,
    patientLastName,
    indication,
    therapyStartDate,
    therapyEndDate,
    molecularDiagnosticCommon,
    clinicalResult,
    createdAt,
  } = reportChangeCase;

  function onEditReport() {
    setUpdateReport(id);
    navigate(`/report/edit/${id}`);
  }

  function onDeleteReport() {
    if (window.confirm("are you sure?")) {
      deleteReport(id);
    }
  }

  return (
    <Wrapper>
      <td>{dateFormatter(createdAt)}</td>
      <td>{brand}</td>
      <td>{patientFirstName + " " + patientLastName}</td>
      <td>{dateFormatter(therapyStartDate)}</td>
      <td>{dateFormatter(therapyEndDate)}</td>
      <td>{toCapitalize(indication)}</td>
      <td>{molecularDiagnosticCommon.toUpperCase()}</td>
      <td>{clinicalResult.toUpperCase()}</td>
      <td className="report-item-tr-actions">
        <Link to={`/report/${id}`} className="report-item-tr-action-btn preview-btn">
          <FaEye />
        </Link>
        <button onClick={onEditReport} className="report-item-tr-action-btn edit-btn">
          <FaEdit />
        </button>
        <button onClick={onDeleteReport} className="report-item-tr-action-btn delete-btn">
          <FaTrash />
        </button>
      </td>
    </Wrapper>
  );
};

const Wrapper = styled.tr`
  padding: 1rem 0;
  background: #fff;
  /* box-shadow: 0 0.15rem 0.5rem rgba(0, 0, 0, 0.5); */
  /* margin-bottom: 1rem; */
  /* border-radius: 0.5rem; */
  border-bottom: 1px solid #ddd;

  &:nth-child(even) {
    background: #f6f6f6;
  }

  .report-item-tr-actions {
    display: flex;
    gap: 1rem;
  }

  .report-item-tr-action-btn {
    /* padding: 0.7rem 1rem; */
    background: #ccc;
    border-radius: 0.25rem;
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ReportItemTableRow;
