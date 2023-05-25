import axios from "axios";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./UserActions"
import { api } from "../../api";


export const getUsers = async(dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get(`${api}/users/find-all`,{
            headers : {
                token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            } 
        });
        // console.log(res.data)
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        dispatch(getUsersFailure());
    }
}

export const updateUser = async(user,dispatch) => {
    dispatch(updateUserStart());
    try {
     const res = await axios.put(`${api}/users/${user._id}`,user,{
       headers : {
         token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
       }
     })
     dispatch(updateUserSuccess(res.data));
    } catch (error) {
      dispatch(updateUserFailure())
    }
}

export const deleteUser = async(id,dispatch) => {
    dispatch(deleteUserStart());
    try {
          await axios.delete(`${api}/users/${id}`,{
            headers : {
                token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        })
        dispatch(deleteUserSuccess(id));
    } catch (error) {
        dispatch(deleteUserFailure(error));
    }
}