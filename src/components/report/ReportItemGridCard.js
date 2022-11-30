import { useNavigate, Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import useReportContext from "../../context/actions/report-context";
import { snakeToCamel, dateFormatter } from "../../utils";

import styled from "styled-components";

const ReportItemGridCard = ({ report }) => {
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
      <div className="card-item">
        <div className="card-item-title">brand</div>
        <div className="card-item-content">{brand}</div>
      </div>

      <div className="card-item">
        <div className="card-item-title">created at</div>
        <div className="card-item-content">{dateFormatter(createdAt)}</div>
      </div>

      <div className="card-item col-1-span-2">
        <div className="card-item-title">patient name</div>
        <div className="card-item-content">{patientFirstName + " " + patientLastName}</div>
      </div>

      <div className="card-item col-1-span-2 grid">
        <div className="card-item-title col-1-span-2">theraphy date</div>
        <div className="card-item-content">
          <span className="card-item-caption">start</span> -- {dateFormatter(therapyStartDate)}
        </div>
        <div className="card-item-content">
          <span className="card-item-caption">end</span> -- {dateFormatter(therapyEndDate)}
        </div>
      </div>

      <div className="card-item">
        <div className="card-item-title">indication</div>
        <div className="card-item-content">{indication}</div>
      </div>

      <div className="card-item">
        <div className="card-item-title">molecular diagnostic</div>
        <div className="card-item-content">{molecularDiagnosticCommon}</div>
      </div>

      <div className="card-item">
        <div className="card-item-title">clinical result</div>
        <div className="card-item-content">{clinicalResult}</div>
      </div>

      <div className="card-item grid">
        <div className="card-item-title col-1-span-2 ">actions</div>
        <div className="card-item-btn-container">
          <Link to={`/report/${id}`} className="card-item-btn preview-btn">
            <FaEye />
          </Link>
          <button onClick={onEditReport} className="card-item-btn edit-btn">
            <FaEdit />
          </button>
          <button onClick={onDeleteReport} className="card-item-btn delete-btn">
            <FaTrash />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 0.5rem;
  padding: 0.25rem 0;
  box-shadow: 0 1rem 2rem -0.5rem rgba(0, 0, 0, 0.2);
  padding: 0.55rem 1.5rem;

  .col-1-span-2 {
    grid-column: 1 / span 2;
  }

  .card-item {
    border-bottom: 1px solid #ddd;
    padding: 0.55rem 0;
  }

  .card-item:nth-last-child(-n + 2) {
    border-bottom: unset;
  }

  .card-item.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .card-item-caption,
  .card-item-title {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--color-primary-main);
  }

  .card-item-caption {
    color: var(--color-gray-main);
  }

  .card-item-content {
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.3rem 0;
  }

  .card-item-btn-container {
    display: flex;
    gap: 1rem;
  }

  .card-item-btn {
    width: 32px;
    height: 32px;
    /* padding: 0.3rem 1rem; */
    background: #ccc;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ReportItemGridCard;
