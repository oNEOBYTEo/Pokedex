import React from 'react';

const ButtonsPreNext = ({page, setPage, totalPages, length}) => {
  return ( 
    <>
      {page !== 1 ? (
        <button className="nextPrev" onClick={() => setPage(page - 1)}>Previous Page</button>
      ): (
        <button className="nextPrev">Previous Page</button>
      ) }
      <div className='page' style={{fontSize: `${page > 10 ? "15px" : page > 100 ? "14px" : "16px"}`}}>
        {page} / {totalPages}
      </div>
      {page !== totalPages && length > 0 ? (
        <button className="nextPrev" onClick={() => setPage(page + 1)}>Next Page</button>
      ) : (
        <button  className="nextPrev" >Next Page</button>)}
    </>
   );
}
 
export default ButtonsPreNext;