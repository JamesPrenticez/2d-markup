import React, { useRef, useEffect } from 'react';
import { Map as OpenLayerMap, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import ScaleLine from 'ol/control/ScaleLine.js';
import layers from './Layers';
import { useMap } from './providers/MapProvider';
import { createVectorLayer } from './LayersDrawing';

import 'ol/ol.css';
import { useDrawingTools } from './providers/DrawingToolsProvider';

const MapRender = () => {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const scaleLineControl = new ScaleLine();

  const {setMap, setCurrentLayer} = useMap();
  const {source} = useDrawingTools();

  useEffect(() => {
    if (!mapRef.current) return;

    const mapObj = new OpenLayerMap({
      view: new View({
        center: fromLonLat([171.03033091083554, -42.71478588312042]),
        zoom: 17,
      }),
      layers: [layers.satelliteView, createVectorLayer(source)],
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
