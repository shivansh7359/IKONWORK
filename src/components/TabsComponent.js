import { Card, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'
import About from "./About"
import Jobs from "./Jobs"

export const TabsComponent = () => {

    const[value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

  return (
    <Card className='mb-15'>
        <Tabs 
          value={value} 
          onChange={handleChange}  
          TabIndicatorProps={{ 
            style: { backgroundColor: '#E91E63' }
          }}
        >
          <Tab 
            sx={{ 
              textTransform: 'none', 
              fontSize: "18px", 
              color: value === 0 ? 'black' : 'gray', 
              '&.Mui-selected': { 
                  color: 'black',
              },
            }} 
            label="About"
          />
          <Tab 
            sx={{ 
              textTransform: 'none', 
              fontSize: "18px", 
              color: value === 1 ? 'black' : 'gray',
              '&.Mui-selected': { 
                  color: 'black',
              },
            }} 
            label="Jobs"
          />
        </Tabs>
        {value === 0 && <About/>}
        {value === 1 && <Jobs/>}
    </Card>
  )
}
