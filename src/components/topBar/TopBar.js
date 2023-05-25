import { DarkMode, Logout } from "@mui/icons-material"
import "./topbar.css"
import { logOut } from "../../context/authContext/AuthActions";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const TopBar = () => {
  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)

  const handleLogout = () =>{
    logOut(dispatch);
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }
  return (
    <div className="topbar">
        <div className="topbar-wrapper">
            <div className="topLeft">
                <div className="logo">ShopZone Admin</div>
            </div>
            <div className="topRight">
               <div className="topbarIcon">
                  <DarkMode />
               </div>
               <div className="topbarIcon" onClick={handleLogout}>
                  <Logout />
                  <span className="logout">Logout</span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar