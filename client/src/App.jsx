import HomePage from "./pages/home";
import AuthorizedPage from "./pages/profile";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <AuthorizedPage/>
    </div>
  );
}

export default App;
