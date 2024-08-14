import React from 'react'
import './JobPostingContainer.css'
import ApplyButton from '../buttons/applybutton/ApplyButton'
import WorkScheduleButton from '../buttons/workschedulebutton/WorkScheduleButton'

const JobPostingCard = ({trade,companyName,jobDescription}) => {
  return (
    <div className='jobpostingcontainer-container'>

      <div className='lefside-container'>
        <div className='companyinformationbannar'>
          <h2>{trade}</h2>
          <p>{companyName}</p>
          <p>{jobDescription}</p>
          </div>

          <div className='workschedulebannar'>
            <WorkScheduleButton WorkSchedule={"Full-Time"}/>
            <WorkScheduleButton WorkSchedule={"Part-Time"}/>
            <WorkScheduleButton WorkSchedule={"Senior"}/>
        </div>
      </div>

      <div className='rightside-container'>
        <ApplyButton/>
      </div>
     
      <p></p>
    
    </div>
  )
}

export default JobPostingCard
