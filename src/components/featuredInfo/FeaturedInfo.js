import { CurrencyRupee, Inventory, LocalShipping } from "@mui/icons-material";
import "./featuredInfo.css";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext/ProductContext";
import { OrderContext } from "../../context/orderContext/OrderContext";
import { getProducts } from "../../context/productContext/apiCalls";
import { getOrders } from "../../context/orderContext/apiCalls";

const FeaturedInfo = () => {

  const {products,dispatch} = useContext(ProductContext);
  const {orders,dispatch : orderDispatch} = useContext(OrderContext);

  // console.log(orders.reduce((acc,curr) => acc+curr.bill,0))

  useEffect(()=>{
    getProducts(dispatch);
    getOrders(orderDispatch);
  },[dispatch,orderDispatch])

  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featureIcon currency">
          <CurrencyRupee />
        </div>
        <div className="featureContent">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">Rs.{orders.reduce((acc,curr) => acc+curr.bill,0)}</span>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featureIcon inventory">
          <Inventory />
        </div>
        <div className="featureContent">
          <span className="featuredTitle">Products</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{products.length}</span>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featureIcon orders">
          <LocalShipping />
        </div>
        <div className="featureContent">
          <span className="featuredTitle">Orders</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{orders.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
