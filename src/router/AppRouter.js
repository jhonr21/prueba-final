

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";



const AppRouter = () => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch,isLoggedIn]);
  return (
    <Router>
      <Routes>
      
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Login isAuthenticated={isLoggedIn}/>
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Register />
            </PublicRoute>
          }
        /> 
                
          <Route exact path="/about" element={<About />} /> 
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              < Register/>
            </PrivateRoute>
          }
        />
      </Routes>
  
    </Router>
  );
};

export default AppRouter;