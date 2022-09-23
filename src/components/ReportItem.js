import styled from "styled-components";

const ReportItem = ({ report }) => {
  const { title, body, createdAt } = report;

  // console.log(report);
  return (
    <Wrapper>
      <div className="report-item-container">
        <div className="report-item-content">
          <p>{title}</p>
          <p>{body}</p>
          <p>{new Date(createdAt).toLocaleDateString("en-US")}</p>
        </div>

        <div className="report-item-actions">
          <button>preview</button>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-primary-500);

  .report-item-container {
    width: 100%;
    display: flex;
  }
`;

export default ReportItem;
