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

        <header className="form-main-header">
          <h1 className="form-main-header-title">eCMP Report</h1>
          <p className="form-main-header-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illum
            quisquam! Saepe eum minima quibusdam dicta distinctio voluptas exercitationem?
            Eos.
          </p>
        </header>

        <form onSubmit={onSubmitHandler} className="form-main">
          <section className="brand-section">
            <FormSelect
              name="brand"
              options={["medical", "pharma", "tools"]}
              value={reportData.brand || ""}
              onChange={(e) => onChangeHandler(e)}
            />
          </section>

          <h1 className="form-main-title">patient information</h1>
          <FormPatient />

          <h1 className="form-main-title">doctor information</h1>
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

  .form-main-header {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-main-header-title {
    color: var(--color-primary-main);
  }

  .form-main-header-desc {
    font-size: 1rem;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 1rem;
  }

  .form-main-title {
    margin: 1.5rem 0 1.25rem;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 500;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 1rem;
  }

  .form-main-submit-btn {
    margin-top: 2rem;
  }
`;

export default Form;
