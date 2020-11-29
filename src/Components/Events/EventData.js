import React from 'react'
import { connect } from 'react-redux';
import { deleteEvent } from '../../Actions/eventActions'

const EventData = (props) => {

    const removeEvent = (eventId) => {
        return(
            props.deleteEvent(eventId)
        )
    }

    return(
        <div>
            {props.eventName} | <button className="btn btn-outline-danger" onClick={() => removeEvent(props.eventId)}>Delete</button>
        </div>
    )

}

export default connect (null, { deleteEvent }) (EventData)