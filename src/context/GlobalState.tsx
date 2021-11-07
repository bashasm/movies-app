import { createContext, useCallback, useMemo, useReducer } from "react";
import { IGlobalState } from "../components/interfaces/interfaces";
import moviesReducer, { moviesInitialState } from "./reducers/movies";

export const DispatchContext = createContext();
export const StateContext = createContext<IGlobalState>(null);

const GlobalState: React.FC = ({ children }) => {
  const [moviesState, moviesDispatch] = useReducer(
    moviesReducer,
    moviesInitialState
  );

  const combineDispatch =
    (...dispatches) =>
    (action) =>
      dispatches.forEach((dispatch) => dispatch(action));

  // don't forget to memoize again
  const combinedDispatch = useCallback(
    combineDispatch(
      // cartDispatch,
      moviesDispatch
    ),
    [
      // cartDispatch,
      moviesDispatch,
    ]
  );

  // for performance
  const combinedState = useMemo(
    () => ({
      // cartState,
      moviesState,
    }),
    [
      // cartState,
      moviesState,
    ]
  );

  return (
    <DispatchContext.Provider value={combinedDispatch}>
      <StateContext.Provider value={combinedState}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default GlobalState;
