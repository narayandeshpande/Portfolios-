import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast, {Toaster} from "react-hot-toast"
const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) =>{
        const userInfo={
            fname:data.fname,
            email:data.email,
            message:data.message
        }
        try {
             await axios.post("https://getform.io/f/rbeqxkdb",userInfo)
             toast.success("Your message has been sended")
        } catch (error) {
            toast.error("Something went wrong")
        }
      }
  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container max-auto px-4 md:px-20 my-16">
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <p>Please fill out the form below to contact me</p>
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} 
            // action="https://getform.io/f/rbeqxkdb" method="POST" 
            className='bg-slate-200 w-96  px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="fname">FullName</label>
                    <input 
                    {...register("fname", { required: true })}
                    type="text" name="fname" id="fname" className=' shadow apperance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focuse:out' placeholder='Enter your FullName'/>
                    {errors.fname && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="email">Email Address</label>
                    <input
                    {...register("email", { required: true })}
                    type="email" name="email" id="email" className=' shadow apperance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focuse:out' placeholder='Enter your email address'/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="message">Message</label>
                    <textarea 
                                        {...register("message", { required: true })}

                    name="message" id="message" className='shadow apperance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focuse:out' placeholder='Enter your your query'></textarea>
                    {errors.message && <span>This field is required</span>}
                </div>
                <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact
