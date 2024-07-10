// @ts-nocheck
import React, { createContext, useContext, useState, type ReactNode } from 'react';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Options } from 'ol/Collection';
import layers from "./Layers"

interface Context {
  currentLayer: TileLayer<OSM> | null;
  setCurrentLayer: (layer: TileLayer<OSM>) => void;
};

const MapLayerContext = createContext<MapLayerContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const MapProvider = ({ children }: ProviderProps) => {
  const [map, setMap] = useState<OpenLayerMap | null>(null);
  const [currentLayer, setCurrentLayer] = useState<TileLayer<OSM> | null>(layers.satelliteView);

  const value = {
    map,
    setMap,
    currentLayer,
    setCurrentLayer
  }

  return <MapLayerContext.Provider value={value}>{children}</MapLayerContext.Provider>;
  
};

export const useMap = () => {
  const context = useContext(MapLayerContext);
  if (!context) {
    throw new Error('useMapLayer must be used within a MapLayerProvider');
  }
  return context;
};
