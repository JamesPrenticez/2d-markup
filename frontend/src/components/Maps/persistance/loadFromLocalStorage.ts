import VectorSource from "ol/source/Vector";
import GeoJSON from 'ol/format/GeoJSON';

export const loadGeoJSONFromLocalStorage = (source: VectorSource) => {
  const geojsonStr = localStorage.getItem('drawnPolygon');

  console.log(geojsonStr)

  if (geojsonStr) {
    const geojson = new GeoJSON();
    const features = geojson.readFeatures(geojsonStr, {
      
      // featureProjection: 'EPSG:3857', // Adjust projection if needed
      featureProjection: 'EPSG:3857', // Adjust projection if needed
      dataProjection: 'EPSG:4326' // Assuming the GeoJSON data is in EPSG:4326 (common for GeoJSON)
    });

    console.log(source)
    source.addFeatures(features);
    console.log('GeoJSON data loaded from localStorage.');
  } else {
    console.log('No GeoJSON data found in localStorage.');
  }
};