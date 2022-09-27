import { FormCheckbox } from "../shared";
import useReportContext from "../../context/actions/report-context";
import styled from "styled-components";

const FormSideEffects = () => {
  const { report, is_side_effects, changeHandler, isSideEffects } = useReportContext();

  function onClickIsSideEffects(key) {
    isSideEffects({ key });
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;
    changeHandler({ name, value });
  }

  return (
    <Wrapper>
      <div className="form-control-column">
        <label htmlFor="s_effects" className="form-effects-label">
          side effects
        </label>

        <FormCheckbox
          name="s_effects_mild"
          valueSelect={report.s_effects_mild_grade}
          valueInput={report.s_effects_mild_desc || ""}
          onChange={(e) => onChangeHandler(e)}
          label="mild"
          onClick={() => onClickIsSideEffects("mild")}
          disabled={!is_side_effects.mild}
        />

        <FormCheckbox
          name="s_effects_moderate"
          valueSelect={report.s_effects_moderate_grade}
          valueInput={report.s_effects_moderate_desc || ""}
          onChange={(e) => onChangeHandler(e)}
          label="moderate"
          onClick={() => onClickIsSideEffects("moderate")}
          disabled={!is_side_effects.moderate}
        />

        <FormCheckbox
          name="s_effects_severe"
          valueSelect={report.s_effects_severe_grade}
          valueInput={report.s_effects_severe_desc || ""}
          onChange={(e) => onChangeHandler(e)}
          label="severe"
          onClick={() => onClickIsSideEffects("severe")}
          disabled={!is_side_effects.severe}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .form-control-column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-effects-label {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-gray-main);
    font-size: 1rem;
    border-left: 0.25rem solid var(--color-gray-light);
    padding-left: 0.5rem;
  }
`;

export default FormSideEffects;
