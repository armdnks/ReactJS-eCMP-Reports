import { Button } from "../shared";
import FormPatient from "./FormPatient";

import useReportContext from "../../context/report-context";

import styled from "styled-components";

const Form = () => {
  const { reportData, createReport } = useReportContext();

  function onSubmitHandler(e) {
    e.preventDefault();
    // console.log(reportData);
    createReport(reportData);
  }

  return (
    <Wrapper>
      <div className="form-main-container">
        <form onSubmit={onSubmitHandler} className="form-main">
          <FormPatient />

          <Button type="submit" title="submit report" className="form-main-submit-btn btn-block" />
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
