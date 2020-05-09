import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppState } from "./store";
import Steps from "./components/Steps";

import { chooseStep } from "./store/steps/actions";

const Main = styled.main`
  padding: 16px;
`;

export default () => {
  const steps = useSelector((state: AppState) => state.steps);

  return (
    <Main>
      <Steps />
      {`Chosen step: ${
        steps.some((step) => step.chosen)
          ? steps.find((step) => step.chosen).id
          : "none chosen"
      }`}
    </Main>
  );
};
