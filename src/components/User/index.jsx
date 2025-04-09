import React from 'react'

const index = ({name}) => {
  return (
    <div className='userCard'>
        <h2>Name:{name} </h2>
        <h3>Location: </h3>
        <h4>Contact: </h4>
    </div>
  )
}

export default index