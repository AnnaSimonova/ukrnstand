import React from "react";
import Layout from "./core/Layout";
import HomeMap from "./screens/HomeMap";
import SideBar from "./screens/SideBar";

const App = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4">
          <SideBar />
        </div>
        <div className="col-md-8">
          <HomeMap></HomeMap>
        </div>
      </div>
    </Layout>
  );
};

export default App;
