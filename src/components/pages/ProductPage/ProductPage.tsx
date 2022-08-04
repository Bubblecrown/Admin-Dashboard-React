import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { imageUrl } from "../../../Constants";

// icon
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// end icon

// action
import * as productsAction from "../../../actions/products.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../reducers";
import { Typography, Stack, IconButton } from "@mui/material";
// end action

// Moment
import Moment from "react-moment";
import NumberFormat from "react-number-format";
// end Moment
const columns: GridColDef[] = [
  {
    headerName: "Order No.",
    field: "id",
    width: 100,
  },
  {
    headerName: "Image",
    field: "image",
    width: 80,
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <img
        src={`${imageUrl}/images/${value}?dummy=${Math.random()}`}
        style={{ width: 70, height: 70, borderRadius: "5%" }}
      />
    ),
  },
  {
    headerName: "Product Name",
    field: "name",
    width: 400,
  },
  {
    headerName: "Amount",
    width: 120,
    field: "stock",
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <Typography variant="body1">
        <NumberFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={0}
          fixedDecimalScale={true}
        />
      </Typography>
    ),
  },
  {
    headerName: "Price",
    field: "price",
    width: 120,
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <Typography variant="body1">
        <NumberFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={"฿"}
        />
      </Typography>
    ),
  },
  {
    headerName: "Created At",
    field: "createdAt",
    width: 220,
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <Typography variant="body1">
        <Moment format="DD/MM/YYYY HH:mm">{value}</Moment>
      </Typography>
    ),
  },
  {
    headerName: "Action",
    field: ".",
    width: 120,
    renderCell: ({ row }: GridRenderCellParams<string>) => (
      <Stack direction="row">
        <IconButton
          aria-label="edit"
          size="large"
          onClick={() => {
            // navigate("/stock/edit/" + row.id);
          }}
        >
          <AppRegistrationIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => {
            // setSelectedProduct(row);
            // setOpenDialog(true);
          }}
        >
          <DeleteOutlineIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    ),
  },
];

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
