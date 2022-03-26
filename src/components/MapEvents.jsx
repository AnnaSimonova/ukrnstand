import { useCallback, useEffect, useState } from "react";
import { createElementHook, useLeafletContext } from "@react-leaflet/core";
import { useMap, useMapEvents, MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

const latLngArrayToString = (ll) => {
  return "[" + ll.lat.toFixed(5) + ", " + ll.lng.toFixed(5) + "]";
};

const MapEvents = ({
  centerMap,
  setCenterMap,
  mouseLocation,
  setMouseLocation,
  setMapCenter,
  zoom,
  setZoom,
  zocalo,
  setZocalo,
}) => {
  let mrkCurrentLocation;

  const [popZokalo, setPopZokalo] = useState(null);
  const myMap = useMap();

  useEffect(() => {
    centerMap && myMap.locate() && console.log("clicked");
    setCenterMap(false);
  }, [centerMap]);

  // Popup Creationg
  // useEffect( () => {
  //   L.popup().setLatLng([19.43262, -99.13325]).setContent("<h2>Zocalo</h2>");
  // })

  useEffect(() => {
    // zoom to and set zoom level
    zocalo && myMap.setView([19.4363, -99.1325], 17);
  }, [zocalo]);

  // uses an interval to call the locate function
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     myMap.locate();
  //   }, 7000);
  //   return () => clearInterval(interval);
  // }, []);

  const getLocation = (e) => {
    //if (mrkCurrentLocation) mrkCurrentLocation.remove();

    // neeed to give it a name if wish to delete from map

    // circle marker can also take a radius -== uses pixels
    //circle takes a radius in meters -- alwasy a hundred meters in size
    //mrkCurrentLocation = L.circleMarker(e.latlng).addTo(map);
    let mrkCurrentLocation = L.circle(e.latlng, {
      radius: e.accuracy / 2,
    }).addTo(map);
    map.setView(e.latlng, 14);
  };

  const map = useMapEvents({
    // click: (e) => {
    //   if (e.originalEvent.shiftKey) {
    //     alert(map.getZoom());
    //   } else {
    //     alert(e.latlng.toString());
    //   }
    //   // map.locate();
    // },
    // // context menu is right click
    // contextmenu: (e) => {
    //   var dtCurrentTime = new Date();
    //   L.marker(e.latlng)
    //     .addTo(map)
    //     .bindPopup(e.latlng.toString() + "<br />" + dtCurrentTime.toString());
    // },

    // // add a map on key press -- handle found or error
    // keypress: (e) => {
    //   if (e.originalEvent.key == "l") {
    //     // calls the OS location and if finds -- triggers the found if not do trigger not found
    //     map.locate();
    //   }
    // },

    // lift this funciton up

    // locationfound: (e) => {
    //   mrkCurrentLocation && mrkCurrentLocation.remove();

    //   // neeed to give it a name if wish to delete from map

    //   // circle marker can also take a radius -== uses pixels
    //   //circle takes a radius in meters -- alwasy a hundred meters in size
    //   //mrkCurrentLocation = L.circleMarker(e.latlng).addTo(map);
    //   mrkCurrentLocation = L.circle(e.latlng, {
    //     radius: e.accuracy / 2,
    //   }).addTo(map);
    //   map.setView(e.latlng, 14);
    // },

    locationfound: (e) => {
      // this not requried in this implimentation as already true
      // if (mrkCurrentLocation) {
      //   console.log("trie");
      // }

      // neeed to give it a name if wish to delete from map

      // circle marker can also take a radius -== uses pixels
      //circle takes a radius in meters -- alwasy a hundred meters in size
      //mrkCurrentLocation = L.circleMarker(e.latlng).addTo(map);
      mrkCurrentLocation = L.circle(e.latlng, {
        radius: e.accuracy / 2,
      }).addTo(map);
      map.setView(e.latlng, 14);
    },

    locationerror: (e) => {
      console.log(e);
      alert("location not found");
    },
    zoomend: () => {
      let localZoom = map.getZoom();
      setZoom(localZoom);
    },
    //panning
    moveend: () => {
      let center = latLngArrayToString(map.getCenter());
      console.log(center);
      setMapCenter(center);
    },
    // mouse move
    mousemove: (e) => {
      // let mouseLoc = e.latlng.toString();
      let mouseLoc = latLngArrayToString(e.latlng);
      setMouseLocation(mouseLoc);
    },
  });
  return null;
};
export default MapEvents;
