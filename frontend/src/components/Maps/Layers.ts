import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

const streetView = new TileLayer({ source: new OSM() });

const satelliteView = new TileLayer({
  source: new OSM({
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    maxZoom: 19
  })
});

const layers = {
  satelliteView,
  streetView
}

export default layers;