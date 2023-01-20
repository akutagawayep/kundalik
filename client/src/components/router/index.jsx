import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes/routes";
import { MAIN_ROUTE } from "../../utils/consts";

const AppRouter = () => {
  // const isAuth = useSelector(state => state.isAuth);
  const isAuth = true

  return (
    <Routes>
      {isAuth && authRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path='*' element={<Navigate to={MAIN_ROUTE}/>}/>
    </Routes>
  );
};

export default AppRouter;
