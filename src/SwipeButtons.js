import React from 'react';
import "./swipeButton.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='repeatIcon'>
          <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='closeIcon'>
          <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='startIcon'>
          <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className='favoriteIcon'>
          <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='flashIcon'>
          <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
