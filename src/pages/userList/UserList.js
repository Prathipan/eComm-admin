import { DeleteOutline } from "@mui/icons-material";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

const UserList = () => {
    const {users,dispatch} = useContext(UserContext)

    useEffect(()=>{
      getUsers(dispatch)
    },[dispatch])

    const handleDelete = (id) => {
      deleteUser(id,dispatch)
    }

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "userName",
      headerName: "User",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userName">
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 120,
    },
    {
      field: "isAdmin",
      headerName: "isAdmin",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="isAdmin">
            {params.row.isAdmin === true ? "Yes" : "No"}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`} state={{user : params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick ={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="top-content">
        <h1 className="home-title">Users</h1>
        <Link to="/add-user">
          <button className="create-button">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default UserList;
