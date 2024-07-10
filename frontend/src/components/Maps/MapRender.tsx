import React, { useRef, useEffect, useState } from 'react';
import 'ol/ol.css';
import { Map as OpenLayerMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import ScaleLine from 'ol/control/ScaleLine.js';
import layers from './Layers';
import { useMap } from './MapProvider';

const MapRender = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const scaleLineControl = new ScaleLine();

  const {setMap, setCurrentLayer} = useMap();

  useEffect(() => {
    if (!mapRef.current) return;

    const mapObj = new OpenLayerMap({
      view: new View({
        center: fromLonLat([171.03033091083554, -42.71478588312042]),
        zoom: 17,
      }),
      layers: [layers.satelliteView],
      controls: [scaleLineControl], 
    });

    mapObj.setTarget(mapRef.current);
    setMap(mapObj);
    setCurrentLayer(layers.streetView);

    return () => mapObj.setTarget('');
  }, []);

  return <div ref={mapRef} className="w-full h-full"/>
};

export default MapRender;
