import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Contact from "./screens/Contact";
// import Activate from "./auth/Activate";
import NotFound from "./auth/NotFound";
// import AdminRoute from "./auth/AdminRoute";
// import PrivateRoute from "./auth/PrivateRoute";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
// import Private from "./core/Private";
// import Admin from "./core/Admin";
// import Forgot from "./auth/Forgot";
// import Reset from "./auth/Reset";
import Mark from "./screens/Mark";
import EditMark from "./screens/EditMark";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/auth/activate/:token" element={<Activate />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/auth/password/forgot" element={<Forgot />} />
        <Route path="/auth/password/reset/:token" element={<Reset />} /> */}

        {/* <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        /> */}

        {/* <Route
          path="/mark"
          element={
            <PrivateRoute>
              <Mark />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/editmark"
          element={
            <PrivateRoute>
              <EditMark />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;

// import React from 'react';

// const Routing = () => {
//   return <div>hi</div>;
// };

//export default Routing;
