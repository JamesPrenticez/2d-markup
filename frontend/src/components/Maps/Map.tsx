import React, { type ReactElement, type ReactNode } from 'react'
import { MapProvider } from './MapProvider'
import LayerSwitcher from './LayerSwitcher'
import MapRender from './MapRender'

const Map = () => {
  return (
    <MapProvider>
      <MapWrapper>
        <LayerSwitcher />
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