import {RepositoriesDataAction, RepositoriesState, RepoDataActionTypes} from "../../types/repositories";

const initialState: RepositoriesState = {
    repositories: [],
    error: null,
    loading: false
};

export const RepositoriesDataReducer = (state = initialState, action:RepositoriesDataAction):RepositoriesState  => {
    switch(action.type){
        case RepoDataActionTypes.FETCH_REPOSITORIES:
            return {...state, loading:true };
        case RepoDataActionTypes.FETCH_REPOSITORIES_SUCCESS:
            return {...state, loading: false, error: null, repositories: action.payload };
        case RepoDataActionTypes.FETCH_REPOSITORIES_ERROR:
            return {...state, loading: false, error: action.payload};
        default:
            return state

    }
};