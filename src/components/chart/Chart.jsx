import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {data} from "../../dummyData"


export default function Chart() {
  return (
    <div className='chart'>
      <h3 className="chartTitle">Sales Performance</h3>
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
