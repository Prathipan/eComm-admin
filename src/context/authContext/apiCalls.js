import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions"
import { api } from "../../api";


export const login = async (user,dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${api}/auth/login`,user);
        // console.log(res.data)
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}