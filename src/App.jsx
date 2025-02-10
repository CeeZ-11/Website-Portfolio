import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Website-Portfolio">
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
