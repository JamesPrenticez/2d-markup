import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { IDimGroup } from '@models';

interface Context {
  dimGroups: IDimGroup[];
  // setDimGroups: (dimGroup: IDimGroup[]) => void;
  setDimGroups: any; // TODO fix typescripts complaing like a lil girl
  activeDimGroupUuid: IDimGroup["uuid"] | null;
  setActiveDimGroupUuid: any; // TODO
};

const DimGroupContext = createContext<Context | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const DimGroupProvider = ({ children }: ProviderProps) => {
  const [dimGroups, setDimGroups] = useState<IDimGroup[]>([]);
  const [activeDimGroupUuid, setActiveDimGroupUuid] = useState<IDimGroup["uuid"] | null>(null)

  const value = {
    dimGroups,
    setDimGroups,
    activeDimGroupUuid,
    setActiveDimGroupUuid
  }

  return <DimGroupContext.Provider value={value}>{children}</DimGroupContext.Provider>;
};

export const useDimGroups = () => {
  const context = useContext(DimGroupContext);
  if (!context) {
    throw new Error('useDimGroups must be used within a DimGroupsProvider');
  }
  return context;
};
