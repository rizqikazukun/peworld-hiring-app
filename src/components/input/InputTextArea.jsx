import React from 'react'

export default function InputTextArea({id, labelName, rows, placeholder, onChange}) {
  return (
	<div className='flex flex-col gap-2' 
	onChange={onChange}>
		<label htmlFor={id}>{labelName}</label>
		<textarea id={id} rows={rows ? rows : 4} placeholder={placeholder ? placeholder : `Insert ${labelName}`}
		className='focus:outline-none border-pw-gray20 border-2 rounded-md w-full p-2' />
	</div>
  )
}
