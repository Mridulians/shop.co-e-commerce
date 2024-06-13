/* eslint-disable react/prop-types */
// import React from 'react'

const InputField = ({type1 , name1 , type2  , name2 , fName , lName , value1 , value2 , onchange , onBlur , touchedFirst , touchedSecond ,  errorFirst , errorSecond}) => {
  return (
    <div className="flex-col flex sm:flex-row justify-center gap-[2rem] mt-[1rem]">
          <div className="flex flex-col">
            <label htmlFor="firstName">{fName}</label>
            <input
              type={type1}
              name={name1}
              value={value1}
              onChange={onchange}
              onBlur={onBlur}
              className="px-[1rem] border-2 border-gray-700 rounded-lg"
            />
            {touchedFirst && errorFirst && (
              <p className="text-red-500">{errorFirst}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">{lName}</label>
            <input
              type={type2}
              name={name2}
              value={value2}
              onChange={onchange}
              onBlur={onBlur}
              className="px-[1rem] border-2 border-gray-700 rounded-lg"
            />
            {touchedSecond && errorSecond && (
              <p className="text-red-500">{errorSecond}</p>
            )}
          </div>
        </div>
  )
}

export default InputField