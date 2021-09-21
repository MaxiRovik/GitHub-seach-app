import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {RepositoriesDataReducer} from "./reducer/repositoriesDataReducer";

export const store = createStore(RepositoriesDataReducer, applyMiddleware(thunk));