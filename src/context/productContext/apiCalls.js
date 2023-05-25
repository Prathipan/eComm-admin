import axios from "axios";
import {
  createProductFailure,
  createProductStart,
  createProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./ProductActions";
import { api } from "../../api";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await axios.get(`${api}/products`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    // console.log(res.data);
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure(error));
  }
};

export const createProducts = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    const res = await axios.post(`${api}/products/add-product`, product, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(createProductSuccess(res.data));
  } catch (error) {
    dispatch(createProductFailure(error));
  }
};

export const updateProduct = async (product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await axios.put(`${api}/products/${product._id}`, product, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    // console.log(res.data)
    dispatch(updateProductSuccess(res.data));
  } catch (error) {
    dispatch(updateProductFailure(error));
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete(`${api}/products/${id}`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};
