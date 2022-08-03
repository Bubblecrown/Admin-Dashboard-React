import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { imageUrl } from "../../../Constants";

// action
import * as productsAction from "../../../actions/products.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../reducers";
// end action

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "IMAGE",
    width: 70,
    renderCell: (p: GridRenderCellParams<string>) => {
      return (
        <img
          src={`${imageUrl}/images/${p.value}?dummy=${Math.random()}`}
          style={{ width: 70, height: 70, borderRadius: "5%" }}
        />
      );
    },
  },
  { field: "name", headerName: "NAME", width: 400 },
  { field: "price", headerName: "PRICE", width: 130 },
  { field: "stock", headerName: "AMOUNT", width: 130 },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function DataTable() {
  const productsReducer = useSelector((state: RootReducer) => state.productsReducer);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(productsAction.productsFunc());
  }, []);

  return (
    <div style={{ height: 635, width: "100%" }}>
      <DataGrid
        rows={productsReducer.result}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
