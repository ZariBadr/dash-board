import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from "../../components/chart/Chart"
import './home.css'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'


export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart />
        <div className='homeWidgets'>
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
