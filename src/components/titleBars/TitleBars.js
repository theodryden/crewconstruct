import React from 'react'
import './TitleBars.css'

const TitleBars = ({title}) => {
  return (
    <div className='titlebars-container'>
      <h1 className='titlebars-heading'>{title}</h1>
    </div>
  )
}

export default TitleBars
