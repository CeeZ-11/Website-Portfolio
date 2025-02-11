import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MainLayout />
      </HashRouter>
    </div>
  );
}

export default App;
