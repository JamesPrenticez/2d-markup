import React, { useEffect } from 'react'
import { useDimGroups } from '@components/Maps/providers/DimGroupProvider'
import { createValidationSchema, v, resolver } from '@lib/FormValidation/validator';
import { Button, ErrorMessage, InputText } from '@ui';
import useForm from '@lib/FormValidation/useForm';
import { Label } from '@ui/Label';
import { useDrawingTools } from '@components/Maps/providers/DrawingToolsProvider';
import { IDim, IDimGroup } from '@models';
import { formatNumber, generateUuid } from '@utils';
import { localStorageKey } from '@constants';

import { loadFromLocalStorage,  } from '@components/Maps/persistance';
import { saveToLocalStorage } from '@components/Maps/persistance/saveToLocalStorage';
import GeoJSON from 'ol/format/GeoJSON';

const RightBar = () => {
  const { 
    dimGroups,
    setDimGroups,
    activeDimGroupUuid,
    setActiveDimGroupUuid
  } = useDimGroups();

  const { sources, addSource, getSourceByDimGroupUuid } = useDrawingTools();

  const validationSchema = createValidationSchema({
    name: v.required().string().minLength(3),
  })

  const initialData = {
    uuid: "",
    name: ""
  }

  const { 
    formData,
    formErrors,
    handleChange,
    setFieldValue,
    handleSubmit
  } = useForm<IDimGroup>({
    initialState: initialData, 
    validationSchema: validationSchema,
    validatorFn: resolver,
    onSubmit: createNewDimGroup
  });

  function createNewDimGroup(){
    const newDimGroup: IDimGroup = {
      uuid: `temp-${generateUuid()}`,
      name: formData.name,
    }
    // TODO
    // @ts-ignore
    setDimGroups(prev => [...prev, newDimGroup])
    addSource(newDimGroup.uuid, newDimGroup.name, );
  }

  function handleSelectDimGroup(uuid: IDimGroup["uuid"]) {
    setActiveDimGroupUuid(uuid);
  }

  function handleSave(){
    saveToLocalStorage(localStorageKey, dimGroups)
    console.log("saved")
  }

  function handleLoad(){
    const data = loadFromLocalStorage(localStorageKey, setDimGroups)
    for (const dimGroup of data) {
      addSource(dimGroup.uuid, dimGroup.name);
    }
  }

  const processDims = () => {
    dimGroups.forEach((dimGroup: IDimGroup) => {
      if (dimGroup.dims) {
        dimGroup.dims.forEach((dim: IDim) => {
          if (dim.geoData) {
            const geojson = new GeoJSON();
            const features = geojson.readFeatures(dim.geoData, {
              featureProjection: 'EPSG:3857', // Adjust projection if needed
              dataProjection: 'EPSG:4326' // Assuming the GeoJSON data is in EPSG:4326 (common for GeoJSON)
            });

            const source = getSourceByDimGroupUuid(dimGroup.uuid);
            source.addFeatures(features);
          }
        });
      }
    });
  };

  useEffect(() => {
    if(sources.length)
    processDims()
  }, [sources])

  return (
    <div className="bg-blue-500">
      <h1>Dimention Groups</h1>

      {/* This turns into a modal eventually */}

      <Label htmlFor="name" value="Name" className="flex space-x-2">
        <InputText 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <ErrorMessage message={formErrors.name.errorMessage}/>

        <Button onClick={handleSubmit}>
          +
        </Button>
      </Label>


      {dimGroups &&
        dimGroups.map((group, index) => (
          <div 
            key={`${group.name}-${index}`}
            className={activeDimGroupUuid ? "bg-green-500" : "bg-gray-400"}
            onClick={() => handleSelectDimGroup(group.uuid)}
          >
              <h4>{group.name}</h4>
              {group.dims?.map((dim, index) => (
                <div
                  key={`${dim.name}-${index}`}
                  className="bg-purple-500 flex "
                >
                  <h5>{dim.name}</h5>
                  <span className="ml-auto flex items-baseline">
                    <p>{formatNumber(dim.area ?? 0)}</p>
                    <small className="align-baseline">{dim.unit}</small>
                  </span>
                </div>
              ))}
          </div>
        ))
      
      }

      <div>
        <Button onClick={() => console.log(sources)}>
          Source
        </Button>
        <Button onClick={handleSave}>
          Save
        </Button>
        <Button onClick={handleLoad}>
          Load
        </Button>
      </div>


    </div>
  )
}

export default RightBar;


