import { FormCheckbox } from "../shared";
import useReportContext from "../../context/actions/report-context";
import styled from "styled-components";

const FormSideEffects = () => {
  const { report, changeHandler, isSideEffects } = useReportContext();

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
          label="mild"
          name="s_effects_mild"
          checked={report.s_effects_mild === "yes"}
          onChangeCheckBox={() => onClickIsSideEffects("s_effects_mild")}
          valueInput={report.s_effects_mild_desc || ""}
          onChangeInput={(e) => onChangeHandler(e)}
          disabled={report.s_effects_mild !== "yes"}
        />

        <FormCheckbox
          label="moderate"
          name="s_effects_moderate"
          checked={report.s_effects_moderate === "yes"}
          onChangeCheckBox={() => onClickIsSideEffects("s_effects_moderate")}
          valueInput={report.s_effects_moderate_desc || ""}
          onChangeInput={(e) => onChangeHandler(e)}
          disabled={report.s_effects_moderate !== "yes"}
        />

        <FormCheckbox
          label="severe"
          name="s_effects_severe"
          checked={report.s_effects_severe === "yes"}
          onChangeCheckBox={() => onClickIsSideEffects("s_effects_severe")}
          valueInput={report.s_effects_severe_desc || ""}
          onChangeInput={(e) => onChangeHandler(e)}
          disabled={report.s_effects_severe !== "yes"}
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
    gap: 1rem;
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
