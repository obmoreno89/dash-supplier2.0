import React, { useState, useRef, useCallback, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import { AddressAutofill } from '@mapbox/search-js-react';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
mapboxgl.accessToken =
  'pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg';
const MyMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <>
      {/* Input form */}
      <label className='txt-s txt-bold color-gray mb3'>Address</label>
      <AddressAutofill
        accessToken={
          'pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg'
        }
        onRetrieve={handleRetrieve}>
        <input
          className='input mb12'
          placeholder='Start typing your address, e.g. 123 Main...'
          autoComplete='address-line1'
          id='mapbox-autofill'
        />
      </AddressAutofill>
      <p>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </p>
      <div ref={mapContainer} className='map-container' />
    </>
  );
};

export default MyMap;
