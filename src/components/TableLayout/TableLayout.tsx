import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Types
import { AppState } from '../../store';
//Actions
import { getRows } from '../../actions/tableActions';
import Pagination from '../Pagination/Pagination';
import ResultsByPage from '../ResultsByPage/ResultsByPage';
import Table from '../Table/Table';
import './TableLayout.css';

export default function TableLayout() {
  const error: any = useSelector<AppState>(state => state.data.error);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      await dispatch(getRows());
    }
    fetchData();
  }, [dispatch]);
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <ResultsByPage />
          <Table />
          <Pagination />
        </>
      )}
    </>
  );
}
