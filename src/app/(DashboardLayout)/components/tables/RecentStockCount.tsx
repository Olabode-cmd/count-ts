// src/components/DataTable.tsx
import * as React from "react";
import { Grid, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import BaseCard from "../shared/DashboardCard";
import { renderStatus } from '../shared/RenderStatus'

interface DataTableProps {
  columns: GridColDef[];
  rows: any[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "warehouse",
    headerName: "Warehouse",
    width: 150,
    editable: true,
  },
  {
    field: "itemName",
    headerName: "Item Name",
    // type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "batch",
    headerName: "Batch",
    width: 80,
    editable: true,
  },
  {
    field: "xQuantity",
    headerName: "Expected Quantity",
    width: 100,
    editable: true,
  },
  {
    field: "cQuantity",
    headerName: "Counted Quantity",
    width: 100,
    editable: true,
  },
  {
    field: "variance",
    headerName: "Variance",
    width: 70,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: renderStatus,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    warehouse: "Mark Avenue Stores",
    itemName: "Laptop",
    batch: 87835,
    xQuantity: 300,
    cQuantity: 298,
    variance: 2,
    status: "Completed",
    date: "23/06/2024",
  },
  {
    id: 2,
    warehouse: "Pen Avenue Stores",
    itemName: "Smartphones",
    batch: 81835,
    xQuantity: 300,
    cQuantity: 298,
    variance: 2,
    status: "Completed",
    date: "23/06/2024",
  },
  {
    id: 3,
    warehouse: "Raven Stores",
    itemName: "iPads",
    batch: 87875,
    xQuantity: 200,
    cQuantity: 188,
    variance: 2,
    status: "Pending",
    date: "23/06/2024",
  },
  {
    id: 4,
    warehouse: "Mark Avenue Stores",
    itemName: "Grocery",
    batch: 87835,
    xQuantity: 300,
    cQuantity: 298,
    variance: 2,
    status: "Completed",
    date: "23/06/2024",
  },
];

const RecentStockCount: React.FC = () => {
  return (
    <BaseCard title="Recent Stock Count">
      <div className="box">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </BaseCard>
  );
};

export default RecentStockCount;
