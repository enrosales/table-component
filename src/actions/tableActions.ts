import { Dispatch } from 'redux';
//Types
import {
  TableActions,
  LoadRows,
  RowsLoaded,
  ErrorLoadingRows,
  SetEntries,
  SetSearching,
  SetStart,
} from '../types/tableTypes';

//API
import * as API from '../api/api';

// action creators
const loadRowsAction = (): LoadRows => ({
  type: TableActions.LOAD_ROWS,
});

const rowsLoadedAction = (rows: any[]): RowsLoaded => ({
  type: TableActions.ROWS_LOADED,
  payload: rows,
});

const errorLoadingRowsAction = (error: string): ErrorLoadingRows => ({
  type: TableActions.ERROR_LOADING_ROWS,
  payload: error,
});

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

// Thunk async actions
export const getRows = () => async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    dispatch(loadRowsAction());
    const { data: rows } = await API.getRows();
    dispatch(rowsLoadedAction(rows));
    dispatch(errorLoadingRowsAction(''));
  } catch (error) {
    dispatch(errorLoadingRowsAction(error.message));
  }
};
