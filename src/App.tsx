import { Route, Routes } from "react-router-dom";
import "./styles/index.css"
import Layout from "./layouts/Layout";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path={""} element={<Dashboard />} />
        {/* {routeObj.map(({ name, path }) => (
          <Route path={path} element={<Dashboard name={name} />} />
        ))} */}
      </Route>
    </Routes>
  );
}

export default App;
