import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Steps } from "./components/Steps";

const Main = styled.main`
  padding: 16px;
`;

const steps = [
  { id: 1, drum: "kick" },
  { id: 2, drum: "snare" },
];

export default function App() {
  const [chosenStepIndex, setChosenStepIndex] = useState(0);

  return (
    <Main>
      <Steps steps={steps} setChosenStepIndex={setChosenStepIndex} />
      {`Chosen step: ${chosenStepIndex}`}
    </Main>
  );
}
