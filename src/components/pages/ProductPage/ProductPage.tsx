import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  GridCellParams,
  GridToolbarQuickFilter,
  GridLinkOperator,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { imageUrl } from "../../../Constants";
// style
import "./ProductPage.css";
// end style

// icon
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
// end icon

// action
import * as productsAction from "../../../actions/products.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../reducers";
import { Typography, Stack, IconButton, Box, Button } from "@mui/material";
// end action

// Moment
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
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
    width: 300,
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

interface QuickSearchToolbarProps {
  clearSearch: () => void;
}

function QuickSearchToolbar(props:QuickSearchToolbarProps) {
  return (
    <Box
      sx={{
        p: 2,
        pb: 0.5,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <GridToolbarQuickFilter>
        <IconButton
        onClick={props.clearSearch}>
          <ClearIcon />
        </IconButton>
      </GridToolbarQuickFilter>
      <Stack component={Link} to="/products/create">
        <Button variant="contained" endIcon={<AddIcon />}>
          Create
        </Button>
      </Stack>
    </Box>
  );
}

export default function ProductsPage() {
  const productsReducer = useSelector((state: RootReducer) => state.productsReducer);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(productsAction.productsFunc());
  }, []);

  return (
    <Box>
      <DataGrid
        sx={{ height: "85vh", width: "100%" }}
        rows={productsReducer.result}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </Box>
  );
}
