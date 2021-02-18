import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'store';
import { createTable, filterRows } from 'helpers';

export default function Table() {
  const data: any = useSelector<AppState>(state => state.data);
  const { rows, entries, start, search } = data;
  let rowsToShow = rows;
  if (search) {
    rowsToShow = filterRows(rows, search);
  }
  return (
    <>{rowsToShow.length > 0 && createTable(rowsToShow, start, entries)}</>
  );
}
