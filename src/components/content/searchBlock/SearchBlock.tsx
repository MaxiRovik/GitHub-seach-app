import React, {FC} from 'react';
import Search from "./searchInput/Search";
import cl from './SearchBlock.module.scss';

interface SearchBlockProps {
    searchValue: string,
    inputChange: any,
    searchStringArr: string[]
}

const SearchBlock:FC<SearchBlockProps> = ({searchValue, inputChange, searchStringArr}) => {

    if (searchStringArr.length !== 0 ) {
        let dataForStorage = JSON.stringify(searchStringArr)
        localStorage.setItem('searchStringArr', dataForStorage);
    }

    let searchList = JSON.parse(localStorage.getItem('searchStringArr')!);

    return (
        <div className={cl.searchBlockWrapper}>
            <Search searchValue={searchValue} inputChange={inputChange}/>
            Search history
            <div>{searchList.map((item:string)  =>
                <div key={searchList.indexOf(item)}> {item}</div>)}
            </div>
        </div>

    );
};

export default SearchBlock;