// Create a new overlay to display the length or perimeter next to the geometry
lengthDisplay = new Overlay({
  position: geom instanceof LineString ? geom.getLastCoordinate() : geom.getInteriorPoint().getCoordinates(),
  element: document.createElement('div'),
});

// Set content of the overlay to display the length or perimeter
lengthDisplay.getElement().innerHTML = lengthText;

// Add the overlay to the map
map.addOverlay(lengthDisplay);