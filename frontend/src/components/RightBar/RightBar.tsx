import { useDimGroups } from '@components/Maps/providers/DimGroupProvider'
import React from 'react'

const RightBar = () => {
  const { dimGroups } = useDimGroups();

  return (
    <div className="bg-blue-500">
      <h1>Dimention Groups</h1>

      {dimGroups &&
        dimGroups.map((item, index) => (
          <div className="flex">
            <h4>{item.name}</h4>
            <span className="ml-auto flex items-baseline">
              <p>{item.quantity}</p>
              <small className="align-baseline">{item.unit}</small>
            </span>
          </div>
        ))
      
      }
    </div>
  )
}

export default RightBar