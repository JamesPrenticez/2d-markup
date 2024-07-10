// @ts-nocheck

import React, { useEffect, useState } from 'react';
import { Map as OpenLayerMap } from 'ol';
import { getCenter, getWidth } from 'ol/extent';
import { METERS_PER_UNIT } from 'ol/proj/Units';
import { useMap } from './MapProvider';

const Scale = () => {
  const { map } = useMap();
  const [scale, setScale] = useState<number>(0);



  const calculateScale = () => {
    const view = map.getView();
    const resolution = view.getResolution();
    const units = view.getProjection().getUnits();
    const dpi = 25.4 / 0.28;
    const mpu = METERS_PER_UNIT[units];
    const scale = resolution * mpu * 39.37 * dpi;
    return scale;
  }

  useEffect(() => {
    if (!map) return;

    const updateScale = () => {
      const scale = calculateScale();
      setScale(scale);
    };

    map.on('moveend', updateScale);
    updateScale(); // Initial scale calculation

    return () => {
      map.un('moveend', updateScale);
    };
  }, [map]);

  return (
    <div className="absolute z-10 bg-white rounded top-[10px] right-[10px] text-black px-1">
      Scale: 1 : {Math.round(scale).toLocaleString()}
    </div>
  );
};

export default Scale;
