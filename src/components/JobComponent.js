import { Card } from '@mui/material'
import React from 'react'
import { MdMessage, MdOutlinePushPin } from 'react-icons/md'
import { SiBitcoinsv } from 'react-icons/si'

const JobComponent = ({position, company, city, time}) => {
  return (
    <Card className='w-[16vw] border mb-3 p-1'>
        <div className='flex justify-between mt-2 mx-3'>
            <img src="./ikonwork.jpg" alt="" width={20} />
            <div className='flex gap-3'>
                <MdMessage size={20} style={{color: "gray"}}/>
                <MdOutlinePushPin size={20} style={{color: "gray"}}/>
            </div>
        </div>
        <div className='flex justify-center mt-5'>
            <SiBitcoinsv size={42} />
        </div>
        <div className='flex flex-col text-left mt-7 mb-3 ml-3'>
            <h2>{position}</h2>
            <h1 className='font-semibold'>{company}</h1>
            <p className='text-gray-500'>{city}</p>
        </div>
        <hr className='text-black ml-3 mr-3'/>
        <p className='text-right font-semibold my-4 mx-3 text-gray-600'>posted: {time} days ago</p>
    </Card>
  )
}

export default JobComponent