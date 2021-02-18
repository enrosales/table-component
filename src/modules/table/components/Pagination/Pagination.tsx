import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStartValue } from 'actions/tableActions';
import { AppState } from 'store';
import { filterRows, renderButtons } from 'helpers';

const resultsIndicator = (
  totalRows: number,
  start: number,
  entries: number
) => {
  return (
    <p>
      Showing {start === 0 ? 1 : start + 1} to{' '}
      {start + entries <= totalRows ? start + entries : totalRows} of{' '}
      {totalRows} entries
    </p>
  );
};

export default function Pagination() {
  const data: any = useSelector<AppState>(state => state.data);
  const { rows, entries, start, search } = data;
  const [rowsToShow, setRowsToShow] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setRowsToShow(filterRows(rows, search));
  }, [rows, search]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedPageNumber = Number(e.currentTarget.innerText);
    dispatch(setStartValue((clickedPageNumber - 1) * entries));
  };

  const handlePrevious = () => {
    dispatch(setStartValue(start - entries));
  };

  const handleNext = () => {
    dispatch(setStartValue(start + entries));
  };

  return (
    <div className='pagination'>
      <div className='resultsIndicator'>
        {resultsIndicator(rowsToShow.length, start, entries)}
      </div>
      <div className='buttonsPage'>
        <button disabled={start === 0 ? true : false} onClick={handlePrevious}>
          Previous
        </button>
        {renderButtons(rowsToShow.length, entries, start, handleClick)}
        <button
          disabled={start + entries >= rowsToShow.length ? true : false}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
