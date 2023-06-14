import React from 'react'

const Sidebar = () => {
  const sidebarSections = ['Dashboard','My Ticket','My Profile','Users','Assets','Tickets Type','Tickets Queue']
  return (
    <div className='sidebar'>
        <div className="heading">
            <img id='icon' src="favicon.ico" alt='icon'/>
            <h1>Tick-kati</h1>
        </div>
        <div className="categories">
        {
            sidebarSections.map(item=>(
                <li className={item}>{item}</li>
            ))
        }
        </div>
    </div>
  )
}

export default Sidebar