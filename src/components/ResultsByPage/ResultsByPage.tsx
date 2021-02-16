import React from 'react';
import Search from '../Search/Search';
import { useDispatch } from 'react-redux';
//Action
import { setEntriesValue } from '../../actions/tableActions';

export default function ResultsByPage() {
  const dispatch = useDispatch();
  return (
    <div id='topBar'>
      <div id='showEntries'>
        Show{' '}
        <div className='custom-select' style={{ width: '50px' }}>
          <select onChange={e => dispatch(setEntriesValue(+e.target.value))}>
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
