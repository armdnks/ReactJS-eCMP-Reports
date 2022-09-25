import { useState } from "react";
import { FormCheckbox } from "../shared";
import useReportContext from "../../context/report-context";
// import styled from "styled-components";

const FormSideEffects = () => {
  const [isSideEffectsChecked, setIsSideEffectsChecked] = useState({
    mild: false,
    moderate: false,
    severe: false,
  });

  const { reportData, onChangeHandler } = useReportContext();

  function sideEffectsClickHandler(key) {
    setIsSideEffectsChecked({
      ...isSideEffectsChecked,
      [key]: !isSideEffectsChecked[key],
    });
  }

  return (
    <div>
      <div className="form-control-column">
        <label htmlFor="s_effects" className="form-sub-label">
          side effects
        </label>

        <FormCheckbox
          name="s_effects_mild"
          valueSelect={reportData.s_effects_mild_grade}
          valueInput={reportData.s_effects_mild_desc || ""}
          onChange={(e) => onChangeHandler(e)}
          label="mild"
          onClick={() => sideEffectsClickHandler("mild")}
          disabled={!isSideEffectsChecked.mild}
        />

        <FormCheckbox
          name="s_effects_moderate"
          valueSelect={reportData.s_effects_moderate_grade}
          valueInput={reportData.s_effects_moderate_desc || ""}
          onChange={(e) => onChangeHandler(e)}
          label="moderate"
          onClick={() => sideEffectsClickHandler("moderate")}
          disabled={!isSideEffectsChecked.moderate}
        />

        <FormCheckbox
          name="s_effects_severe"
          valueSelect={reportData.s_effects_severe_grade}
          valueInput={reportData.s_effects_severe_desc || ""}
          onChange={(e) => onChangeHandler(e)}
          label="severe"
          onClick={() => sideEffectsClickHandler("severe")}
          disabled={!isSideEffectsChecked.severe}
        />
      </div>
    </div>
  );
};
export default FormSideEffects;
