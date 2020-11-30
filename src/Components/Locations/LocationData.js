import React from 'react'
import { connect } from 'react-redux';
import { deleteLocation } from '../../Actions/locationActions'

const LocationData = (props) => {

    const removeLocation = (locationId) => {
        return(
            props.deleteLocation(locationId)
        )
    }

    return(
        <div>
            {props.locationName} | <button className="btn btn-outline-danger" onClick={() => removeLocation(props.locationId)}>Delete</button>
            <br/>
            Events:
            <br/>
            <ul>
                {props.locationEvents.filter(event => event.location_id === props.locationId).map((event, index) => (
                    <li key={index}>{event.event_name}</li>
                ))}
            </ul>
        </div>
    )

}

export default connect (null, { deleteLocation }) (LocationData)