import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { FaPen} from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5';
import Editor from './Editor';
import TextComponent from "./TextComponent";

const About = () => {

  const[open2, setOpen2] = useState(false);
  const[website, setWebsite] = useState("");
  const[year, setYear] = useState("");
  const[industry, setIndustry] = useState("");
  const[location, setLocation] = useState("");
  const [openEditor, setOpenEditor] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const handleAbout = () => {
    handleOpenEditor();
  }

  const handleCloseEditor = () => {
    setOpenEditor(false);
  };

  const handleOpenEditor = () => {
    setOpenEditor(true);
  };
  const handleDetails = () => {
    setOpen2(true);
  }

  const handleDetailSave = (e) => {
    e.preventDefault();
    // setWebsite(e.website);
    // setYear(e.year);
    // setIndustry(e.industry);
    // setLocation(e.location);

    setOpen2(false);
  }

  const handleClose2 = () => {
    setWebsite('');
    setYear('');
    setIndustry('');
    setLocation('');
    setOpen2(false);
  }

  const isFormValid = () => {
    return website && year && industry && location;
  };

  return (
    <Box className="bg-white p-6 shadow mt-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">About</h3>
          <IconButton onClick={handleAbout}>
            <FaPen className='text-pink-500 w-5 h-5'/>
          </IconButton>
        </div>
        
        <p className="text-gray-600 text-left" dangerouslySetInnerHTML={{ 
          __html: editorContent || 
            "Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Make Better Life With Trusted CryptoCoin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo." 
        }}>
        </p>

        <Editor open={openEditor} onClose={handleCloseEditor} editorContent={editorContent} setEditorContent={setEditorContent} />


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
            
            <div className='flex flex-col mt-4 gap-3'>
              <TextComponent placeHolder={"website"} type={"text"} value={website} setValue={setWebsite}/>
              <TextComponent placeHolder={"Established Year"} type={"number"} value={year} setValue={setYear}/>
              <TextComponent placeHolder={"Industry"} type={"text"} value={industry} setValue={setIndustry}/>
              <TextComponent placeHolder={"Head Office Location"} type={"text"} value={location} setValue={setLocation}/>
            </div>

            <Button onClick={(e) => handleDetailSave(e)} variant='contained' size='small' sx={{ backgroundColor: 'black', color: 'white' }} disabled={!isFormValid()}>
              Save
            </Button>
          </DialogContent>
        
        </Dialog>


      </Box>
  )
}

export default About