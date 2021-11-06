import { createContext, useCallback, useMemo, useReducer } from "react";
// import cartReducer, { cartInitialState } from "./reducers/cart";
import productsReducer, { productsInitialState } from "./reducers/movies.js";

export const DispatchContext = createContext();
export const StateContext = createContext();

const GlobalState = ({ children }) => {
  //   const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );

  console.log(productsState);

  const combineDispatch =
    (...dispatches) =>
    (action) =>
      dispatches.forEach((dispatch) => dispatch(action));

  // don't forget to memoize again
  const combinedDispatch = useCallback(
    combineDispatch(
      // cartDispatch,
      productsDispatch
    ),
    [
      // cartDispatch,
      productsDispatch,
    ]
  );

  const combinedState = useMemo(
    () => ({
      // cartState,
      productsState,
    }),
    [
      // cartState,
      productsState,
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
