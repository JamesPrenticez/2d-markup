import React, { type ChangeEvent} from 'react'
import { useMap } from './providers/MapProvider';
import layers from './Layers';

const LayerSwitcher = () => {

  const {
    map,
    setMap,
    currentLayer,
    setCurrentLayer
  } = useMap();

  const handleLayerChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!map) return;
    
    const selectedLayer = event.target.value === 'street' ? layers.streetView : layers.satelliteView;

    if (currentLayer) {
      map.removeLayer(currentLayer);
    }

    map.addLayer(selectedLayer);
    setCurrentLayer(selectedLayer);
  };

  return (
    <select onChange={handleLayerChange} className="absolute bottom-[10px] right-[10px]  z-10 border-2 text-black outline-none">
      <option value="street">Street View</option>
      <option value="satellite">Satellite View</option>
    </select>
  )
}

export default LayerSwitcher;