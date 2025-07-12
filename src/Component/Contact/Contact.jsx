import React from 'react'
import "./Contact.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
export default function Contact() {

    const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const message = formData.get("umassage")?.trim();

  // Validate empty fields
  if (!name || !email || !message) {
    toast.warning("Please fill in all the fields!", {
      position: "top-right",
    });
    return; // stop form submission
  }

  try {
    formData.append("access_key", "fff54e3c-49ac-48a4-956b-b7e75fe397f0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Form submitted successfully!", {
        position: "top-right",
      });
      event.target.reset(); // optional: clear form
    } else {
      toast.error("Something went wrong!");
    }
  }
  catch (error) {
  toast.error("Network error or invalid response!");
}
  
};


  return (
    <>
    <Navbar/>

<div id='Contact' className='Contact'>
    <div className='container '>
    <h1 className='contact-text'>Contact</h1>
  <div className='row gap-3 py-3'>
      
    <div className=" col-lg-12 col-md-6 ">
    <form onSubmit={onSubmit}  className="contact-right">
    <div className='text-start pb-3'>

          <label className='form-label'>Your Name</label>
          <input className='form-control' type='text' name= 'name'/>
        </div>
    <div className='text-start pb-3'>
          <label className='form-label'>Your Email</label>
          <input className=' form-control' type='email' name= 'email'/>
        </div>
        <div className='mb-3'>
        <label for="" class='form-label'>Write your message</label>
       <textarea className= 'form-control'name='umassage'   rows="5"/>
      </div>
      <button type='submit' className='contact-submit'>Send</button>
    
        
    </form>

    </div>


 
 
    
  </div>
</div>
</div>
<Footer/>
<ToastContainer/>

    </>
  )
}
