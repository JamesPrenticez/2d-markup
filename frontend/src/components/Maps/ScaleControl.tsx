// @ts-nocheck
import React from 'react';
import { Map as OpenLayerMap } from 'ol';
import { METERS_PER_UNIT } from 'ol/proj/Units';
import { useMap } from './MapProvider';

const scales = [50, 100, 200, 500, 1000];

const ScaleControl = () => {
  const { map } = useMap();

  const calculateResolution = (scale: number, view: View): number => {
    const units = view.getProjection().getUnits();
    const dpi = 25.4 / 0.28; // Dots per inch
    const mpu = METERS_PER_UNIT[units];
    const resolution = scale / (mpu * 39.37 * dpi); // 39.37 is the conversion from meters to inches
    return resolution;
  };

  const setScale = (scale: number) => {
    if (!map) return;
    const view = map.getView();
    const resolution = calculateResolution(scale, view);
    view.setResolution(resolution);
  };

  const handleChange = () => {
    if (!map) return;
    const selectedValue = event.target.value;
    setScale(selectedValue);
  }

  return (
  <>
    <select 
      className="absolute top-[40px] right-[10px] z-10 px-1 text-black outline-none rounded bg-white cursor-pointer"
      onChange={handleChange}
    >
      {scales.map((scale) => (
        <option key={`scale-${scale}`} value={scale}>1:{scale}</option>
      ))}
    </select>

  </>

  );
};

export default ScaleControl;
