import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//Actions
import { getRows } from '../../actions/tableActions';
import Pagination from '../Pagination/Pagination';
import ResultsByPage from '../ResultsByPage/ResultsByPage';
import Table from '../Table/Table';
import './TableLayout.css';

type Props = {
  error: string;
  getRows: () => void;
};

function TableLayout(props: Props) {
  const { getRows, error } = props;
  useEffect(() => {
    async function fetchData() {
      await getRows();
    }
    fetchData();
  }, [getRows]);
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
const mapDispatchToProps = (dispatch: any) => ({
  getRows: () => dispatch(getRows()),
});

const mapStateToProps = (state: any) => ({
  error: state.data.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableLayout);
