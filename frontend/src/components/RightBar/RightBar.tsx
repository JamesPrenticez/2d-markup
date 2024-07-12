import React from 'react'
import { useDimGroups } from '@components/Maps/providers/DimGroupProvider'
import { createValidationSchema, v, resolver } from '@lib/FormValidation/validator';
import { Button, ErrorMessage, InputText } from '@ui';
import useForm from '@lib/FormValidation/useForm';
import { Label } from '@ui/Label';

interface CreateDimGroup {
  name: string;
}

const RightBar = () => {
  const { dimGroups } = useDimGroups();

  const validationSchema = createValidationSchema({
    name: v.required().string().minLength(3),
  })

  const initialData = {
    name: ""
  }

  const { 
    formData,
    formErrors,
    handleChange,
    setFieldValue,
    handleSubmit
  } = useForm<CreateDimGroup>({
    initialState: initialData, 
    validationSchema: validationSchema,
    validatorFn: resolver,
    onSubmit: handleSave
  });

  function handleSave(){
    alert(JSON.stringify(formData, null, 2))
    setFieldValue("name", "")
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