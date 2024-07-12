// @ts-nocheck

import React, { useRef, useEffect, useState } from 'react';
import { useMap } from './MapProvider';
import 'ol/ol.css';
import Draw from 'ol/interaction/Draw';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Style, Fill, Stroke } from 'ol/style';
import { getArea, getLength } from 'ol/sphere';
import Overlay from 'ol/Overlay';
import Polygon from 'ol/geom/Polygon';
import { useDrawingTools } from './DrawingToolsProvider';
import { startDrawing, finishDrawing } from './draw/handleDrawing';


const DrawPolygon = () => {
  const {map} = useMap(); 
  const {source, draw, setDraw} = useDrawingTools();

  // const addInteraction = () => {
  //   if (!map) return;
  //   const drawInteraction = new Draw({
  //     source: source,
  //     type: 'Polygon',
  //   });
  //   map.addInteraction(drawInteraction);
  //   setDraw(drawInteraction);
  // };

  // const finishDrawing = () => {
  //   if (draw) {
  //     draw.finishDrawing();
  //     map.removeInteraction(draw);
  //     setDraw(null);
  //   }
  // };

  const measurePolygon = (polygon) => {
    const area = getArea(polygon);
    const coordinates = polygon.getCoordinates()[0];
    let length = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
      const segment = new Polygon([coordinates.slice(i, i + 2)]);
      length += getLength(segment);
    }
    return { area, length };
  };

  useEffect(() => {
    if (!map) return;

    source.on('addfeature', (event) => {
      const polygon = event.feature.getGeometry();
      const { area, length } = measurePolygon(polygon);
      // alert(`Area: ${area.toFixed(2)} m², Length: ${length.toFixed(2)} m`);
    });
  }, [map]);

  return (
    <div className="buttons">

      {/* <button onClick={() => startDrawing({type: DrawingToolType.POLYGON, map, source, setDraw})}>
        Start Drawing
      </button>

      <button onClick={() => finishDrawing({map, draw, setDraw})}>
        Finish Drawing
      </button> */}
      
    </div>
  );
};

export default DrawPolygon;