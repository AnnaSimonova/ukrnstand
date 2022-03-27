import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import axios from "axios";

const HomeMap = () => {
  const position = [49.3, -124.3167];  
  let zoomValue;
  if (window.matchMedia('(max-width: 375px)').matches) {
    zoomValue = 0;
  } else if (window.matchMedia('(max-width: 767px)').matches) {
    zoomValue = 0.5;
  } else if (window.matchMedia('(max-width: 1024px)').matches) {
    zoomValue = 1.25;
  } else {
    zoomValue = 1.75;
  }
  return (
    <>
      <div className="row map-wrapper">
        <MapContainer center={[49, 31]} zoom={zoomValue}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default HomeMap;
