import { FormInput, FormRadio } from "../shared";
import FormSideEffects from "./FormSideEffects";
import useReportContext from "../../context/actions/report-context";
import styled from "styled-components";

const FormPatient = () => {
  let { report, changeHandler } = useReportContext();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    changeHandler({ name, value });
  }

  return (
    <Wrapper>
      {/* MARK: PATIENT INFORMATION */}
      <FormInput
        type="text"
        name="patient_first_name"
        value={report.patient_first_name || ""}
        onChange={onChangeHandler}
        label="patient first name"
        placeholder="Please input patient first name"
      />

      <FormInput
        type="text"
        name="patient_last_name"
        value={report.patient_last_name || ""}
        onChange={onChangeHandler}
        label="patient last name"
        placeholder="Please input patient last name"
      />

      <FormRadio
        name="patient_gender"
        options={["male", "female"]}
        onChange={onChangeHandler}
        label="patient gender"
      />

      <FormInput
        type="number"
        name="patient_age"
        value={report.patient_age || ""}
        onChange={onChangeHandler}
        label="patient age"
        placeholder="Please input patient age"
      />

      {/* MARK: THERAPY DATE */}
      <FormInput
        type="date"
        name="therapy_start_date"
        value={report.therapy_start_date || ""}
        onChange={onChangeHandler}
        label="therapy start date"
      />

      <FormInput
        type="date"
        name="therapy_end_date"
        value={report.therapy_end_date || ""}
        onChange={onChangeHandler}
        label="therapy end date"
      />

      {/* MARK: INDICATION */}
      <div className="form-control-column">
        <FormRadio
          name="indication_common"
          options={["onco panel", "onco lung", "onco crc", "brca 1/2", "pd-l1", "other"]}
          onChange={onChangeHandler}
          label="indication"
        />

        <input
          type="text"
          name="indication_other"
          value={report.indication_other || ""}
          onChange={onChangeHandler}
          disabled={report.indication_common !== "other"}
          placeholder="Other indication"
          className="form-patient-input"
        />
      </div>

      <FormInput
        type="number"
        name="total_dosing_per_cycle"
        value={report.total_dosing_per_cycle || ""}
        onChange={onChangeHandler}
        label="total dosing"
        placeholder="Please input total dosing"
      />

      {/* MARK: CLINICAL RESULT */}
      <FormRadio
        name="clinical_result"
        options={["cr", "pr", "sd", "pd"]}
        onChange={onChangeHandler}
        label="clinical result"
      />

      {/* MARK: SIDE EFFECTS */}
      {/* <FormSideEffects /> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .form-patient-input {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--color-gray-light);
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
    margin-top: 1rem;
  }
`;

export default FormPatient;
