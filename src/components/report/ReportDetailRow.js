import styled from "styled-components";

const ReportDetailRow = ({ title, body }) => {
  return (
    <Wrapper>
      <p className="report-detail-row-title">{title}</p>
      <p className="report-detail-row-body">{body}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  .report-detail-row-title {
    flex: 1;
    color: var(--color-primary-main);
    text-transform: capitalize;
  }

  .report-detail-row-body {
    flex: 2;
  }
`;

export default ReportDetailRow;
