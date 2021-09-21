import React, {FC} from 'react';
import { useTypeSelector } from '../../../store/typedHook/useTypedSelector';
import cl from './RepositoriesList.module.scss'
import RepositoryItem from "./repositoryItem/RepositoryItem";

const RepositoriesList:FC = ()=> {
    const {repositories, error, loading} = useTypeSelector(state => state);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error)
        return <h1>{error}</h1>

    return (
        <div className={cl.listWrapper}>
            {repositories.map((repo)=>
                <RepositoryItem key={repo.id}
                             thisRepo = {repo}
                />
            )}
        </div>
    )
};
export default RepositoriesList