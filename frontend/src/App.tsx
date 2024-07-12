import React from 'react';
import { 
  LeftBar,
  Map,
  RightBar
} from "@components"
import { project } from "@constants"
import { MapProvider } from '@components/Maps/providers/MapProvider';
import { DrawingToolsProvider } from '@components/Maps/providers/DrawingToolsProvider';
import { DimGroupProvider } from '@components/Maps/providers/DimGroupProvider';

function App() {
  return (
  <div className="min-h-screen text-gray-50 flex flex-col bg-black/95">
      <header className="h-[80px] flex items-center text-2xl font-semibold p-4 text-yellow-400">{project.title.toUpperCase()}</header>

      <div className="grid grid-cols-[320px_1fr_320px] grow">
        <MapProvider>
          <DrawingToolsProvider>
            <DimGroupProvider>
              <LeftBar />
              <Map />
              <RightBar /> 
            </DimGroupProvider>
          </DrawingToolsProvider>
        </MapProvider> 
      </div>
      
      <footer className="h-[80px] flex items-center p-4 justify-center font-thin text-gray-200">All rights reserved - 2024</footer> 
  </div>
  )
}

export default App
