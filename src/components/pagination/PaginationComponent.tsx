import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import styles from './PaginationComponent.module.css'

type MaxPageProp = {
    maxPage: number
}

const PaginationComponent:FC<MaxPageProp> = ({ maxPage }) => {
    const [query, setQuery] = useSearchParams({ page: '1' });
    const currentPage = +query.get('page') || 1;

    const goToPage = (delta: number) => {
        const nextPage = currentPage + delta;

        if (nextPage >= 1 && nextPage <= maxPage) {
            const updated = {
                ...Object.fromEntries(query.entries()),
                page: nextPage.toString(),
            };
            setQuery(updated);
        }
    };

    return (
        <div className={styles.section}>
            <div className={styles.pagination}>
                <button onClick={() => goToPage(-1)} className={styles.button}>Prev</button>

                {currentPage > 3 && (
                    <button onClick={() => goToPage(-3)} className={styles.button}>
                        {currentPage - 3}
                    </button>
                )}
                {currentPage > 2 && (
                    <button onClick={() => goToPage(-2)} className={styles.button}>
                        {currentPage - 2}
                    </button>
                )}
                {currentPage > 1 && (
                    <button onClick={() => goToPage(-1)} className={styles.button}>
                        {currentPage - 1}
                    </button>
                )}

                <button disabled className={styles.disablesButton}>
                    {currentPage}
                </button>

                {currentPage + 1 <= maxPage && (
                    <button onClick={() => goToPage(1)} className={styles.button}>
                        {currentPage + 1}
                    </button>
                )}
                {currentPage + 2 <= maxPage && (
                    <button onClick={() => goToPage(2)} className={styles.button}>
                        {currentPage + 2}
                    </button>
                )}
                {currentPage + 3 <= maxPage && (
                    <button onClick={() => goToPage(3)} className={styles.button}>
                        {currentPage + 3}
                    </button>
                )}

                <button onClick={() => goToPage(1)} className={styles.button}>Next</button>
            </div>
        </div>
    );
};
export default PaginationComponent;