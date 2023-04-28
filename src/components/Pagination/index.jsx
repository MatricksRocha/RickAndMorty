import './style.css';
import { Pagination } from '@mui/material';

export function PaginationComponent({handlePaginationChange, pages, currentPage}) {

    return (
        <>
        <section className='c-pagination'>
            <Pagination count={pages} page={currentPage} variant="outlined" color="secondary" onChange={(event, page) => {handlePaginationChange(page)}} />
        </section>
        </>
    )
}