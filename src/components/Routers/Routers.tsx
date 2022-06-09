import { Route, Routes } from 'react-router-dom';
import { routes } from 'data/routers';

//enumeration of routers
const Routers = () => (
  <Routes>
    {routes.map(({ path, Component, name }) => (
      <Route key={name} path={path} element={<Component />} />
    ))}
  </Routes>
);

export default Routers;
