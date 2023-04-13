import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart() {
  const data = [
    {
      name: 'Jan',
      uv: 4000
    },
    {
      name: 'Feb',
      uv: 3000
    },
    {
      name: 'Mar',
      uv: 2000
    },
    {
      name: 'Apr',
      uv: 2780
    },
    {
      name: 'May',
      uv: 1890
    },
    {
      name: 'June',
      uv: 2390
    },
    {
      name: 'July',
      uv: 3490
    },
    {
      name: 'Aug',
      uv: 3660
    },
    {
      name: 'Sep',
      uv: 4500
    },
    {
      name: 'Oct',
      uv: 3455
    },
    {
      name: 'Nov',
      uv: 3490
    },
    {
      name: 'Dec',
      uv: 4220
    },
  ];
  return (
    <div className='chart'>
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd' />
          <Line type="monotone" dataKey="uv" stroke='#5550bd'/>
          <Tooltip/>
          <CartesianGrid stroke='silver' strokeDasharray="5 5"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
