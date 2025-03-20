import { BrowserRouter } from "react-router";
import "./App.css";
import MainRoute from "./features/routing/Routes";

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
