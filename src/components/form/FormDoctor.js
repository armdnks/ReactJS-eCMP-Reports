import { FormInput } from "../shared";
import useReportContext from "../../context/report-context";

import styled from "styled-components";

const FormDoctor = () => {
  const { reportData, onChangeHandler } = useReportContext();

  return (
    <Wrapper>
      {/* MARK: DOCTOR INFORMATION */}
      <FormInput
        type="text"
        name="md_name"
        value={reportData.md_name || ""}
        onChange={(e) => onChangeHandler(e)}
        label="md name"
        placeholder="Please input doctor's name"
      />

      <FormInput
        type="text"
        name="md_clinic"
        value={reportData.md_clinic || ""}
        onChange={(e) => onChangeHandler(e)}
        label="md clinic"
        placeholder="Please input doctor's workplace"
      />

      <FormInput
        type="text"
        name="md_phone"
        value={reportData.md_phone || ""}
        onChange={(e) => onChangeHandler(e)}
        label="md phone"
        placeholder="Please input doctor's phone number"
      />

      <FormInput
        type="email"
        name="md_email"
        value={reportData.md_email || ""}
        onChange={(e) => onChangeHandler(e)}
        label="md email"
        placeholder="Please input doctor's email"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default FormDoctor;
