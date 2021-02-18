import { Dispatch } from 'redux';
//Types
import {
  TableActions,
  RowsLoaded,
  SetEntries,
  SetSearching,
  SetStart,
} from 'types/tableTypes';

//#region  action creators

const entriesAction = (entries: number): SetEntries => ({
  type: TableActions.SET_ENTRIES,
  payload: entries,
});

const searchingAction = (search: string): SetSearching => ({
  type: TableActions.SET_SEARCHING,
  payload: search,
});

const startAction = (start: number): SetStart => ({
  type: TableActions.SET_START,
  payload: start,
});
//#endregion

export const setEntriesValue = (entries: number) => (
  dispatch: Dispatch<any>
) => {
  dispatch(entriesAction(entries));
};

export const setSearchingValue = (search: string) => (
  dispatch: Dispatch<any>
) => {
  dispatch(searchingAction(search));
};

export const setStartValue = (start: number) => (dispatch: Dispatch<any>) => {
  dispatch(startAction(start));
};

export const setRows = (rows: any[]): RowsLoaded => ({
  type: TableActions.ROWS_LOADED,
  payload: rows,
});
