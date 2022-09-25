import { Form } from "../../components/form";
import styled from "styled-components";

const AddReport = () => {
  return (
    <Wrapper>
      <div className="add-report-container">
        <Form />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .add-report-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
  }
`;

export default AddReport;
