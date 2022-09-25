import { FormInput, FormRadio } from "../shared";
import FormSideEffects from "./FormSideEffects";
import useReportContext from "../../context/report-context";
import styled from "styled-components";

const FormPatient = () => {
  const { reportData, onChangeHandler } = useReportContext();

  return (
    <Wrapper>
      {/* MARK: PATIENT INFORMATION */}
      <FormInput
        type="text"
        name="patient_first_name"
        value={reportData.patient_first_name || ""}
        onChange={(e) => onChangeHandler(e)}
        label="patient first name"
        placeholder="Please input patient first name"
      />

      <FormInput
        type="text"
        name="patient_last_name"
        value={reportData.patient_last_name || ""}
        onChange={(e) => onChangeHandler(e)}
        label="patient last name"
        placeholder="Please input patient last name"
      />

      <FormRadio
        name="patient_gender"
        options={["male", "female"]}
        onChange={(e) => onChangeHandler(e)}
        label="patient gender"
      />

      <FormInput
        type="number"
        name="patient_age"
        value={reportData.patient_age || ""}
        onChange={(e) => onChangeHandler(e)}
        label="patient age"
        placeholder="Please input patient age"
      />

      {/* MARK: THERAPY DATE */}
      <FormInput
        type="date"
        name="therapy_start_date"
        value={reportData.therapy_start_date || ""}
        onChange={(e) => onChangeHandler(e)}
        label="therapy start date"
      />

      <FormInput
        type="date"
        name="therapy_end_date"
        value={reportData.therapy_end_date || ""}
        onChange={(e) => onChangeHandler(e)}
        label="therapy end date"
      />

      {/* MARK: INDICATION */}
      <div className="form-control-column">
        <FormRadio
          name="indication_common"
          options={["crc", "lung", "other"]}
          onChange={(e) => onChangeHandler(e)}
          label="indication"
        />

        <input
          type="text"
          name="indication_other"
          value={reportData.indication_other || ""}
          onChange={(e) => onChangeHandler(e)}
          disabled={reportData.indication_common !== "other"}
          placeholder="Other indication"
          className="form-patient-input"
        />
      </div>

      <FormInput
        type="number"
        name="total_dosing_per_cycle"
        value={reportData.total_dosing_per_cycle || ""}
        onChange={(e) => onChangeHandler(e)}
        label="total dosing"
        placeholder="Please input total dosing"
      />

      {/* MARK: CLINICAL RESULT */}
      <FormRadio
        name="clinical_result"
        options={["cr", "cp", "ps"]}
        onChange={(e) => onChangeHandler(e)}
        label="clinical result"
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
  gap: 1rem;

  .form-patient-input {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--color-gray-light);
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--color-gray-dark);
    margin-top: 0.5rem;
  }
`;

export default FormPatient;
