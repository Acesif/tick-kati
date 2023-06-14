import React from 'react'

const Sidebar = () => {
  const sidebarSections = ['Dashboard','My Ticket','My Profile','Users','Assets','Tickets Type','Tickets Queue']
  return (
    <div className='sidebar'>
        <h1>Tick-kati</h1>
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