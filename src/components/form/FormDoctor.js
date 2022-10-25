import { FormInput } from "../shared";
import useReportContext from "../../context/actions/report-context";

import styled from "styled-components";

const FormDoctor = () => {
  const { report, changeHandler } = useReportContext();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    changeHandler({ name, value });
  }

  return (
    <Wrapper>
      {/* MARK: DOCTOR INFORMATION */}
      <FormInput
        type="text"
        name="md_first_name"
        value={report.md_first_name || ""}
        onChange={onChangeHandler}
        label="md first name"
        placeholder="Please input doctor's first name"
      />

      <FormInput
        type="text"
        name="md_last_name"
        value={report.md_last_name || ""}
        onChange={onChangeHandler}
        label="md last name"
        placeholder="Please input doctor's last name"
      />

      <FormInput
        type="text"
        name="md_clinic"
        value={report.md_clinic || ""}
        onChange={onChangeHandler}
        label="md clinic"
        placeholder="Please input doctor's workplace"
      />

      <FormInput
        type="text"
        name="md_city"
        value={report.md_city || ""}
        onChange={onChangeHandler}
        label="md city"
        placeholder="Please input doctor's workplace"
      />

      <FormInput
        type="text"
        name="md_phone"
        value={report.md_phone || ""}
        onChange={onChangeHandler}
        label="md phone"
        placeholder="Please input doctor's phone number"
      />

      <FormInput
        type="email"
        name="md_email"
        value={report.md_email || ""}
        onChange={onChangeHandler}
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
  gap: 1.75rem;
`;

export default FormDoctor;
