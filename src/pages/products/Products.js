import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import "./products.css";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext/ProductContext";
import { getProducts } from "../../context/productContext/apiCalls";

const Products = () => {

  const {products,dispatch} = useContext(ProductContext)

  useEffect(()=>{
    getProducts(dispatch);
  },[dispatch])

  return (
    <div className="products">
      <div className="top-content">
        <h1 className="home-title">Products</h1>
        <Link to="/add-product">
          <button className="create-button">Create</button>
        </Link>
      </div>
      <div className="products-content">
        {products.map((product,index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
