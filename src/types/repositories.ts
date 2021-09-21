export interface RepositoriesState {
    repositories: any[];
    loading: boolean;
    error: null | string;

}
export enum RepoDataActionTypes {
    FETCH_REPOSITORIES = 'FETCH_REPOSITORIES',
    FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_ERROR = 'FETCH_REPOSITORIES_ERROR',
}

interface FetchRepoAction {
    type: RepoDataActionTypes.FETCH_REPOSITORIES
}
interface FetchRepoSuccessAction {
    type: RepoDataActionTypes.FETCH_REPOSITORIES_SUCCESS;
    payload: any[];
}
interface FetchRepoErrorAction {
    type: RepoDataActionTypes.FETCH_REPOSITORIES_ERROR;
    payload: string;
}

export type RepositoriesDataAction =
    FetchRepoAction
    | FetchRepoSuccessAction
    | FetchRepoErrorAction