export enum TableActions {
  LOAD_ROWS = 'LOAD_ROWS',
  ROWS_LOADED = 'ROWS_LOADED',
  ERROR_LOADING_ROWS = 'ERROR_LOADING_ROWS',
  SET_ENTRIES = 'SET_ENTRIES',
  SET_SEARCHING = 'SET_SEARCHING',
  SET_START = 'SET_START',
}

export type LoadRows = {
  type: TableActions.LOAD_ROWS;
};

export type RowsLoaded = {
  type: TableActions.ROWS_LOADED;
  payload: any[];
};

export type ErrorLoadingRows = {
  type: TableActions.ERROR_LOADING_ROWS;
  payload: string;
};

export type SetEntries = {
  type: TableActions.SET_ENTRIES;
  payload: number;
};

export type SetSearching = {
  type: TableActions.SET_SEARCHING;
  payload: string;
};

export type SetStart = {
  type: TableActions.SET_START;
  payload: number;
};

/* export type SetCurrentRows = {
  type: TableActions.SET_CURRENTROWS;
  payload: any[];
}; */
