import React, { createContext, useContext, useState, type ReactNode } from 'react';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Options } from 'ol/Collection';
import layers from "./Layers"
import VectorSource from 'ol/source/Vector';
import type Draw from 'ol/interaction/Draw';

interface Context {
  source: VectorSource;
  draw: Draw | null;
  setDraw: (draw: Draw | null) => void;
};

const DrawingToolsContext = createContext<Context | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const DrawingToolsProvider = ({ children }: ProviderProps) => {
  // Drawing
  const [source] = useState(new VectorSource());
  const [draw, setDraw] = useState<Draw | null>(null);


  const value = {
    source,
    draw,
    setDraw
  }

  return <DrawingToolsContext.Provider value={value}>{children}</DrawingToolsContext.Provider>;
  
};

export const useDrawingTools = () => {
  const context = useContext(DrawingToolsContext);
  if (!context) {
    throw new Error('useDrawing tools must be used within a DrawingToolsProvider');
  }
  return context;
};
