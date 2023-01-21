import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { check } from "./api/userAPI";
import AppRouter from "./components/router";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/home";
import { createUser, logged } from "./redux/actions";
import "./styles/App.scss";

function App() {
  
  // const userName = useSelector((state) => state.auth.username);
  // const user = jwtDecode(localStorage.getItem("token"));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "SET_USERNAME", payload: user.username });
  //   if(user.roles[0] === "ADMIN") dispatch({ type: "SET_ADMIN"});
  // }, []);

  // useEffect(() => {
  //   console.log(userName);
  // }, [user]);

  // const isAuth = useSelector(state => state.auth.isAuth)
  // console.log(isAuth);

  if (localStorage.getItem("token")) {
    return (
      <div className="App">
        <Sidebar />
        <AppRouter />
      </div>
    );
  } else {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
