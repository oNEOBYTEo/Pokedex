import React from 'react';

const ButtonsPreNext = ({page, setPage, totalPages, length}) => {
  return ( 
    <>
      {page !== 1 && (
        <button onClick={() => setPage(page - 1)}>Página anterior</button>
      )}
      <div className="page">
        {page} / {totalPages}
      </div>
      {page !== totalPages && length > 0 ? (
        <button onClick={() => setPage(page + 1)}>Página siguiente</button>
      ) : (
        <button onClick={() => setPage(page + 1)} style={{display: 'none'}}>Página siguiente</button>)}
    </>
   );
}
 
export default ButtonsPreNext;