import React from 'react';
import { connect } from 'react-redux';
import { createTable, filterRows } from '../../utils';

type Props = {
  rows: any[];
  entries: number;
  start: number;
  search: string;
};

function Table(props: Props) {
  const { rows, entries, start, search } = props;
  let rowsToShow = rows;
  if (search) {
    rowsToShow = filterRows(rows, search);
  }
  return (
    <>{rowsToShow.length > 0 && createTable(rowsToShow, start, entries)}</>
  );
}

const mapStateToProps = (state: any) => ({
  rows: state.data.rows,
  entries: state.data.entries,
  start: state.data.start,
  search: state.data.search,
});

export default connect(mapStateToProps, {})(Table);
