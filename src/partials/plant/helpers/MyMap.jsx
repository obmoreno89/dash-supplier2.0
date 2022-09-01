import React, { useRef, useEffect, useContext } from 'react';

import ReactMapGL, {
  Marker,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import StateContext from '../../../context/StateContext';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from './Geocoder';

const accessToken =
  'pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg';

const MyMap = () => {
  const mapRef = useRef();

  const { setLat, setLng, lat, lng } = useContext(StateContext);

  const getMap = async () => {
    if (!lng && !lat) {
      fetch('https://ipapi.co/json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
            zoom: 16,
          });
          setLat(data.latitude);
          setLng(data.longitude);
        });
    }
  };

  useEffect(() => {
    getMap();
  }, []);

  return (
    <>
      <div className='map-container'>
        <ReactMapGL
          ref={mapRef}
          mapboxAccessToken={accessToken}
          initialViewState={{ longitude: lng, latitude: lat, zoom: 8 }}
          mapStyle='mapbox://styles/mapbox/streets-v11'>
          <Marker
            latitude={lat}
            longitude={lng}
            draggable
            onDragEnd={(e) => {
              setLng(e.lngLat.lng);
              setLat(e.lngLat.lat);
            }}
          />

          <NavigationControl position='bottom-right' />
          <GeolocateControl
            position='top-left'
            trackUserLocation
            onGeolocate={(e) => {
              setLng(e.coords.longitude);
              setLat(e.coords.latitude);
            }}
          />

          <Geocoder />
        </ReactMapGL>
      </div>
    </>
  );
};

export default MyMap;
