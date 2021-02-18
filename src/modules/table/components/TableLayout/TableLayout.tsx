import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRows } from 'actions/tableActions';
import Pagination from 'modules/table/components/Pagination';
import ResultsByPage from 'modules/table/components/ResultsByPage';
import Table from 'modules/table/components/Table';
import Loading from 'modules/common/components/Loading';
import Error from 'modules/common/components/Error';
import './TableLayout.css';

export type TableLayoutProps = {
  loading: boolean;
  data?: any;
  error: string | null;
};

export default function TableLayout({
  loading,
  data,
  error,
}: TableLayoutProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRows(data));
  }, [data, dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
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
