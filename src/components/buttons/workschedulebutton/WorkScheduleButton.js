import React from 'react'
import './WorkScheduleButton.css'

const WorkScheduleButton = ({WorkSchedule}) => {
  return (
    <div className='workschedulebutton-container'>
      <button className='workschedulebutton'>{WorkSchedule}</button>
    </div>
  )
}

export default WorkScheduleButton
