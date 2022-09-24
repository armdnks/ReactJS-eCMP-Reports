import { Link } from "react-router-dom";
import styled from "styled-components";
import snakeToCamel from "../../utils/snakeToCamel";

const ReportItem = ({ report }) => {
  const reportChangeCase = snakeToCamel(report);

  // console.log(reportChangeCase);

  const {
    id,
    patientFirstName,
    patientLastName,
    indicationCommon,
    therapyStartDate,
    therapyEndDate,
    clinicalResult,
    user,
    createdAt,
  } = reportChangeCase;

  return (
    <Wrapper>
      <div className="report-item-container">
        <div className="report-item-content">
          <div className="report-item-row">
            <div className="report-item-row-item">
              <span>name :</span>
              <p>{patientFirstName}</p>
              <p>{patientLastName}</p>
            </div>

            <div className="report-item-row-item">
              <span>indication :</span>
              <p>{indicationCommon}</p>
            </div>
          </div>

          <div className="report-item-row">
            <div className="report-item-row-item">
              <span>therapy date :</span>
              <p>{therapyStartDate}</p> - <p>{therapyEndDate}</p>
            </div>

            <div className="report-item-row-item">
              <span>clinical result :</span>
              <p>{clinicalResult}</p>
            </div>
          </div>

          <div className="report-item-row">
            <div className="report-item-row-item">
              <span>created at :</span>
              <p>{new Date(createdAt).toLocaleDateString("en-US")}</p>
            </div>

            <div className="report-item-row-item">
              <span>created by :</span>
              <p>{user.name}</p>
            </div>
          </div>
        </div>

        <div className="report-item-actions">
          <Link to={`/report/${id}`} className="report-item-actions-btn">
            preview
          </Link>
          <button className="report-item-actions-btn">edit</button>
          <button className="report-item-actions-btn">delete</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .report-item-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .report-item-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .report-item-row {
    width: 100%;
    display: flex;
  }

  .report-item-row-item {
    display: flex;
    flex: 1;
    gap: 0.25rem;
  }

  .report-item-row span {
    margin-right: 0.25rem;
    color: var(--color-primary-main);
    font-weight: 500;
  }

  .report-item-actions {
    width: 100%;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 0.75rem;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .report-item-actions-btn {
    padding: 0.5rem;
    background: var(--color-gray-light);
    color: var(--color-white);
    border-radius: 0.25rem;
  }
`;

export default ReportItem;
