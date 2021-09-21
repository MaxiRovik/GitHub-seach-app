import {Dispatch} from "redux";
import axios from 'axios';
import {RepoDataActionTypes, RepositoriesDataAction} from "../../types/repositories";


export const fetchRepositoriesData = (query:string) => {
    return async (dispatch: Dispatch<RepositoriesDataAction>) => {
            try {
                dispatch({type: RepoDataActionTypes.FETCH_REPOSITORIES })
                const response = await axios.get('https://api.github.com/search/repositories', {
                    params: {q: query}
                });
                console.log(response.data.items)
                dispatch({type: RepoDataActionTypes.FETCH_REPOSITORIES_SUCCESS , payload: response.data.items})
            } catch (e) {
                dispatch({type: RepoDataActionTypes.FETCH_REPOSITORIES_ERROR, payload: "Error" })
        }
    }
}

