import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/index.css"
import Layout from "./layouts/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import routes from "./routes";
import Others from "./pages/others/Others";


function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path={"/dashboard"} element={<Dashboard />} />
        {routes.map(({ name, path }) => (
          <Route path={path} element={<Others name={name} />} />
        ))}
        <Route path={""} element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
