// import React, { useState } from 'react'
// import { Input } from '@components/UI/input'
// import useForm from './useForm'
// import { v, createValidationSchema, resolver } from './validator'
// import { Select } from '@components/UI/select';
// import { Autocomplete } from '@components/UI/autocomplete';
// import { Button } from '@components/UI/button';

// interface IUser {
//   firstName: string;
//   lastName: string;
//   email: string;
//   country: string;
//   vehicle1: boolean;
// }

// const FormValidation = () => {
  
//   const mockData: IUser = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     vehicle1: true
//   } 

//   const validationSchema = createValidationSchema({
//     firstName: v.required().string().minLength(3),
//     lastName: v.required().string(),
//     email: v.required().email(),
//     country: v.required().string().minLength(1),
//     vehicle1: v.required().boolean(),
//   })

//   // console.log(validationSchema)

//   const { 
//     formData,
//     formErrors,
//     handleChange,
//     setFieldValue,
//     handleSubmit
//   } = useForm<IUser>({
//     initialState: mockData, 
//     validationSchema: validationSchema,
//     validatorFn: resolver,
//     onSubmit: handleSave // JS hoisting
//   });

//   const countries = [
//     {label:'New Zealand', value:'New Zealand'},
//     {label:'Australia', value:'Australia'},
//   ]

//   function handleSave(){
//     alert(JSON.stringify(formData, null, 2))
//   }

//   return (
//     <div className='flex flex-col gap-[32px] w-full px-32'>
//       <label htmlFor="firstName" className='relative'>
//         <p className='font-[500]'>First Name</p>
//         <Input 
//           id="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         /> 
//         <ErrorMessage message={formErrors.firstName.errorMessage}/>
//       </label>

//       <label htmlFor="lastName" className='relative'>
//         <p className='font-[500]'>Last Name</p>
//         <Input 
//           id="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         /> 
//         <ErrorMessage message={formErrors.lastName.errorMessage}/>
//       </label>

//       <label htmlFor="email" className='relative'>
//         <p className='font-[500]'>Email Address</p>
//         <Input 
//           id="email"
//           value={formData.email}
//           onChange={handleChange}
//         /> 
//         <ErrorMessage message={formErrors.email.errorMessage}/>
//       </label>

//       <label htmlFor="country" className='relative'>
//         <p className='font-[500]'>Country</p>
//         <Autocomplete
//           options={countries}
//           value={formData.country}
//           onChange={(newValue: string) => {
//             setFieldValue("country", newValue);
//           }}
//         /> 
//         <ErrorMessage message={formErrors.country.errorMessage}/>
//       </label>

//       <label htmlFor="vehicle1" className='relative'>
//          I have a bike
//         <input 
//           id="vehicle1"
//           type="checkbox"
//           name="vehicle1"
//           checked={formData.vehicle1}
//           onChange={(e) => {
//             setFieldValue("vehicle1", e.target.checked);
//           }}
//         />
//         <ErrorMessage message={formErrors.vehicle1.errorMessage}/>
//       </label>

//       <Button 
//         className='bg-green-600 hover:bg-green-500'
//         onClick={handleSubmit}
//       >
//         Submit
//       </Button>

//       <div>
//         <p><b>Note:</b> Everything on this page is a custom implementaion. </p>
//         <p>No libraries have been used... </p>
//         <p>Heavly inspired from yup and formik libraries</p>
//         <p>We have built:</p>
//         <ul>
//           <li>Chainable object notation for creating validationSchema</li>
//           <li>Validator Function to return isValid and the first errorMessage encountered</li>
//           <li>useForm hooks encaptulate and handle form state and changes</li>
//           <li>text input component</li>
//           <li>searchable dropdown select component with keyboard interactivity *focus stlying still TODO*</li>
//           <li>submit button</li>
//         </ul>
//       </div>
//     </div>
//   )
// }


// const ErrorMessage = ({message}: {message: string}) => {
//   return (
//     <p className='text-red-500 text-[12px] absolute -bottom-[18px] left-[8px]'>
//       {message}
//     </p>
//   )
// }

// export default FormValidation;

export default {}