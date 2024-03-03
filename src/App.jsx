import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reports from "./screens/reports";
import Sidebar from "./components/sidebar";
import Menu from "./screens/menu";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          placeContent: "center",
          marginBottom: "20px",
        }}
      >
        <img src="/logo.svg" alt="logo" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Reports />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/orders" element={<Menu />} />
            <Route path="/qr-code" element={<Menu />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/payments" element={<Menu />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
