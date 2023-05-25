import { ArrowBack, RemoveRedEye } from "@mui/icons-material";
import "./orders.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../context/orderContext/OrderContext";
import { getOrders } from "../../context/orderContext/apiCalls";

const Orders = () => {
  const navigate = useNavigate();

  const {orders,dispatch} = useContext(OrderContext);

  useEffect(() => {
    getOrders(dispatch);
  },[dispatch])

  return (
    <div className="orders-page">
      <div className="top-content">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowBack /> Back
        </button>
        <h1 className="home-title">Orders</h1>
        <div></div>
      </div>
      <div className="orders-box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Order Id</TableCell>
                <TableCell align="center">User Id</TableCell>
                <TableCell align="center">No. of items</TableCell>
                <TableCell align="center">Order Date</TableCell>
                <TableCell align="center">Bill amount</TableCell>
                <TableCell align="center">status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  className="table-row"
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="center">{row.userId}</TableCell>
                  <TableCell align="center">{row.products.length}</TableCell>
                  <TableCell align="center">{row.createdAt}</TableCell>
                  <TableCell align="center">Rs.{row.bill}</TableCell>
                  <TableCell align="center">
                    <span
                      className={
                        row.status === "delivered" ? "delivered" : "pending"
                      }
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="right" className="view-order">
                    <Link to={`/order/${row._id}`} state={{order : row}}>
                      <RemoveRedEye />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Orders;
