import React from 'react';
import Search from '../Search/Search';
import { connect } from 'react-redux';
//Action
import { setEntriesValue } from '../../actions/tableActions';

type Props = {
  setEntriesValue: (entries: number) => void;
};

function ResultsByPage(props: Props) {
  const { setEntriesValue } = props;
  return (
    <div id='topBar'>
      <div id='showEntries'>
        Show{' '}
        <div className='custom-select' style={{ width: '50px' }}>
          <select onChange={e => setEntriesValue(+e.target.value)}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>{' '}
        entries
      </div>
      <Search />
    </div>
  );
}

export default connect(null, { setEntriesValue })(ResultsByPage);
