import React, { useState } from 'react'
import JobComponent from './JobComponent'
import { MenuItem, Select } from '@mui/material'

const Jobs = () => {

  const[selectedValue1, setSelectedValue1] = useState("source");
  const[selectedValue2, setSelectedValue2] = useState("publisher");
  const[selectedValue3, setSelectedValue3] = useState("status");

  const handleChange1 = (e) => {
    setSelectedValue1(e.target.value);
  }
  const handleChange2 = (e) => {
    setSelectedValue2(e.target.value);
  }
  const handleChange3 = (e) => {
    setSelectedValue3(e.target.value);
  }

  return (
    <div>
      
      <div className='mt-4 flex ml-6 gap-4'>
          <Select 
            value={selectedValue1} 
            onChange={handleChange1}
            sx={{
              borderRadius: "40px",
              width: "130px",
              height: "40px",
              backgroundColor: "gray",
              color: "white",
              '.MuiSvgIcon-root': {
                color: 'white',
              },
              outline: "none",
              
            }}
          >
            <MenuItem value="source">
              Source
            </MenuItem>

            <MenuItem value="abc">
              ABC
            </MenuItem>  
          </Select>
          <Select 
            value={selectedValue2} 
            onChange={handleChange2}
            sx={{
              borderRadius: "40px",
              width: "130px",
              height: "40px",
              backgroundColor: "gray",
              color: "white",
              '.MuiSvgIcon-root': {
                color: 'white',
              },
            }}
          >
            <MenuItem value="publisher">
              Publisher
            </MenuItem>

            <MenuItem value="ikonwork">
              Ikonwork
            </MenuItem>  
          </Select>
          <Select 
            value={selectedValue3} 
            onChange={handleChange3}
            sx={{
              borderRadius: "40px",
              width: "130px",
              height: "40px",
              backgroundColor: "gray",
              color: "white",
              '.MuiSvgIcon-root': {
                color: 'white',
              },
            }}
          >
            <MenuItem value="status">
              Status
            </MenuItem>

            <MenuItem value="expired">
              Expired
            </MenuItem>  
          </Select>
      </div>

      <div className='flex flex-wrap justify-evenly mt-7 mb-3'>
      <JobComponent position={"Python Developer"} city={"Faridabad, Haryana, India"} company={"CryptoCoin Private Ltd."} time={8} />
      <JobComponent position={"Python Developer"} city={"Faridabad, Haryana, India"} company={"CryptoCoin Private Ltd."} time={8} />
      <JobComponent position={"Python Developer"} city={"Faridabad, Haryana, India"} company={"CryptoCoin Private Ltd."} time={8} />
      <JobComponent position={"Python Developer"} city={"Faridabad, Haryana, India"} company={"CryptoCoin Private Ltd."} time={8} />
      <JobComponent position={"Python Developer"} city={"Faridabad, Haryana, India"} company={"CryptoCoin Private Ltd."} time={8} />
      <JobComponent position={"Python Developer"} city={"Faridabad, Haryana, India"} company={"CryptoCoin Private Ltd."} time={8} />
    </div>
    </div>
  )
}

export default Jobs