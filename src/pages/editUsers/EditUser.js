import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./editUser.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

const EditUser = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const user = location.state.user;
  const [userData,setUserData] = useState({
    _id : user._id,
    userName : user.userName,
    email : user.email,
    mobile : user.mobile,
    isAdmin : user.isAdmin
  })

  const {dispatch} = useContext(UserContext);

  const handleChange = (e) => {
   const {name,value} = e.target;
   setUserData((prev) => {
    return { ...prev, [name]: value };
  });
  }

  const handleUpdate = (e) => {
   e.preventDefault();
   updateUser(userData,dispatch);
   navigate("/users")
  }

  return (
    <div className="edit-user">
      <div className="top-content">
        <h1 className="home-title">Edit User</h1>
        <button className="create-button" onClick={handleUpdate}>Update</button>
      </div>
      <div className="edit-wrapper">
        <form className="edit-form">
          <InputLabel id="UserName" className="labelName">
            User Name
          </InputLabel>
          <TextField
            type="text"
            name="userName"
            variant="outlined"
            value={userData.userName}
            onChange={handleChange}
          />
          <InputLabel id="email" className="labelName">
            Email
          </InputLabel>
          <TextField
            type="email"
            name="email"
            variant="outlined"
            value={userData.email}
            onChange={handleChange}
          />
          <InputLabel id="mobile" className="labelName">
            Mobile no.
          </InputLabel>
          <TextField
            type="number"
            name="mobile"
            variant="outlined"
            value={userData.mobile}
            onChange={handleChange}
          />
          <InputLabel id="isAdmin" className="labelName">
            isAdmin
          </InputLabel>
          <Select name="isAdmin" value={userData.isAdmin} onChange={handleChange} >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
