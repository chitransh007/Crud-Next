import React from 'react'

const FormInput = (props) => {

    const {label,onChange,id,...inputProps} = props;
  return (
    <div className='flex flex-col'>
        
            <label>{label}</label> 
            {/* <input className='border-2 p-2 m-2' placeholder={props.placeholder} 
            onChange= {(e) => props.setUsername(e.target.value)} /> */}
            <input className='border-2 p-2 m-2' {...inputProps} onChange={onChange} />
        
    </div>
  )
}

export default FormInput