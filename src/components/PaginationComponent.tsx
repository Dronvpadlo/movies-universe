import React from 'react';
import {useSearchParams} from "react-router-dom";

// type MaxPageProp = {
//     maxPage: number
// }
const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const handleSubmitPrev = () => {
        let page = +query.get('page');
        if(page && page>1){
            const newQuery = --page
            const stringQuery = newQuery.toString()
            setQuery({page: stringQuery})
        }
    }
    const handleSubmitNext = () => {
        let page = +query.get('page');
        if(page){
            const newQuery = ++page
            const stringQuery = newQuery.toString()
            setQuery({page: stringQuery})
        }
    }
    return (
        <div>
            <h4>Pagination Component</h4>
            <button onClick={handleSubmitPrev}>Prev</button>
            <input type="text" placeholder={query.get('page')}/><button onClick={handleSubmitNext}>Next</button><br/>

        </div>
    );
};

export default PaginationComponent;