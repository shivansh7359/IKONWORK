import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { FaPen} from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5';

const About = () => {

  const[open1, setOpen1] = useState(false);
  const[open2, setOpen2] = useState(false);
  const[website, setWebsite] = useState("");
  const[year, setYear] = useState("");
  const[industry, setIndustry] = useState("");
  const[location, setLocation] = useState("");
  const[data, setData] = useState("");

  const handleClose1 = () => {
    setOpen1(false);
  }
  const handleAbout = () => {
    setOpen1(true);
  }
  const handleDetails = () => {
    setOpen2(true);
  }

  const handleClose2 = () => {
    setOpen2(false);
  }

  const isFormValid = () => {
    return website && year && industry && location;
  };
  const validData = () => {
    if(data){
      return true;
    }
  };

  return (
    <Box className="bg-white p-6 shadow mt-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">About</h3>
          <IconButton onClick={handleAbout}>
            <FaPen className='text-pink-500 w-5 h-5'/>
          </IconButton>
        </div>
        <p className="text-gray-600 text-left">
          {
            data.length>0 ? data : 
            "Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
          }
        </p>

        <Dialog open={open1} onClose={handleClose1} maxWidth="md" fullWidth>
          <DialogTitle className='flex justify-between items-center text-center text-white text-sm bg-gray-800'>
            <img src="./ikonwork.jpg" alt="logo1" width={40} />
            <h1>Edit Company About</h1>
            <IoCloseCircleOutline size={32} onClick={handleClose1} className='cursor-pointer'/>
          </DialogTitle>

          <DialogContent className='flex flex-col gap-3'>
            <input 
              placeholder='About the company' 
              type='text' 
              required
              value={data}
              onChange={(e) => setData(e.target.value)}
              className='border-[1px] mt-5 border-black rounded-sm p-1'
            />
            <Button onClick={handleClose1} variant='contained' size='small' sx={{ backgroundColor: 'black', color: 'white' }} disabled={!validData()}>
              Save
            </Button>
          </DialogContent>
        
        </Dialog>

        {/* Details Section */}
        <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Details</h3>
          <IconButton onClick={handleDetails}>
            <FaPen className='text-pink-500 w-5 h-5'/>
          </IconButton>
        </div>
          <div className="text-gray-600 text-left">
            <p className='flex gap-[4px]'>
              <strong className='mr-[240px]'>Website </strong>
              <a href={website} className='underline text-black'>
                {website || "https://www.ibm.com/in-en"}
              </a>
            </p>
            <p>
              <strong className='mr-[215px]'>Established </strong>
              {year || 2008}
            </p>
            <p>
              <strong className='mr-[235px]'>Industry </strong>
              {industry || "Arts, Entertainment and Recreation"}
            </p>
            <p>
              <strong className='mr-[140px]'>Head Office Location </strong>
              {location || "17 Roosevelt Avenue, Kingston 6, Jamaica W.I."}
            </p>
          </div>
        </div>

        <Dialog open={open2} onClose={handleClose2} maxWidth="md" fullWidth>
          <DialogTitle className='flex justify-between items-center text-center text-white text-sm bg-gray-800'>
            <img src="./ikonwork.jpg" alt="logo1" width={40} />
            <h1>Edit Company Details</h1>
            <IoCloseCircleOutline size={32} onClick={handleClose2} className='cursor-pointer'/>
          </DialogTitle>

          <DialogContent className='flex flex-col gap-3'>
            <input 
              placeholder='Website' 
              type='text' 
              required
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className='border-[1px] mt-5 border-black rounded-sm p-1'
            />
            <input 
              placeholder='Established Year' 
              type='number' 
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='border-[1px] border-black rounded-sm p-1'
            />
            <input 
              placeholder='Industry' 
              type='text' 
              required
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className='border-[1px] border-black rounded-sm p-1'
            />
            <input 
              placeholder='Head office Location' 
              type='text' 
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='border-[1px] border-black rounded-sm p-1'
            />
            <Button onClick={handleClose2} variant='contained' size='small' sx={{ backgroundColor: 'black', color: 'white' }} disabled={!isFormValid()}>
              Save
            </Button>
          </DialogContent>
        
        </Dialog>

      </Box>
  )
}

export default About