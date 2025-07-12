import { Field, Formik } from 'formik';
import React from 'react'
import * as yap from 'yup';
import Redmassage from '../Login/Redmassage';
import { Form } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function Login() {


    let Validation =yap.object({
        name:yap.string().min(3).max(20).required("Please Enter Your Name"),
        email:yap.string().email().required("Please Enter Your Email"),
        password:yap.string().min(6)
        .required("please enter your password")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter  Strong Password"),
        conpassword:yap.string()
    .required("Comfirm Password Is Must")
    .oneOf([yap.ref('password'),null],"Both Password Must Match")
    
       
    })
  return (
    <>
    <Navbar/>


     <div className='container text-align-center mt-5 mb-5 p-5'>
      
      <div className='row d-flex justify-content-center  align-items-center   '>
        <div className='col-md-5  mt-5 bg-primary-subtle rounded px-5 py-2 '>
          <h1 className='text-center '>Login</h1>
          <Formik
          validationSchema={Validation}
           initialValues={{name:'',email:'',password:'',conpassword:''}}
          onSubmit={(values)=>{
            console.log(values);
          }}
          >
            <Form>
            <div className='text-start pb-3'>
              <label className='form-label'>Name</label>
              <Field  className='form-control' type='text' name= 'name'/>
              <Redmassage name='name'/>
             
            </div>
            <div className='text-start pb-3'>
              <label className='form-label'>Email</label>
              <Field  className='form-control' type='text' name= 'email'/>
              <Redmassage name='email'/>
             
            </div>
            <div className='text-start pb-3'>
              <label className='form-label'>Password</label>
              <Field  className='form-control' type='password' name= 'password'/>
              <Redmassage name='password'/>
            </div>
            <div className='text-start pb-3'>
              <label className='form-label'>Comfirm-Password</label>
              <Field  className='form-control' type='password' name= 'conpassword'/>
              <Redmassage name='conpassword'/>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3 mb-3">
  Login
</button>
            </Form>
          </Formik>
        
         

        </div>

      </div>

    </div>
   

<Footer/>

    </>
  )
}

export default Login

