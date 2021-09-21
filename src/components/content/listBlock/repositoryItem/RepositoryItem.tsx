import React, {FC} from 'react';
import cl from './repositoryItem.module.scss'

interface RepositoryItemProps {
    thisRepo:any
}

const RepositoryItem:FC<RepositoryItemProps> = ({thisRepo}) => {
    return (
        <div onClick = {() => window.location.href = thisRepo.html_url} className={cl.ItemCard}>
            <h2>{thisRepo.name} </h2>
            <div>language: <span>{thisRepo.language} </span> </div>
            <div>Description:<span>{thisRepo.description} </span></div>
        </div>
    );
};

export default RepositoryItem;