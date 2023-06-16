import React, { useEffect, useState } from 'react'
import CircumIcon from '@klarr-agency/circum-icons-react'

const Content = () => {
    const [formshow,setFormShow] = useState(false);
    const [tickets,setTickets] = useState([]);
    const addTicket = () => {
        const overlay = document.querySelector(".overlay")
        overlay.classList.add("show")
        setFormShow(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const overlay = document.querySelector(".overlay")
        const ticket = document.getElementById('ticket-type').value
        const desc = document.getElementById('description').value
        if((ticket.trim()!=="")&&(desc.trim()!=="")){
            setTickets([...tickets,{
                id:tickets.length,
                ticket_type: ticket,
                description: desc
            }])
        }
        setFormShow(false)
        overlay.classList.remove("show")
    }
    useEffect(()=>{
        if(localStorage.getItem("tickets")){
            setTickets(JSON.parse(localStorage.getItem("tickets")))
        }
    },[setTickets])
    useEffect(()=>{
        if(tickets.length>0){
            localStorage.setItem("tickets",JSON.stringify(tickets))
        }
    },[setTickets,tickets])
    const handleCancel = (e) => {
        e.preventDefault();
        setFormShow(false)
        const overlay = document.querySelector(".overlay")
        overlay.classList.remove("show")
    }
    return (
    <div className='content'>
        <div className="header">
            <h1>Tickets Type</h1>
            <button onClick={()=>addTicket()} className='btn'>Add Ticket Type</button>
        </div>
        <div className='overlay'></div>
        {formshow && 
            <form className='ticket-form'>
                <div className="mb-3 form-input">
                    <p>Ticket Type</p>
                    <input id='ticket-type' type="text" className="form-control"/>
                </div>
                <div className="mb-3 form-input">
                    <p>Description</p>
                    <textarea id='description' name="message" rows="10" cols="23"></textarea>
                </div>
                <div className="button-cta">
                    <button type="submit" onClick={(e)=>handleCancel(e)} className="btn cancel">Cancel</button>
                    <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn submit">Submit</button>
                </div>
            </form>
        }
        <div className='table-container'>
            <table className="table table-dark table-striped-columns">
                <thead>
                    <tr>
                    <th scope="col">Ticket Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    tickets.map((e)=>(
                        <tbody>
                            <tr>
                            <td>{e.ticket_type}</td>
                            <td>{e.description}</td>
                            <td>
                                <div className="actions">
                                    <CircumIcon name="edit"/>
                                    <CircumIcon name="trash"/>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    </div>
  )
}

export default Content