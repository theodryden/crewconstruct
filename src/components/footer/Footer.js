import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  
    <div className='footer-container'>
    <div className='joblistings-container'>
      <ul>
        <h3>Job Listings</h3>
        <li>Job Seekers</li>
        <li>Companies</li>
        <li>Part-time Positions</li>
        <li>Apprentices</li>
        <li>Construction Industry</li>
        <li>Remote Positions</li>
      </ul>
    </div>

    <div className='candidateprofiles-container'>
      <ul>
        <h3>Candidate Profiles</h3>
        <li>Ideas</li>
        <li>New Listings</li>
        <li>Skill Enhancement</li>
        <li>Resume Building</li>
        <li>Wage Analysis</li>
        <li>Tax Estimator</li>
      </ul>
    </div>

    <div className='mycandidates-container'>
      <ul>
        <h3>My Candidates</h3>
        <li>Overview</li>
        <li>Saved Profiles</li>
        <li>Application Log</li>
      </ul>
    </div>

    <div className='connectwithus-container'>
      <ul>
        <h3>Connect with us</h3>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
    </div>
    </div>
  )
}

export default Footer
