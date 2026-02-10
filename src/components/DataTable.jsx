import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Bolton", firstName: "Ramsay", age: 32 },
  { id: 11, lastName: "Mormont", firstName: "Jorah", age: 48 },
  { id: 12, lastName: "Greyjoy", firstName: "Theon", age: 30 },
  { id: 13, lastName: "Tyrell", firstName: "Margaery", age: 28 },
  { id: 14, lastName: "Baelish", firstName: "Petyr", age: 41 },
  { id: 15, lastName: "Tarly", firstName: "Samwell", age: 29 },
  { id: 16, lastName: "Seaworth", firstName: "Davos", age: 56 },
  { id: 17, lastName: "Clegane", firstName: "Sandor", age: 40 },
  { id: 18, lastName: "Clegane", firstName: "Gregor", age: 45 },
  { id: 19, lastName: "Martell", firstName: "Oberyn", age: 39 },
  { id: 20, lastName: "Sand", firstName: "Tyene", age: 26 },
  { id: 21, lastName: "Sand", firstName: "Nymeria", age: 27 },
  { id: 22, lastName: "Sand", firstName: "Obara", age: 31 },
  { id: 23, lastName: "Reed", firstName: "Meera", age: 24 },
  { id: 24, lastName: "Tully", firstName: "Edmure", age: 38 },
  { id: 25, lastName: "Arryn", firstName: "Robin", age: 20 },
  { id: 26, lastName: "Dayne", firstName: "Arthur", age: 36 },
  { id: 27, lastName: "Blackwood", firstName: "Bethany", age: 33 },
  { id: 28, lastName: "Royce", firstName: "Yohn", age: 58 },
  { id: 29, lastName: "Hightower", firstName: "Leyton", age: 60 },
  { id: 30, lastName: "Strong", firstName: "Harwin", age: 42 },
  { id: 31, lastName: "Velaryon", firstName: "Corlys", age: 55 },
  { id: 32, lastName: "Florent", firstName: "Selyse", age: 46 },
  { id: 33, lastName: "Payne", firstName: "Podrick", age: 22 },
  { id: 34, lastName: "Paege", firstName: "Olene", age: 31 },
  { id: 35, lastName: "Selmy", firstName: "Barristan", age: 68 },
  { id: 36, lastName: "Hornwood", firstName: "Donella", age: 49 },
  { id: 37, lastName: "Cassel", firstName: "Rodrik", age: 53 },
  { id: 38, lastName: "Karstark", firstName: "Alys", age: 25 },
  { id: 39, lastName: "Umber", firstName: "Greatjon", age: 50 },
  { id: 40, lastName: "Umber", firstName: "Smalljon", age: 28 },
  { id: 41, lastName: "Piper", firstName: "Marya", age: 35 },
  { id: 42, lastName: "Redwyne", firstName: "Hobber", age: 37 },
  { id: 43, lastName: "Redwyne", firstName: "Horace", age: 39 },
  { id: 44, lastName: "Goodbrook", firstName: "Jared", age: 43 },
  { id: 45, lastName: "Swann", firstName: "Balon", age: 47 },
  { id: 46, lastName: "Swyft", firstName: "Lefford", age: 54 },
  { id: 47, lastName: "Vance", firstName: "Jonos", age: 52 },
  { id: 48, lastName: "Frey", firstName: "Walder", age: 90 },
  { id: 49, lastName: "Merryweather", firstName: "Taena", age: 34 },
  { id: 50, lastName: "Rosby", firstName: "Gyles", age: 61 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 500, maxWidth: "700px", width: "100%", margin: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationMode: "client", paginationModel },
          sorting: {
            sortModel: [{ field: "lastName", sort: "asc" }],
            
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Paper>
  );
}
