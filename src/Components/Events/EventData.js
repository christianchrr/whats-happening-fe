import React from 'react'
import { connect } from 'react-redux';
import { deleteEvent } from '../../Actions/eventActions'

const EventData = (props) => {

    const removeEvent = (eventId) => {
        return(
            props.deleteEvent(eventId)
        )
    }

    return (
        <div>
            <h4>{props.eventName}</h4>
            {props.eventDescription}
            <br/>
            {props.eventMonth}/{props.eventDay}/{props.eventYear}
            <br/>
            <button className="btn btn-outline-danger" onClick={() => removeEvent(props.eventId)}>Delete</button>
        </div>
    )

}

export default connect (null, { deleteEvent }) (EventData)