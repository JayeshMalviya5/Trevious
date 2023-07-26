import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/Landing";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:key" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
