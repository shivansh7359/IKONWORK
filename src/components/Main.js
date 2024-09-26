import React from 'react'
import Pages from './Pages'
import Profile from './Profile'
import { TabsComponent } from './TabsComponent'

const Main = () => {
  return (
    <div className='flex gap-10 mx-[6vw]'>
        <div className='flex flex-col w-[60vw] gap-10 mx-[2vw]'>
            <Profile/>
            <TabsComponent/>
        </div>

        <Pages/>
    </div>
  )
}

export default Main