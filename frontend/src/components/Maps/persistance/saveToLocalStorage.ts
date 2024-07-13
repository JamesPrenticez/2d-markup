function saveToLocalStorage(key: any, data: any){
  localStorage.setItem(key, data);
}

    // // Save the GeoJSON string to localStorage
    // const feature = e.feature;
    // const geojson = new GeoJSON();
    // // const geojsonStr = geojson.writeFeature(feature);
    // const geojsonStr = geojson.writeFeature(feature, {
    //   featureProjection: 'EPSG:3857' // Ensure the feature is written with the correct projection
    // });
    // saveGeoJSONToLocalStorage(geojsonStr);
