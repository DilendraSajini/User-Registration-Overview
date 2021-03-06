import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/table/table.component';
import { updateTableData, updateTableIsLoading } from './table.actions';

export const featureKey = 'table-data';

export interface Table {
  tableIsLoading: boolean;
  tableData: Course[];
}

const ELEMENT_DATA: Course[] = [];

const initialTableDataStateState: Table = {
  tableIsLoading: true,
  tableData: ELEMENT_DATA
};

export const reducer = createReducer(
  initialTableDataStateState,
  on(updateTableData, (state, action) => {
    return {
      ...state,
      tableData: action.tableData,
      tableIsLoading: action.tableIsLoading
    };
  }),
  on(updateTableIsLoading, (state, action) => {
    return {
      ...state,
      tableIsLoading: action.tableIsLoading
    };
  })
);

