import { TextField } from '@mui/material'
import React from 'react'

const TextComponent = ({placeHolder, type, value, setValue}) => {

    // const handleChnage = () => {
    //     setVali
    // }

  return (
    <TextField
              id="outlined-basic" 
              label={placeHolder} 
              type={type}
              variant="outlined"
              value={value}
              size='small'
              onChange={(e) => setValue(e.target.value)} 
              sx={{
                '& input[type=number]': {
                    '-moz-appearance': 'textfield', 
                },
                '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none', 
                    margin: 0,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#757575', 
                  },
                  '&:hover fieldset': {
                    borderColor: '#757575', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#757575', 
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#757575', 
                },
                '& .MuiInputLabel-root': {
                  color: '#757575', 
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#757575', 
                },
                '& .MuiInputLabel-root.Mui-shrink': {
                  color: '#757575', 
                },
              }}
            />
  )
}

export default TextComponent