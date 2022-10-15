import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button, FormSelect } from "../shared";
import FormPatient from "./FormPatient";
import FormDoctor from "./FormDoctor";
import useReportContext from "../../context/actions/report-context";
import styled from "styled-components";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    report,
    is_side_effects,
    brand_options,
    is_editing,
    changeHandler,
    createReport,
    updateReport,
  } = useReportContext();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    changeHandler({ name, value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    if (report.indication_common !== "other") {
      report.indication_other = null;
    }

    Object.keys(report).forEach((key) => {
      const sideEffectsKey = ["s_effects_mild", "s_effects_moderate", "s_effects_severe"];
      console.log(report.hasOwnProperty(sideEffectsKey));
    });

    // Object.keys(is_side_effects).forEach((key) => {
    //   if (!is_side_effects[key]) {
    //     report[`s_effects_${key}_grade`] = null;
    //     report[`s_effects_${key}_desc`] = null;
    //   }
    // });

    if (is_editing) {
      updateReport();
      navigate(`/report`);
      return;
    }

    createReport();
    navigate(`/report`);
  }

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
              options={brand_options}
              value={report.brand || ""}
              onChange={onChangeHandler}
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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;
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
    margin: 2rem 0 1.5rem;
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
