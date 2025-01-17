import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';

function HeaderOptions({avatar , Icon , title}) {
  return (
    <div className='headerOption'>

    {Icon && <Icon className="headerOption_icon"/>}
    {avatar && <Avatar className="headerOption_icon" src={avatar}/>}
    <h3 className='headerOption_title'>{title}</h3>

    </div>
  )
}

export default HeaderOptions;