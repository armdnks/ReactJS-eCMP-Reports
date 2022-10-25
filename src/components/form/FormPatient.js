import { FormInput, FormRadio } from "../shared";
import FormSideEffects from "./FormSideEffects";
import useReportContext from "../../context/actions/report-context";
import styled from "styled-components";

const FormPatient = () => {
  let { report, patient_gender_options, molecular_diagnostic_common_options, clinical_result_options, changeHandler } =
    useReportContext();

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
        label="patient gender"
        name="patient_gender"
        options={patient_gender_options}
        checked={report.patient_gender}
        onChange={onChangeHandler}
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
        notes="*Please input patient start therapy date"
      />

      <FormInput
        type="date"
        name="therapy_end_date"
        value={report.therapy_end_date || ""}
        onChange={onChangeHandler}
        label="therapy end date"
        notes="*Please input patient end therapy date"
      />

      <FormInput
        type="text"
        name="indication"
        value={report.indication || ""}
        onChange={onChangeHandler}
        placeholder="Please input indication"
        notes="e.g. Headache, Stomache, Brainache, etc"
      />

      {/* MARK: MOLECULAR DIAGNOSTIC */}
      <div className="form-control-column">
        <FormRadio
          label="molecular diagnostic"
          name="molecular_diagnostic_common"
          options={molecular_diagnostic_common_options}
          checked={report.molecular_diagnostic_common}
          onChange={onChangeHandler}
        />

        <input
          type="text"
          name="molecular_diagnostic_other"
          value={report.molecular_diagnostic_other || ""}
          onChange={onChangeHandler}
          disabled={report.molecular_diagnostic_common !== "other"}
          placeholder={
            report.molecular_diagnostic_common !== "other"
              ? "Other molecular diagnostic field"
              : "Please input other molecular diagnostic"
          }
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
        notes={`Brand : ${report.brand ? report.brand : "Please choose brand"}`}
      />

      {/* MARK: CLINICAL RESULT */}
      <FormRadio
        label="clinical result"
        name="clinical_result"
        options={clinical_result_options}
        checked={report.clinical_result}
        onChange={onChangeHandler}
      />

      {/* MARK: SIDE EFFECTS */}
      <FormSideEffects />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  .form-patient-input {
    width: 100%;
    padding: 1rem;
    /* border: 1px solid var(--color-gray-light); */
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
    background: #f3f3f3;
    margin-top: 1rem;
  }

  .form-patient-input:disabled {
    background: #fee3e2;
    color: #ff7770;
  }

  .form-patient-input:disabled::placeholder {
    color: #ff7770;
  }
`;

export default FormPatient;
