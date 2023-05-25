import {
  Cottage,
  CurrencyExchange,
  Insights,
  Person,
  ShoppingBag,
  ShoppingCart,
  Work,
} from "@mui/icons-material";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebar-menu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Cottage className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Work className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/add-product" className="link">
              <li className="sidebarListItem">
                <ShoppingCart className="sidebarIcon" />
                Add Product
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className="sidebarListItem">
                <ShoppingBag className="sidebarIcon" />
                Orders
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Users
              </li>
            </Link>
            <li className="sidebarListItem disable">
              <Insights className="sidebarIcon" />
              Statistics
            </li>
            <li className="sidebarListItem disable">
              <CurrencyExchange className="sidebarIcon" />
              Transactions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
