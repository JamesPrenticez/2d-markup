import React, { Suspense } from 'react';
import { 
  LeftBar,
  Loading,
  Map,
  Navbar,
  RightBar,
  TopBar
} from "@components"
import { project } from "@constants"
import { MapProvider } from '@components/Maps/providers/MapProvider';
import { DrawingToolsProvider } from '@components/Maps/providers/DrawingToolsProvider';
import { DimGroupProvider } from '@components/Maps/providers/DimGroupProvider';
import { BottomBar } from '@components/BottomBar';
import Test from './Test';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div className="min-h-screen text-gray-50 flex flex-col bg-secondary font-outfit">
      {/* <Test /> */}


      <Suspense fallback={<Loading />}>
        {/* Layout */}
        <Navbar />

        <Routes>
          <Route path={"/"} element={
            <MapProvider>
              <DrawingToolsProvider>
                <DimGroupProvider>
                  <TopBar />
                    <div className="grid grid-cols-[320px_1fr_320px] grow">
                      <LeftBar />
                      <Map />
                      <RightBar /> 
                    </div>
                  <BottomBar /> 
                </DimGroupProvider>
              </DrawingToolsProvider>
            </MapProvider> 
          } />
        </Routes>
    </Suspense>
      
      <footer className="h-[80px] flex items-center p-4 justify-center font-thin text-gray-200">All rights reserved - 2024</footer> 

  </div>
  )
}

export default App;

