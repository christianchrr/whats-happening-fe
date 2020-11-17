import React from 'react'

const EventData = (props) => {

    return(
        <div>
            {props.eventName} | <button className="btn btn-outline-danger">Delete</button>
        </div>
    )

}

export default EventData