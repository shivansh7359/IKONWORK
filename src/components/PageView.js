import { Button} from '@mui/material'
import React from 'react'
import { IoBagCheckOutline } from 'react-icons/io5'


const PageView = ({pageName}) => {
  return (
    
    <li className="flex justify-between items-center mb-2">
        <div className='flex items-center'>
             <IoBagCheckOutline style={{color: "#E91E63"}} className='mr-2 w-7 h-7'/>
             <span >{pageName}</span>
        </div>
        <Button 
            className='mr-2'
            variant='contained' 
            sx={{ backgroundColor: 'black', color: 'white' }}
        >
            View
        </Button>
    </li>
  )
}

export default PageView