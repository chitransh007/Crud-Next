import React, { useRef, useState } from 'react'
import FormInput from './FormInput'

export const Form = () => {

    const [values,setValues] = useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:"",
    });

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },
        {
            id:2,
            name:"email",
            type:"text",
            placeholder:"email",
            label:"Email"
        },
        {
            id:3,
            name:"birthday",
            type:"text",
            placeholder:"Birthday",
            label:"Birthday"
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:"Password"
        },
        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            label:"Confirm Password"
        }
    ]
    const usenameRef = useRef()
    // console.log(username)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usenameRef)
    }

    const onChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value});

    }

    console.log(values)
  return (
    <div>
        <form className='flex flex-col items-center mt-52' onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            ))}
            
             
            <button className='bg-blue-100 rounded-lg shadow p-3'>Submit</button>
        </form>
    </div>
  )
}
