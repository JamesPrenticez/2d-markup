import React, { type ReactElement, type ReactNode } from 'react'
import { MapProvider } from './providers/MapProvider'
import LayerSwitcher from './LayerSwitcher'
import MapRender from './MapRender'
import Scale from './Scale'
import ScaleControl from './ScaleControl'
// import DrawPolygon from './draw/xxxDrawPolygon'

const Map = () => {
  return (
    <MapWrapper>
      <LayerSwitcher />
      <Scale />
      <ScaleControl />
      {/* <DrawPolygon /> */}
      <MapRender />
    </MapWrapper>
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