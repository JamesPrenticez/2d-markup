import React from 'react'
import { useDimGroups } from '@components/Maps/providers/DimGroupProvider'
import { createValidationSchema, v, resolver } from '@lib/FormValidation/validator';
import { Button, ErrorMessage, InputText } from '@ui';
import useForm from '@lib/FormValidation/useForm';
import { Label } from '@ui/Label';
import { useDrawingTools } from '@components/Maps/providers/DrawingToolsProvider';
import { IDimGroup } from '@models';
import { twMerge } from 'tailwind-merge';
import { generateUuid } from '@utils';

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
        dimGroups.map((item, index) => (
          <div 
            key={`${item.name}-${index}`}
            className={twMerge("flex", activeDimGroupUuid ? "bg-green-500" : "bg-gray-400")}
            onClick={() => handleSelectDimGroup(item.uuid)}
          >
            <h4>{item.name}</h4>
          </div>
        ))
      
      }
    </div>
  )
}

export default RightBar;


{/* <span className="ml-auto flex items-baseline">
<p>{item.quantity}</p>
<small className="align-baseline">{item.unit}</small>
</span> */}