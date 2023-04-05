import './sidebar.css'
import React from 'react'
import { LineStyle, Timeline, TrendingUp, Person, Storefront, AttachMoney, BarChart, MailOutline,DynamicFeed,ChatBubble,WorkOutline,Flag} from '@material-ui/icons'


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
                <h3 className="sidebarTitle">Notification</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <MailOutline className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubble className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
                <h3 className="sidebarTitle">Staff</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Flag className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
