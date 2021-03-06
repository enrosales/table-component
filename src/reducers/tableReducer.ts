import { combineReducers } from 'redux';
import { TableActions } from 'types/tableTypes';

/*
{
  rows: [],
  entries: 10,
  search: '',
  start: 0,
}
*/

function rowsReducer(state = [], action: any): any {
  switch (action.type) {
    case TableActions.ROWS_LOADED:
      return action.payload;
    default:
      return state;
  }
}

export function entriesReducer(state = 5, action: any): any {
  switch (action.type) {
    case TableActions.SET_ENTRIES:
      return action.payload;
    default:
      return state;
  }
}

export function searchReducer(state = '', action: any): any {
  switch (action.type) {
    case TableActions.SET_SEARCHING:
      return action.payload;
    default:
      return state;
  }
}

export function startReducer(state = 0, action: any): any {
  switch (action.type) {
    case TableActions.SET_START:
      return action.payload > 0 ? action.payload : 0;
    default:
      return state;
  }
}

const appReducer = combineReducers({
  rows: rowsReducer,
  entries: entriesReducer,
  search: searchReducer,
  start: startReducer,
});

export default appReducer;
