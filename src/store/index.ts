import { createStore, combineReducers, compose } from "redux";
import { stepsReducer } from "./steps/reducers";

const rootReducer = combineReducers({
  steps: stepsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(storeEnhancers = []) {
  const store = createStore(
    combineReducers({
      steps: stepsReducer,
    }),
    compose(...[...storeEnhancers])
  );

  return store;
}
