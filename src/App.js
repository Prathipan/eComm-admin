import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import AddProduct from "./pages/addProduct/AddProduct";
import Orders from "./pages/orders/Orders";
import EditProduct from "./pages/editProduct/EditProduct";
import EditUser from "./pages/editUsers/EditUser";
import UserList from "./pages/userList/UserList";
import Order from "./pages/order/Order";
import Login from "./pages/login/Login";
import Portal from "./pages/Portal";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router> 
        <Routes>
          <Route exact path="/" element={ user ? <Navigate to="/home" /> : <Login />} />
          <Route path="/" element={user ? <Portal /> : <Navigate to="/" /> }>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product/:id" element={<EditProduct />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:id" element={<Order />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:id" element={<EditUser />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
