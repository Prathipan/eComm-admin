import { Create, Delete } from "@mui/icons-material";
import "./productCard.css";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext/ProductContext";
import { deleteProduct } from "../../context/productContext/apiCalls";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(ProductContext);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  return (
    <div className="product-card">
      <div className="productImgContainer">
        <img src={product.img} className="productImg" alt="" />
      </div>
      <div className="info-container">
        <div className="left-info">
          <span className="product-name">{product.title}</span>
          <span className="product-price">Rs.{product.price}</span>
        </div>
        <div className="right-info">
          <span style={{ color: product.inStock ? "green" : "red" }}>
            Stock : {product.inStock ? "Yes" : "No"}
          </span>
        </div>
      </div>
      <div className="product-btns">
        <button className="edit-icon">
          <Link className="link" to={`/product/${product._id}`} state={{ product }}>
            <Create />
          </Link>
        </button>
        <button
          className="delete-icon"
          onClick={() => handleDelete(product._id)}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
