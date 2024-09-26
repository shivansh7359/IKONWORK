import React from 'react'
import PageView from './PageView'
import { Card, CardContent } from '@mui/material'

const Pages = () => {
  return (
  
    <Card className='mt-6 w-[30vw] h-[40vh]'>
        <CardContent>
            <h3 className="text-xl mr-48 font-bold mb-2">Affiliated Pages</h3>
            <ul>
                <PageView pageName={"Ikonwork"}/>
                <PageView pageName={"IKON"}/>
                <PageView pageName={"Delhivery"}/>
                <PageView pageName={"Tendium India Pvt Ltd"}/>
                <PageView pageName={"Dataweave"}/>
            </ul>
        </CardContent>
    </Card>
  )
}

export default Pages