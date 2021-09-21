import React, {FC, useEffect, useState} from 'react';
import cl from './ContentBlock.module.scss'
import SearchBlock from './searchBlock/SearchBlock';
import RepositoriesList from "./listBlock/RepositoriesList";
import {fetchRepositoriesData} from "../../store/actionCreator/repositoriesData";
import {useDispatch} from "react-redux";
import useDebounce from "../../customHook/useDebounce";

const ContentBlock:FC = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('')
    const [searchStringArr, setSearchStringArr] = useState<string[]>([])

    const getRequestString = (request:string) => {
        setSearchStringArr(prevState => {
            if(prevState.length > 4) {
                prevState.splice(4,1)
            }
            return  [request,...prevState]})
    }
    const debouncedSearch = useDebounce((value) => dispatch(fetchRepositoriesData(value)), 500, getRequestString )
    const inputChange = (value:string) => {
        setSearchValue(value)
        debouncedSearch(value)
    }

    return (
        <div className={cl.ContentBlockWrapper}>
            <SearchBlock searchValue={searchValue} inputChange = {inputChange}
                         searchStringArr = {searchStringArr}/>
            <RepositoriesList />
        </div>
    );
};

export default ContentBlock;