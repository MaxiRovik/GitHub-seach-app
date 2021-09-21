import React, { FC } from 'react';
import cl from './Search.module.scss'

interface SearchProps {
    searchValue:string,
    inputChange:(searchValue:string) => void
}

const Search:FC<SearchProps> = ({searchValue,inputChange}) => {

    return (
        <div className = {cl.searchBlock}>
            <input value = {searchValue}  type = 'text' onChange = {e => inputChange(e.target.value)}  />
        </div>
    );
};

export default Search;