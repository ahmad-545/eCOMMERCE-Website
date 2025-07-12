import React from 'react'
import { ErrorMessage } from 'formik'
export default function Redmassage({name}) {
  return (
    <>
     <div style={{color:'red'}}>
        <ErrorMessage name={name} />
        </div>
        
    </>
  )
}
