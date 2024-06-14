// src/components/DataTable.tsx
import * as React from "react";
import { Grid, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import BaseCard from "../shared/DashboardCard";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "name",
    headerName: "Name",
    width: 110,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 110,
    editable: true,
  },
  {
    field: "warehouse",
    headerName: "Warehouse",
    width: 200,
    editable: true,
  },
  {
    field: "countLead",
    headerName: "Count Lead",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    warehouse: "Mark Avenue Stores",
    name: "Laptop",
    countLead: "Mr Joe",
    date: "23/06/2024",
  },
  {
    id: 2,
    warehouse: "Pen Avenue Stores",
    name: "Smartphones",
    countLead: "Mary Joe",
    status: "Completed",
    date: "23/06/2024",
  },
  {
    id: 3,
    warehouse: "Raven Stores",
    name: "iPads",
    countLead: "Matthew",
    date: "23/06/2024",
  },
  {
    id: 4,
    warehouse: "Mark Avenue Stores",
    name: "Grocery",
    countLead: "Heimary",
    date: "23/06/2024",
  },
];

const CountSession: React.FC = () => {
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

export default CountSession;
