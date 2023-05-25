import { useLocation, useNavigate } from "react-router-dom";
import "./editProduct.css"
import { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext/ProductContext";
import { MenuItem, Select, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { updateProduct } from "../../context/productContext/apiCalls";

const EditProduct = () => {
  const location = useLocation();
  const navigate= useNavigate();
  const prod = location.state.product;
  const [product, setProduct] = useState({
    _id : prod._id,
    title: prod.title,
    desc: prod.desc,
    img: prod.img,
    categories: prod.categories.toString(),
    color: prod.color.toString(),
    size: prod.size.toString(),
    price: prod.price,
    inStock: prod.inStock,
  });

  const {dispatch} = useContext(ProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct({
        ...product,
        categories: product.categories.split(","),
        color: product.color.split(","),
        size: product.size.split(","),
      },dispatch);
    navigate("/products")
  };

  return (
    <div className="add-products">
      <div className="add-product-top">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowBack />
          Back
        </button>
        <h1 className="home-title">Add Product</h1>
        <button className="publish-button" onClick={handleUpdate}>
          Update
        </button>
      </div>
      <div className="add-product-form">
        <form className="form-container">
          <TextField
            label="Product Title"
            name="title"
            value={product.title}
            variant="outlined"
            className="form-field"
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="desc"
            value={product.desc}
            variant="outlined"
            className="form-field"
            onChange={handleChange}
          />
          <TextField
            label="Categories"
            name="categories"
            value={product.categories}
            variant="outlined"
            className="form-field"
            onChange={handleChange}
          />
          <TextField
            label="Colour"
            name="color"
            value={product.color}
            variant="outlined"
            className="form-field"
            onChange={handleChange}
          />
          <TextField
            label="Size"
            name="size"
            value={product.size}
            variant="outlined"
            className="form-field"
            onChange={handleChange}
          />
          <TextField
            type="number"
            label="Price"
            name="price"
            value={product.price}
            variant="outlined"
            className="form-field"
            onChange={handleChange}
          />
          <Select
            name="inStock"
            value={product.inStock}
            className="form-field"
            onChange={handleChange}
          >
            <MenuItem value="">--inStock--</MenuItem>
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
          <TextField
            label="Image URL"
            name="img"
            value={product.img}
            variant="outlined"
            className="form-field"
            onChange={handleChange}
          />
          {/* <TextField type="file" variant="outlined" className="form-field" /> */}
        </form>
      </div>
    </div>
  );
}

export default EditProduct;