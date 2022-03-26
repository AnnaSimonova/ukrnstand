import React, { useEffect, useState } from "react";

const SideBar = () => {
  const handleBtn = () => {
    // navigate("/mark");
  };
  return (
    <div className="text-center">
      <div className="py-5">
        <button onClick={handleBtn} className="btn btn-warning">
          Add your mark
        </button>
      </div>
      <div>
        <table className="table table-striped">
          <caption>I stand with Ukraine</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
              <th scope="col">Comment</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((item) => ( */}
            <tr key="">
              <td>nam</td>
              <td>country</td>
              <td>comment</td>
            </tr>
            <tr key="">
              <td>nam</td>
              <td>country</td>
              <td>comment</td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
