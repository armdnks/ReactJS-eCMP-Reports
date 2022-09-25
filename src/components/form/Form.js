import { useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { Button, FormSelect } from "../shared";
import FormPatient from "./FormPatient";
import FormDoctor from "./FormDoctor";
import useReportContext from "../../context/report-context";
import styled from "styled-components";

const Form = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    reportData,
    reportState,
    isEditReport,
    onChangeHandler,
    getReport,
    createReport,
    updateReport,
  } = useReportContext();

  function onSubmitHandler(e) {
    e.preventDefault();

    if (isEditReport) {
      updateReport(id, reportData);
      navigate(`/report`);
      return;
    }

    createReport(reportData);
    navigate(`/report`);
  }

  useEffect(() => {
    if (id) {
      getReport(id);
      Object.assign(reportData, reportState);
    }

    // eslint-disable-next-line
  }, [location]);

  return (
    <Wrapper>
      <div className="form-main-container">
        {location.pathname !== "/" && (
          <div className="form-main-actions">
            <Link to="/all-reports" className="form-main-actions-btn">
              back
            </Link>
          </div>
        )}

        <form onSubmit={onSubmitHandler} className="form-main">
          <section className="brand-section">
            <FormSelect
              name="brand"
              options={["medical", "pharma", "tools"]}
              value={reportData.brand || ""}
              onChange={(e) => onChangeHandler(e)}
            />
          </section>

          <FormPatient />

          <FormDoctor />

          <Button
            type="submit"
            title="submit report"
            className="form-main-submit-btn btn-block"
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-main-actions {
    width: 100%;
    max-width: 720px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .form-main-actions-btn {
    padding: 0.5rem 1rem;
    background: var(--color-gray-light);
    color: var(--color-white);
    border-radius: 0.25rem;
  }

  .form-main-submit-btn {
    margin-top: 2rem;
  }
`;

export default Form;
