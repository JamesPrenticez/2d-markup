import { Vector as VectorLayer } from 'ol/layer';
import { Fill, Stroke, Style } from 'ol/style';
import VectorSource from 'ol/source/Vector';

const createVectorLayer = (source: VectorSource) => {
  return new VectorLayer({
    source: source,
    style: new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)',
      }),
      stroke: new Stroke({
        color: '#ffcc33',
        width: 2,
      }),
    }),
  });
};

export {
  createVectorLayer
} 