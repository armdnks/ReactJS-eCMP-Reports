import { FormInput } from "../shared";
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
      <FormInput name="title" value={reportData.title} onChange={onChangeHandler} />
      <FormInput name="body" value={reportData.body} onChange={onChangeHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default FormPatient;
