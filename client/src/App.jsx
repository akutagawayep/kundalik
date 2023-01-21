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
