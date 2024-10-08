import React from 'react'

function ErrorMessage({message}: {message: string | null | undefined}){
  return (
    <p className='text-red-600 text-[12px] italic absolute -bottom-[4px] left-[8px]'>
      {message}
    </p>
  )
}

export default ErrorMessage;