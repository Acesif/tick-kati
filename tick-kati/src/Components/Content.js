import React from 'react'

const Content = () => {
    const addTicket = () => {
        const overlay = document.querySelector(".overlay")
        overlay.classList.add("show")
    }
    return (
    <div className='content'>
        <div className="header">
            <h1>Tickets Type</h1>
            <button onClick={()=>addTicket()} className='btn ticket-add'>Add Ticket Type</button>
        </div>
        <div className='overlay'></div>
        <div className='table-container'>
            <table className="table table-dark table-striped-columns">
                <thead>
                    <tr>
                    <th scope="col">Ticket Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Content