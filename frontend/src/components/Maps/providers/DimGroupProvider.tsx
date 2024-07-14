import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { IDim, IDimGroup } from '@models';

interface Context {
  dimGroups: IDimGroup[];
  // setDimGroups: (dimGroup: IDimGroup[]) => void;
  setDimGroups: any; // TODO fix typescripts complaing like a lil girl
  activeDimGroupUuid: IDimGroup["uuid"] | null;
  setActiveDimGroupUuid: any; // TODO
  addDimToDimGroup: any; // TODO
};

const DimGroupContext = createContext<Context | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const DimGroupProvider = ({ children }: ProviderProps) => {
  const [dimGroups, setDimGroups] = useState<IDimGroup[]>([]);
  const [activeDimGroupUuid, setActiveDimGroupUuid] = useState<IDimGroup["uuid"] | null>(null)

  const addDimToDimGroup = (dimGroupUuid: IDimGroup["uuid"], newDim: IDim) => {
    setDimGroups((prevDimGroups) =>
      prevDimGroups.map((dimGroup) => {
        if (dimGroup.uuid === dimGroupUuid) {
          const newDims = [...(dimGroup.dims || [])];
          const newDimCount = newDims.length + 1;
          const newDimWithIncrementedName = {
            ...newDim,
            name: `${newDim.name}-${newDimCount}`,
          };
          newDims.push(newDimWithIncrementedName);
          return {
            ...dimGroup,
            dims: newDims,
          };
        }
        return dimGroup;
      })
    );
  };

  // const addDimToDimGroup = (newDim: IDim) => {
  //   if (!activeDimGroupUuid) return;
  //   setDimGroups((prevDimGroups) =>
  //     prevDimGroups.map((dimGroup) =>
  //       dimGroup.uuid === activeDimGroupUuid
  //         ? {...dimGroup, dims: [...(dimGroup.dims || []), newDim] }
  //         : dimGroup
  //     )
  //   );
  // };

  const value = {
    dimGroups,
    setDimGroups,
    activeDimGroupUuid,
    setActiveDimGroupUuid,
    addDimToDimGroup
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
