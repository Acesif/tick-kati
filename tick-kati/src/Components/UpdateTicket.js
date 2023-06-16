import React, { useState } from 'react'

const UpdateTicket = ({handleCancel,handleUpdate,currentNode}) => {
    const [updatedTicket,setUpdatedTicket]=useState(currentNode.ticket_type)
    const [updatedDesc,setUpdatedDesc]=useState(currentNode.description)
  return (
    <form className='ticket-form'>
        <div className="mb-3 form-input">
            <p>Ticket Type</p>
            <input id='ticket-type' type="text" onChange={(e)=>setUpdatedTicket(e.target.value)} value={updatedTicket} className="form-control"/>
        </div>
        <div className="mb-3 form-input">
            <p>Description</p>
            <textarea id='description' name="message" onChange={(e)=>setUpdatedDesc(e.target.value)} value={updatedDesc} rows="10" cols="23"></textarea>
        </div>
        <div className="button-cta">
            <button type="submit" onClick={(e)=>handleCancel(e)} className="btn cancel">Cancel</button>
            <div onClick={(e)=>handleUpdate(updatedTicket,updatedDesc)} className="btn submit">Submit</div>
        </div>
    </form>
  )
}

export default UpdateTicket