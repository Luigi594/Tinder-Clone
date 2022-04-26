import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Tinder from "./tinder.png";
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {

  const history = useNavigate();

  return (
    <div className='header'>

      {backButton ? (
        <IconButton onClick={() => history(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='header_icon' />    
        </IconButton>
      ): (
        <IconButton>
          <PersonIcon fontSize='large' className='header_icon' />    
        </IconButton>
      )}

      <Link to="/">
        <img 
          className='header_logo'
          alt='Tinder'
          src={Tinder}
        />
      </Link>
      
      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize='large' className='header_icon' />    
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
