import React, {useMemo, useState} from 'react';
import classes from "./Paginator.module.css";

const Paginator = (props) => {
    const portionSize = 10

    const pagesCount = Math.ceil(props.itemsTotalCount / props.pageSize);
    const pages = [];
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.ceil(props.currentPage / 10));
    const leftBorder = (portionNumber - 1) * portionSize + 1;
    const rightBorder = portionNumber * portionSize;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onPageChange = (page) => {
        props.onPageChange(props.pageSize, page)
    }
    console.log(portionCount)
    console.log(portionNumber)
    console.log(leftBorder)
    console.log(rightBorder)

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {useMemo(() => pages
                .map(p => p)
                .filter(page => {
                    return page >= leftBorder && page <= rightBorder;
                })
                .map(page => {
                return (
                    <span onClick={() => {onPageChange(page)}}
                             className={(props.currentPage === page && classes.currentPage)
                                 || classes.page}
                             key={page + ' page key'}>
                    {page}
                    </span>)
            }), [leftBorder])}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    );
};
export default Paginator;