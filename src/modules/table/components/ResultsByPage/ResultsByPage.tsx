import React from 'react';
import { useDispatch } from 'react-redux';
import Search from 'modules/table/components/Search/Search';
//Action
import { setEntriesValue } from 'actions/tableActions';

const OPTIONS = [
  { id: 1, value: 5 },
  { id: 2, value: 10 },
  { id: 3, value: 20 },
  { id: 4, value: 50 },
  { id: 5, value: 100 },
];

export default function ResultsByPage() {
  const dispatch = useDispatch();
  return (
    <div id='topBar'>
      <div id='showEntries'>
        Show{' '}
        <div className='custom-select' style={{ width: '50px' }}>
          <select onChange={e => dispatch(setEntriesValue(+e.target.value))}>
            {OPTIONS.map(option => {
              const { value } = option;
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>{' '}
        entries
      </div>
      <Search />
    </div>
  );
}
