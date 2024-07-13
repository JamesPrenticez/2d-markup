import React, { createContext, useContext, useState, type ReactNode } from 'react';
import VectorSource from 'ol/source/Vector';
import type Draw from 'ol/interaction/Draw';
import { IDimGroup } from '@models';

interface SourceConfig {
  dimGroupUuid: IDimGroup["uuid"],
  name: string;
  source: VectorSource;
}

interface Context {
  sources: SourceConfig[];
  addSource: (dimGroupUuid: IDimGroup["uuid"], name: string) => void;
  removeSource: (dimGroupUuid: string) => void;
  getSourceByDimGroupUuid: (dimGroupUuid: string) => VectorSource;
  draw: Draw | null;
  setDraw: (draw: Draw | null) => void;
};

const DrawingToolsContext = createContext<Context | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const DrawingToolsProvider = ({ children }: ProviderProps) => {
  const [sources, setSources] = useState<SourceConfig[]>([]);
  const [draw, setDraw] = useState<Draw | null>(null);

  const addSource = (dimGroupUuid: IDimGroup["uuid"], name: string) => {
    setSources(prevSources => [
      ...prevSources,
      { dimGroupUuid, name, source: new VectorSource() }
    ]);
  };

  const removeSource = (dimGroupUuid: string) => {
    setSources(prevSources => prevSources.filter(source => source.dimGroupUuid !== dimGroupUuid));
  };

  const getSourceByDimGroupUuid = (dimGroupUuid: string): VectorSource => {
    const sourceConfig = sources.find(source => source.dimGroupUuid === dimGroupUuid);
    if (!sourceConfig) {
      throw new Error(`Source with dimGroupUuid ${dimGroupUuid} not found`);
    }
    return sourceConfig.source;
  };

  const value = {
    sources,
    addSource,
    removeSource,
    getSourceByDimGroupUuid,
    draw,
    setDraw
  };

  return <DrawingToolsContext.Provider value={value}>{children}</DrawingToolsContext.Provider>;
};

export const useDrawingTools = () => {
  const context = useContext(DrawingToolsContext);
  if (!context) {
    throw new Error('useDrawingTools must be used within a DrawingToolsProvider');
  }
  return context;
};
