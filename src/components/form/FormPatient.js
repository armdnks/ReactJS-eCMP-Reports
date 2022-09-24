import { FormInput, FormRadio } from "../shared";
import FormSideEffects from "./FormSideEffects";
import useReportContext from "../../context/report-context";
import styled from "styled-components";

const FormPatient = () => {
  const { reportData, changeHandler } = useReportContext();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    changeHandler({ name, value });
  }

  return (
    <Wrapper>
      <h1 className="form-section-title col-1-span-2">patient information</h1>

      {/* MARK: PATIENT INFORMATION */}
      <FormInput
        type="text"
        name="patient_first_name"
        value={reportData.patient_first_name || ""}
        onChange={onChangeHandler}
        label="patient first name"
        placeholder="Please input patient first name"
      />

      <FormInput
        type="text"
        name="patient_last_name"
        value={reportData.patient_last_name || ""}
        onChange={onChangeHandler}
        label="patient last name"
        placeholder="Please input patient last name"
      />

      <FormRadio name="patient_gender" options={["male", "female"]} onChange={onChangeHandler} label="patient gender" />

      <FormInput
        type="number"
        name="patient_age"
        value={reportData.patient_age || ""}
        onChange={onChangeHandler}
        label="patient age"
        placeholder="Please input patient age"
      />

      {/* MARK: THERAPY DATE */}
      <FormInput
        type="date"
        name="therapy_start_date"
        value={reportData.therapy_start_date || ""}
        onChange={onChangeHandler}
        label="therapy start date"
      />

      <FormInput
        type="date"
        name="therapy_end_date"
        value={reportData.therapy_end_date || ""}
        onChange={onChangeHandler}
        label="therapy end date"
      />

      {/* MARK: INDICATION */}
      <div className="form-control-column">
        <FormRadio
          name="indication_common"
          options={["crc", "lung", "other"]}
          onChange={onChangeHandler}
          label="indication"
        />

        <input
          type="text"
          name="indication_other"
          value={reportData.indication_other || ""}
          onChange={onChangeHandler}
          disabled={reportData.indication_common !== "other"}
          placeholder="Other indication"
          className="form-sub-input"
        />
      </div>

      <FormInput
        type="number"
        name="total_dosing_per_cycle"
        value={reportData.total_dosing_per_cycle || ""}
        onChange={onChangeHandler}
        label="total dosing"
        placeholder="Please input total dosing"
      />

      {/* MARK: CLINICAL RESULT */}
      <FormRadio
        name="clinical_result"
        options={["cr", "cp", "ps"]}
        onChange={onChangeHandler}
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
`;

export default FormPatient;
