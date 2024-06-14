// src/components/DataTable.tsx
import * as React from "react";
import { Grid, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import BaseCard from "../shared/DashboardCard";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "warehouseName",
    headerName: "Name",
    width: 200,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    warehouseName: "Mark Avenue Stores",
    location: "Ibadan",
  },
  {
    id: 2,
    warehouseName: "Pen Avenue Stores",
    location: "Ojo, Lagos",
  },
  {
    id: 3,
    warehouseName: "Raven Stores",
    location: "Abeokuta",
  },
  {
    id: 4,
    warehouseName: "Mark Avenue Stores",
    location: "Ikeja, Lagos",
  },
];

const WarehouseTable: React.FC = () => {
  return (
    <BaseCard title="Warehouse List">
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

export default WarehouseTable;