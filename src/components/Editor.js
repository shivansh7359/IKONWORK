import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 


const Editor = ({open, onClose, editorContent, setEditorContent}) => {

    const [tempContent, setTempContent] = useState(editorContent);

  const handleSave = () => {

    if (tempContent.trim() !== '' && tempContent !== '<p><br></p>') {
        console.log('Saved content:', tempContent);
        setEditorContent(tempContent);
    }
    handleCloseEditor();
  };

  const handleCloseEditor = () => {
    setTempContent(''); 
    onClose();
  };

  useEffect(() => {
    setTempContent(editorContent);
  }, [editorContent]);

  const validData = () => {
    return tempContent && tempContent.trim() !== '' && tempContent !== '<p><br></p>';
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      
        <DialogTitle className='flex justify-between items-center text-center text-white text-sm bg-gray-800'>
            <img src="./ikonwork.jpg" alt="logo1" width={40} />
            <h1>Edit Company About</h1>
            <IoCloseCircleOutline size={32} onClick={handleCloseEditor} className='cursor-pointer'/>
        </DialogTitle>
      
      <DialogContent className='mt-10 h-48'>
        <ReactQuill 
          value={tempContent} 
          className='h-32'
          onChange={setTempContent} 
          theme="snow" 
          modules={{
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['bold', 'italic', 'underline'],
              ['link', 'image', 'video'],
              ['clean'], 
            ],
          }}
        />
      </DialogContent>
      <Button onClick={handleSave} variant="contained" sx={{ margin: 2, backgroundColor: "black" }} disabled={!validData()}>
        Save
      </Button>
    </Dialog>
  )
}

export default Editor