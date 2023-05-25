import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import Chart from "../../components/chart/Chart";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { api } from "../../api";

const Home = () => {
  const months = useMemo(() =>
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], []);

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
      getStats();
    }, [months]);

    const getStats = async () => {
      try {
        const res = await axios.get(`${api}/users/stats`, {
          headers: {
            token:
              `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
          },
        });
        const statList = res.data.sort((a,b) =>{
          return a._id - b._id    
          })
        statList.map((item) =>{
          return setUserStats((prev) => [
            ...prev,
            { name: months[item._id - 1], "New User": item.total }
          ])
        }
          
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="home">
      <h1 className="home-title">Dashboard</h1>
      <FeaturedInfo />
      <Chart title="User Analytics" data={userStats} dataKey="New User" grid />
    </div>
  )
}

export default Home