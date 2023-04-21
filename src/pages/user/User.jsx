import React from 'react'
import "./user.css"
import Avatar1 from "../../Assets/avatarN1.png";
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {Link} from "react-router-dom";


export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={Avatar1} alt="" className="userShowImg" />
              <div className="userShowTopTitle">
              <span className="userShowUsername">Badreddine Zari</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityRoundedIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">badreddine22</span>
              </div>
              <div className="userShowInfo">
                <CalendarMonthRoundedIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">12.3.2003</span>
              </div>
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PhoneAndroidRoundedIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">+1 123 456 55</span>
              </div>
              <div className="userShowInfo">
                <MailOutlineRoundedIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">badreddine22@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <HomeRoundedIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">Rabat DC | Maarif | Rue M5</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpadteTitle">Edit</span>
            <form action="" className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder='badreddine22' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input type="text" placeholder='Badreddine zari' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder='badreddine22@gmail.com' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder='+1 123 456 55' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input type="text" placeholder='Rabat DC | Maarif | Rue M5' className='userUpdateInput' />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className='userUpdateImg' src={Avatar1} alt="" />
                  <label htmlFor="file"><PublishRoundedIcon className='userUpdateIcon' /></label>
                  <input type="file" id='file'/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
