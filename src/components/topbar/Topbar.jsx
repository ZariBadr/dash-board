import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import Avatar1 from '../../Assets/avatarN1.png'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topleft">
                <span className="logo">D-Board</span>
            </div>
            <div className="topright">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src={Avatar1} className='topAvatar' alt="" />
            </div>
        </div>
    </div>
  )
}
