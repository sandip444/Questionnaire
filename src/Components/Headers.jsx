import React from 'react'
import icon from './images/icon.svg'

const Headers = () => {
  return (
    <>
      <div className='App-header'>
      <div className='Header-icon'><img src={icon} alt="" /></div>
      <p className='Header-title'>New Questionnaire</p>
        <div className='Header-button'> <p className='button'>LOG IN</p></div>
      </div>
    </>

  )
}

export default Headers