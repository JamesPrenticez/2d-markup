import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import { Map as OpenLayerMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { Tile } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import ScaleLine from 'ol/control/ScaleLine.js';

const Map = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const scaleLineControl = new ScaleLine();

  useEffect(() => {
    if (!mapRef.current) return;

    const mapObj = new OpenLayerMap({
      view: new View({
        center: fromLonLat([171.03033091083554, -42.71478588312042]),
        zoom: 17,
      }),
      layers: [new Tile({ source: new OSM() })],
      controls: [scaleLineControl], 
    });

    mapObj.setTarget(mapRef.current);

    return () => mapObj.setTarget('');
  }, []);

  return (
    <div 
      ref={mapRef}
      className="w-full h-full"
    />
  )
  
};

export default Map;
