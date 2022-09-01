import { useControl } from 'react-map-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = ({ setLng, setLat }) => {
  const ctrl = new MapboxGeocoder({
    accessToken:
      'pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg',
    marker: true,
    collapsed: false,
    placeholder: 'Busca tu dirección',
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
