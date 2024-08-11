import React from 'react'
import './Contact.css'
import { useFormik } from 'formik';
import { signUpSchemas } from '../../Schema';



const initialValues={
  name:"",
  email:"",
  message:"",
  password:"",
  Confirm_Password:""
}
const Contact = () => {
 
    // const [result, setResult] = React.useState("");
  
    // const onSubmit = async (event) => {
    //   event.preventDefault();
    //   setResult("Sending....");
    //   const formData = new FormData(event.target);
  
    //   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
    //   const response = await fetch("https://api.web3forms.com/submit", {
    //     method: "POST",
    //     body: formData
    //   });
  
    //   const data = await response.json();
  
    //   if (data.success) {
    //     setResult("Form Submitted Successfully");
    //     event.target.reset();
    //   } else {
    //     console.log("Error", data);
    //     setResult(data.message);
    //   }
    // };

  const {values,errors,handleBlur,handleChange,handleSubmit,touched}=  useFormik({
      initialValues:initialValues,
      validationSchema:signUpSchemas,
      onSubmit:(values,Action)=>{
        // console.log(values);
        Action.resetForm();
      }
    })
    // console.log(Formik)
    // console.log(errors)
  
  return (
    <div>
      <h1 className='text-[40px] a-600 text-center mt-4 contact'>Contact</h1>
      <form onSubmit={handleSubmit} className=' my-4 flex justify-center'>
        <div className=' a_contact p-5 w-50 bg-[#3276ae]'>
          <div className='my-3'>
            <input type="text" name="name" className='py-2 w-100 ps-2'  placeholder='Enter Your Name'  autoComplete='off' 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}  
            />
           {errors.name && touched.name ?(<p  className='text-[red]'>{errors.name}</p>):null}
          </div>
          <div className='my-3'>
            <input type="email" name="email"  className='py-2 w-100 ps-2'  placeholder='Enter Your Email' autoComplete='off'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}  
            />
             {errors.email && touched.email ?(<p  className='text-[red]'>{errors.email}</p>):null}
          </div>
          <div className='my-3'>
            <input type="password" name="password"  className='py-2 w-100 ps-2'  placeholder='Enter Your Password' autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
            {errors.password && touched.password ?(<p className='text-[red]'>{errors.password}</p>):null}
          </div>
          <div className='my-3'>
            <input type="password" name="Confirm_Password"  className='py-2 w-100 ps-2'  placeholder='Confirm_Password' autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Confirm_Password}
            />
            {errors.Confirm_Password && touched.Confirm_Password ?(<p className='text-[red]'>{errors.Confirm_Password}</p>):null}
          </div>
          <div className='my-3'>
            <textarea name="message"  className='pb-5 w-100 ps-2'  placeholder='Enter Your Message' autoComplete='off'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}  
            ></textarea>
            {errors.message && touched.message ?(<p className='text-[red]'>{errors.message}</p>):null}
          </div>

          <div className='my-3'>
            <button type="submit" className='bg-white py-2 px-4 rounded-md'>Submit Form</button>
          </div>
        </div>
      </form>
      {/* <div className='text-center'><span >{result}</span></div> */}

    </div>
  )
}

export default Contact