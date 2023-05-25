import axios from "axios";
import { getOrdersFailure, getOrdersStart, getOrdersSuccess, updateOrderFailure, updateOrderStart } from "./OrderActions"
import { api } from "../../api";


export const getOrders = async(dispatch) => {
  dispatch(getOrdersStart());
  try {
    const res = await axios.get(`${api}/order/all-orders`,{
        headers : {
            token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
    })
    // console.log(res.data);
    dispatch(getOrdersSuccess(res.data));
  } catch (error) {
    dispatch(getOrdersFailure(error));
  }
}

export const updateOrder = async(order,dispatch) => {
  dispatch(updateOrderStart());
  try {
    const res = await axios.put(`${api}/order/${order._id}`,order,{
        headers : {
            token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
    })
    // console.log(res.data)
    dispatch(getOrdersSuccess(res.data))
  } catch (error) {
    dispatch(updateOrderFailure(error))
  }
}