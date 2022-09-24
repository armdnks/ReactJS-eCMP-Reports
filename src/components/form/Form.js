import { Button, FormSelect } from "../shared";
import FormPatient from "./FormPatient";
import FormDoctor from "./FormDoctor";

import useReportContext from "../../context/report-context";

import styled from "styled-components";

const Form = () => {
  const { reportData, changeHandler, createReport } = useReportContext();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    changeHandler({ name, value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    // console.log(reportData);
    createReport(reportData);
  }

  return (
    <Wrapper>
      <div className="form-main-container">
        <form onSubmit={onSubmitHandler} className="form-main">
          <section className="brand-section">
            <FormSelect
              name="brand"
              options={["medical", "pharma", "tools"]}
              value={reportData.brand}
              onChange={onChangeHandler}
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
  .form-main-submit-btn {
    margin-top: 2rem;
  }
`;

export default Form;
