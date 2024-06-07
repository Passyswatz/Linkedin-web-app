import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className='header'>
      

        <div className="header_left">
          <LinkedInIcon className="linkedin-icon"/>


          <div className="header_search">
          <SearchIcon/>
            <input type="text" />
          </div>

        </div>

        <div className="header_right">
          <HeaderOptions Icon={HomeIcon} title="Home"/>
          <HeaderOptions Icon={GroupIcon} title="My Network"/>
          <HeaderOptions Icon={WorkIcon} title="Job"/>
          <HeaderOptions Icon={ChatIcon} title="Messages"/>
          <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
          <HeaderOptions avatar={"https://yt3.ggpht.com/yti/ANjgQV_iL7QlNK8Nit0Fihn6KUfds9lnL5Q0OPxP3ouGQLw=s88-c-k-c0x00ffffff-no-rj"} title="Me"/>

        </div>
    </div>
  )
}

export default Header