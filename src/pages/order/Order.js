import { useLocation, useNavigate } from "react-router-dom";
import "./order.css";
import { LocalShipping, LocationOn, Person } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/orderContext/OrderContext";
import { updateOrder } from "../../context/orderContext/apiCalls";
import axios from "axios";
import { api } from "../../api";

const Order = () => {
  const location = useLocation();
  const orderDetails = location.state.order;
  const [status, setStatus] = useState(orderDetails.status);
  const [user,setUser] = useState({})
  const navigate = useNavigate();
  const { dispatch } = useContext(OrderContext);

  useEffect(() => {
     const getValues = async() => {
       const user = await axios.get(`${api}/users/find/${orderDetails.userId}`,{
        headers : {
          token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
       })
       setUser(user.data)
     }
     getValues();
  },[orderDetails.userId])

  const handleChange = (e) => {
    const { value } = e.target;
    setStatus(value);
  };

  const handleUpdate = () => {
    updateOrder({...orderDetails,status},dispatch);
  };

  return (
    <div className="order">
      <div className="top-content">
        <button className="back-to-order" onClick={() => navigate("/orders")}>
          Back to orders
        </button>
        <div></div>
      </div>
      <div className="order-wrapper">
        <div className="order-header">
          <div className="order-card">
            <Person className="order-icon" />
            <div className="person-details">
              <span className="order-title">Customer info</span>
              <span>{user.userName}</span>
              <span>{user.email}</span>
            </div>
          </div>
          <div className="order-card">
            <LocalShipping className="order-icon" />
            <div className="order-details">
              <span className="order-title">Order info</span>
              <span style={{color : orderDetails.status === "delivered" ? "green" : "red"}}>Status : {orderDetails.status}</span>
              <span>Payment info : Paid</span>
            </div>
          </div>
          <div className="order-card">
            <LocationOn className="order-icon" />
            <div className="location-details">
              <span className="order-title">Deliver to</span>
              <span>{orderDetails.address.line1}</span>
              <span>{orderDetails.address.line2}</span>
              <span>{orderDetails.address.city}</span>
            </div>
          </div>
        </div>
        <div className="order-bottom">
          <div className="order-table">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Product Id</TableCell>
                    <TableCell align="center">Size</TableCell>
                    <TableCell align="center">color</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetails.products.map((row) => (
                    <TableRow className="table-row" key={row.productId}>
                      <TableCell align="center">{row.productId}</TableCell>
                      <TableCell align="center">
                        {row.size ? row.size.toUpperCase() : <span>NA</span>}
                      </TableCell>
                      <TableCell align="center">
                        {row.color ? row.color : <span>NA</span>}
                      </TableCell>
                      <TableCell align="center">
                        {row.quantity ? row.quantity : <span>NA</span>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="statusId">Status</InputLabel>
              <Select labelId="statusId" label="Status" name="status" value={status} onChange={handleChange}>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"delivered"}>Delivered</MenuItem>
              </Select>
            </FormControl>
            <button className="deliver-button" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
