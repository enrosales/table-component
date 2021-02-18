import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'store';
import { createTable, filterRows } from 'helpers';
import { setStartValue } from 'actions/tableActions';

export default function Table() {
  const data: any = useSelector<AppState>(state => state.data);
  const [rowsToShow, setRowsToShow] = useState<any[]>([]);
  const { rows, entries, start, search } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    setRowsToShow(filterRows(rows, search));
  }, [rows, search]);

  useEffect(() => {
    dispatch(setStartValue(0));
  }, [search, dispatch]);

  return (
    <>{rowsToShow.length > 0 && createTable(rowsToShow, start, entries)}</>
  );
}
