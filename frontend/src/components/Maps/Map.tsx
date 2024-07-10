import React, { type ReactElement, type ReactNode } from 'react'
import { MapProvider } from './MapProvider'
import LayerSwitcher from './LayerSwitcher'
import MapRender from './MapRender'
import Scale from './Scale'
import ScaleControl from './ScaleControl'

const Map = () => {
  return (
    <MapProvider>
      <MapWrapper>
        <LayerSwitcher />
        <Scale />
        <ScaleControl />
        <MapRender />
      </MapWrapper>
    </MapProvider>
  )
}

export default Map;

const MapWrapper = ({ children }: { children: ReactNode}): ReactElement => {
  return (
    <div className="relative bg-black">
      {children}
    </div>
  )
}