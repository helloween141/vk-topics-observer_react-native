import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import reduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    // typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
  )
);

export { store };
