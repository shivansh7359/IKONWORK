import { Button, Card, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import { FaPen} from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TbCameraPlus } from 'react-icons/tb';
// import banner from "/banner.jpg"

const Profile = () => {

  const[banner, setBanner] = useState(null);
  const[profile, setProfile] = useState(null);
  const[url1, setUrl1] = useState(null);
  const[url2, setUrl2] = useState(null);
  const[open1, setOpen1] = useState(false);
  const[open2, setOpen2] = useState(false);

  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    if(file){
      const imgUrl = URL.createObjectURL(file);
      setUrl1(imgUrl);
    }
  }
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    if(file){
      const imgUrl = URL.createObjectURL(file);
      setUrl2(imgUrl);
    }
  }
  const handleUpdateBanner = () => {
    setBanner(url1);
    setOpen1(false);
  }
  const handleUpdateProfile = () => {
    setProfile(url2);
    setOpen2(false);
  }
  const handleOpen1 = (e, newImage) => {
    setOpen1(true);
  }
  const handleOpen2 = (e, newImage) => {
    setOpen2(true);
  }
  const handleClose1 = (e, newImage) => {
    setOpen1(false);
    setUrl1(null);
  }
  const handleClose2 = (e, newImage) => {
    setOpen2(false);
    setUrl2(null);
  }

  return (
    <Card className="mt-6 h-[50vh] relative">
      {/* banner image */}
      <div className='h-[30vh] rounded-br-[30%]'>
        <img src={banner || "/banner.jpg"} alt="profile" className='w-full h-full rounded-br-[30%] object-cover overflow-hidden'/>
      </div>

      <div onClick={handleOpen1} className='absolute top-3 right-3 w-9 h-9 rounded-full bg-white'>
        <FaPen  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500 cursor-pointer shadow-2xl"/>
      </div>

      <Dialog open={open1} onClose={handleClose1} maxWidth="md" fullWidth>
          <DialogTitle className='flex justify-between items-center text-center text-white text-sm bg-gray-800'>
            <img src="./ikonwork.jpg" alt="logo1" width={40} />
            <h1>Edit Company Cover Picture</h1>
            <IoCloseCircleOutline size={32} onClick={handleClose1} className='cursor-pointer'/>
          </DialogTitle>

          <DialogContent className='flex flex-col gap-3'>
            <img src={url1 || "/banner.jpg"} alt="coverPicture" className='h-56 w-full mt-5 object-cover overflow-hidden'/>

            <div class="relative">
              <input type="file" required accept='image/*' class="absolute opacity-0 w-full h-full cursor-pointer" id="fileInput" onChange={(e) => handleImageChange1(e)}/>

              <label for="fileInput" class="flex items-center justify-between w-full px-4 py-2 border-[1px] border-gray-400 rounded-sm">
                <span class="text-gray-400">Browse File</span>
                <button type="button" class="text-gray-900 hover:text-black">Browse</button>
              </label>
            </div>

            <Button onClick={handleUpdateBanner} variant='contained' size='small' sx={{ backgroundColor: 'black', color: 'white' }} disabled={!url1}>
              Save
            </Button>
          </DialogContent>
        
      </Dialog>

      {/* profile pic */}
      <div className='absolute top-1/3'>
        <img src={profile || "/banner.jpg"} alt="profile" className='rounded-full w-36 h-36 ml-3 object-cover overflow-hidden'/>
      </div>

      <div onClick={handleOpen2} className='bg-white absolute rounded-full w-10 h-10 ml-28 cursor-pointer shadow-xl'>
        <TbCameraPlus  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 h-6 w-6"/>
      </div>

      <Dialog open={open2} onClose={handleClose2} maxWidth="md" fullWidth>
          <DialogTitle className='flex justify-between items-center text-center text-white text-sm bg-gray-800'>
            <img src="./ikonwork.jpg" alt="logo1" width={40} />
            <h1>Edit Company Logo Picture</h1>
            <IoCloseCircleOutline size={32} onClick={handleClose2} className='cursor-pointer'/>
          </DialogTitle>

          <DialogContent className='flex flex-col gap-3'>
            <img src={url2 || "/banner.jpg"} alt="coverPicture" className='h-56 w-full mt-5 object-cover overflow-hidden'/>
            
            <div class="relative">
              <input type="file" required accept='image/*' class="absolute opacity-0 w-full h-full cursor-pointer" id="fileInput" onChange={(e) => handleImageChange2(e)}/>

              <label for="fileInput" class="flex items-center justify-between w-full px-4 py-2 border-[1px] border-gray-400 rounded-sm">
                <span class="text-gray-400">Browse File</span>
                <button type="button" class="text-gray-900 hover:text-black">Browse</button>
              </label>
            </div>

            <Button onClick={handleUpdateProfile} variant='contained' size='small' sx={{ backgroundColor: 'black', color: 'white' }} disabled={!url2}>
              Save
            </Button>
          </DialogContent>
        
      </Dialog>
      
      {/* company detail */}
      <div className='text-left ml-3 mt-14'>
        <h1 className='font-semibold'>CryptoCoin Private Ltd.</h1>
        <p>Arts, Entertainment and Recreation</p>
        <p>Kingston, Jamaica</p>      
      </div>

    </Card>
  )
}

export default Profile