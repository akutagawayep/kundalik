import AppRouter from "./components/router";
import Sidebar from "./components/sidebar"
import "./styles/App.scss";

function App() {

  const isAuth = true;

  return (
    <div className="App">
      <div className="AppAuth">
        {isAuth && <Sidebar/>}
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
