import React, { useState } from 'react'
import { capitalizeFirstLetter } from '@utils';
import Icon from '@icons';
import { useMap } from '@components/Maps/providers/MapProvider';

import { useDrawingTools } from '@components/Maps/providers/DrawingToolsProvider';
import { handleDrawing, finishDrawing } from '@components/Maps/draw';
import { DrawingToolType, ToolName } from '@models';
import { drawingTools } from '@components/Maps/draw/drawingTools';
import { useDimGroups } from '@components/Maps/providers/DimGroupProvider';
import { twMerge } from 'tailwind-merge';

const LeftBar = () => {
  const { map } = useMap();
  const { getSourceByDimGroupUuid, draw, setDraw } = useDrawingTools();
  const { setDimGroups, activeDimGroupUuid } = useDimGroups();

  const [activeTool, setActiveTool] = useState<ToolName | null>(null); // move to provider?

  const handleClick = (toolName: ToolName) => {
    console.log(activeDimGroupUuid)
    if(!activeDimGroupUuid) return;
    const source = getSourceByDimGroupUuid(activeDimGroupUuid)
    console.log(source)
    setActiveTool(toolName)
    handleDrawing({type: DrawingToolType.POLYGON, map, source, setDraw, setDimGroups})
  }

  // On Key Down - Finish Drawing early

  return (
    <div className="bg-yellow-900 p-4 text-gray-200">
      <h1 className="text-lg font-semibold mb-4">Drawing Tools</h1>

      {drawingTools.map((item, index) => {
        return (
        <button 
          key={`${item.name}-${index}`}
          className={twMerge(`
            flex space-x-2
            border
            px-1
            py-2
            border-gray-200
            bg-yellow-800 
            hover:bg-yellow-700
            hover:border-yellow-500
            hover:ring-2
            hover:text-white rounded
            `, 
              activeDimGroupUuid === null ? "disabled:cursor-not-allowed bg-red-500" : "cursor-pointer",
              activeTool ? "ring-yellow-500" : ""
            )
          }
          onClick={() => handleClick(item.name)}
          // disabled={true}
        >
          <Icon 
            className="text-white"
            type={item.icon} 
            width={24}
          />
          <h2 className="">
            {capitalizeFirstLetter(item.name)}
          </h2>


        </button>
        )
        })}
    </div>
  )
}

export default LeftBar;