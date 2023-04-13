import React from 'react'
import "./widgetLg.css"
import Avatar1 from "../../Assets/avatarN1.png"
import Avatar2 from "../../Assets/avatarN2.png"
import Avatar3 from "../../Assets/avatarN3.png"
import Avatar4 from "../../Assets/avatarN4.png"

export default function WidgetLg() {

  const Button = ({type}) => {
      return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar1} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
              </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar2} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Chris beck</span>
            </td>
            <td className="widgetLgDate">2 Apr 2021</td>
            <td className="widgetLgAmount">$132.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined"/>
              </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar3} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Layla varol</span>
            </td>
            <td className="widgetLgDate">2 Feb 2023</td>
            <td className="widgetLgAmount">$127.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined"/>
              </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={Avatar4} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jeff Carol</span>
            </td>
            <td className="widgetLgDate">4 may 2022</td>
            <td className="widgetLgAmount">$100.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
              </td>
          </tr>
        </table>
    </div>
  )
}
