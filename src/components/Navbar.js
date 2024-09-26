import { Avatar, MenuItem, Select} from '@mui/material'
import React, { useState } from 'react'
import { FaCircle } from 'react-icons/fa'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { IoMdSearch } from 'react-icons/io'
import { IoBagAddOutline, IoHomeOutline, IoLinkOutline } from 'react-icons/io5'
import { LuMessageSquare } from 'react-icons/lu'

const Navbar = () => {

  const[selectedValue, setSelectedValue] = useState("Online");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }


  return (
    <div className='bg-gray-900 h-[9vh] text-white flex justify-around items-center pt-4 pb-4 '>
      
        {/* logo */}
        <div className='flex gap-12 items-center'>
          
          <div className='flex items-center gap-2'>
              <img src="/ikonwork.jpg" alt="" width={50} height={100} />
              <a href="https://www.ikonwork.com/">IKONWORK</a>
          </div>

          {/* search */}
          <div className='flex bg-white rounded-3xl items-center h-8'>
              <span className='bg-white text-pink-600 rounded-2xl ml-1'>
                <IoMdSearch size={28}/>
              </span>
              <input type="text" placeholder='Search for people, jobs, skills' className='rounded-2xl outline-none' />
          </div>
        </div>

        {/* select */}
        <div className=''>
          <Select 
            value={selectedValue} 
            onChange={handleChange}
            sx={{
              color: 'white',
              '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
              },
              '.MuiSvgIcon-root': {
                  color: 'white',
              },
              borderRadius: "30px",
              width: "130px",
              height: "40px",
              paddng: "0px",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center"
          }}
          renderValue={(value) => {
            if (value === 'offline') {
              return (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaCircle style={{ color: 'red', fontSize: '12px' }} />
                  <span>Offline</span>
                </div>
              );
            } else{
              return (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaCircle style={{ color: 'green', fontSize: '12px' }} />
                  <span>Online</span>
                </div>
              );
            }
          }}
          >
            <MenuItem value="online" 
              sx={{display: "flex", alignItems: "center",
                justifyContent: "center", gap: "10px"}}
            >
              <FaCircle style={{color: "green"}} />
              Online
            </MenuItem>

            <MenuItem value="offline"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                gap: '10px',
              }}
            >
            <FaCircle style={{color: "red"}} />
              Offline
            </MenuItem>
          
          </Select>
        </div>

        {/* links */}
        <ul className='flex gap-10 items-center justify-center'>
            <li className='flex flex-col justify-center items-center'>
                <IoHomeOutline  size={22}/>
                <a href="/" className='mt-1'>
                  Home
                </a>
            </li>
            <li className='flex flex-col justify-center items-center'><IoLinkOutline  size={26}/><a href="/" className='mt-1'>Link Up</a></li>
            <li className='flex flex-col justify-center items-center'><IoBagAddOutline size={24}/><a href="/" className='mt-1'>Jobs</a></li>
            <li className='flex flex-col justify-center items-center'><LuMessageSquare  size={22}/><a href="/" className='mt-1'>Messages</a></li>
            <li className='flex flex-col justify-center items-center'><HiOutlineBellAlert  size={26}/><a href="/" className='mt-1'>Notifications</a></li>
            
            <li className='flex flex-col justify-center items-center'>
              <Avatar 
                sx={{ 
                  width: 28, 
                  height: 28, 
                  color: "#E91E63",
                  marginTop: "1px", 
                  marginBottom: "1px", 
                  border: "2px", 
                  borderBlockColor: "#E91E63" 
                }} 
                alt="Remy Sharp" 
                src="/static/images/avatar/1.jpg" 
              />
              Me
            </li>
        
        </ul>
    </div>
  )
}

export default Navbar