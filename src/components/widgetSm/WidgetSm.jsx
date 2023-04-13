import React from 'react'
import "./widgetSm.css"
import Avatar1 from "../../Assets/avatarN1.png"
import Avatar2 from "../../Assets/avatarN2.png"
import Avatar3 from "../../Assets/avatarN3.png"
import Avatar4 from "../../Assets/avatarN4.png"
import {Visibility} from '@material-ui/icons'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={Avatar1} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John mayer</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetMsIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Avatar2} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Alexander grit</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetMsIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Avatar3} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Peter lee</span>
            <span className="widgetSmUserTitle">Computer engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetMsIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Avatar4} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chris keller</span>
            <span className="widgetSmUserTitle">frontend developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetMsIcon'/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
