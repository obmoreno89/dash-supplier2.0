import { useControl } from 'react-map-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from 'mapbox-gl';
import { useContext } from 'react';
import StateContext from '../../../context/StateContext';

const Geocoder = () => {
  const { setValue, setLng, setLat } = useContext(StateContext);
  const ctrl = new MapboxGeocoder({
    mapboxgl: mapboxgl,
    accessToken:
      'pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg',
    marker: true,
    collapsed: false,
    placeholder: 'Busca tu dirección',
    clearAndBlurOnEsc: true,
  }).on('result', function ({ result }) {
    setValue(result.place_name);
  });

  useControl(() => ctrl);
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;
    setLng(coords[0]);
    setLat(coords[1]);
  });

  return null;
};

export default Geocoder;
