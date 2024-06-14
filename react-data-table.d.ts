// react-data-table.d.ts
declare module 'react-data-table-component' {
  import { ComponentType, ReactNode } from 'react';

  export interface TableColumn<T> {
    name: string;
    selector: (row: T) => ReactNode;
    sortable?: boolean;
    right?: boolean;
    center?: boolean;
    ignoreRowClick?: boolean;
    allowOverflow?: boolean;
    button?: boolean;
    wrap?: boolean;
    grow?: number;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    hide?: number | string | boolean | 'sm' | 'md' | 'lg' | 'xl';
    conditionalCellStyles?: ConditionalCellStyles<T>[];
  }

  export interface DataTableProps<T> {
    columns: TableColumn<T>[];
    data: T[];
    title?: string | ReactNode;
    keyField?: string;
    className?: string;
    responsive?: boolean;
    pagination?: boolean;
    paginationResetDefaultPage?: boolean;
    paginationTotalRows?: number;
    paginationPerPage?: number;
    paginationRowsPerPageOptions?: number[];
    paginationComponentOptions?: PaginationComponentOptions;
    paginationIconFirstPage?: ReactNode;
    paginationIconLastPage?: ReactNode;
    paginationIconNext?: ReactNode;
    paginationIconPrevious?: ReactNode;
    subHeader?: boolean;
    subHeaderComponent?: ReactNode;
    subHeaderAlign?: 'left' | 'right' | 'center';
    noTableHead?: boolean;
    fixedHeader?: boolean;
    fixedHeaderScrollHeight?: string;
    progressPending?: boolean;
    progressComponent?: ReactNode;
    persistTableHead?: boolean;
    expandableRows?: boolean;
    expandableRowDisabled?: (row: T) => boolean;
    expandableRowExpanded?: (row: T) => boolean;
    expandableRowsComponent?: ReactNode | ComponentType<ExpandableRowsComponentProps<T>>;
    expandableRowsHideExpander?: boolean;
    defaultExpandedField?: string;
    onRowExpandToggled?: (expanded: boolean, row: T) => void;
    sortIcon?: ReactNode;
    onSort?: (column: TableColumn<T>, sortDirection: 'asc' | 'desc') => void;
    onRowClicked?: (row: T, event: ReactMouseEvent) => void;
    onRowDoubleClicked?: (row: T, event: ReactMouseEvent) => void;
    onRowMouseEnter?: (row: T, event: ReactMouseEvent) => void;
    onRowMouseLeave?: (row: T, event: ReactMouseEvent) => void;
    onChangeRowsPerPage?: (currentRowsPerPage: number, currentPage: number) => void;
    onChangePage?: (page: number, totalRows: number) => void;
    clearSelectedRows?: boolean;
    customStyles?: TableStyles;
    theme?: string;
    noHeader?: boolean;
    defaultSortFieldId?: string;
    defaultSortAsc?: boolean;
    selectableRows?: boolean;
    selectableRowsComponent?: ReactNode | ComponentType<SelectProps>;
    selectableRowsComponentProps?: any;
    selectableRowsHighlight?: boolean;
    selectableRowsNoSelectAll?: boolean;
    onSelectedRowsChange?: (selectedRows: {
      allSelected: boolean;
      selectedCount: number;
      selectedRows: T[];
    }) => void;
    contextTitle?: string | ReactNode;
    contextActions?: ReactNode;
    contextMessage?: ContextMessage;
    onRowSelected?: (row: T) => void;
    dense?: boolean;
    pointerOnHover?: boolean;
    highlightOnHover?: boolean;
    striped?: boolean;
    noContextMenu?: boolean;
    direction?: 'ltr' | 'rtl';
    conditionalRowStyles?: ConditionalRowStyles<T>[];
    noDataComponent?: ReactNode;
    disabled?: boolean;
  }

  export type TableStyles = any;
  export type PaginationComponentOptions = any;
  export type ExpandableRowsComponentProps<T> = any;
  export type SelectProps = any;
  export type ContextMessage = any;
  export type ConditionalRowStyles<T> = any;
  export type ConditionalCellStyles<T> = any;

  const DataTable: <T>(props: DataTableProps<T>) => JSX.Element;
  export default DataTable;
}