import React, { useRef, useEffect, useState } from 'react';
import { Map as OpenLayerMap, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import ScaleLine from 'ol/control/ScaleLine.js';
import layers from './Layers';
import { useMap } from './providers/MapProvider';
import { createVectorLayer } from './LayersDrawing';

import 'ol/ol.css';
import { useDrawingTools } from './providers/DrawingToolsProvider';
import { Button } from '@ui';

const MapRender = () => {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const scaleLineControl = new ScaleLine();

  const {setMap, setCurrentLayer} = useMap();
  const { sources } = useDrawingTools();

  //TODO Load in drawing layers from save

  useEffect(() => {
    if (!mapRef.current) return;

    const drawingLayers = sources.map(sourceConfig => createVectorLayer(sourceConfig.source));

    const mapObj = new OpenLayerMap({
      view: new View({
        center: fromLonLat([171.03033091083554, -42.71478588312042]),
        zoom: 17,
        projection: 'EPSG:3857',
      }),
      layers: [layers.satelliteView, ...drawingLayers],
      controls: [scaleLineControl], 
    });

    mapObj.setTarget(mapRef.current);
    setMap(mapObj);
    setCurrentLayer(layers.streetView);

    console.log("map render")

    return () => mapObj.setTarget('');
  }, [sources]);

  return <div ref={mapRef} className="w-full h-full"/>
};

export default MapRender;
