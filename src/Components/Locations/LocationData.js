import React from 'react'
import { connect } from 'react-redux';
import { deleteLocation } from '../../Actions/locationActions'
import { Link } from 'react-router-dom';

const LocationData = (props) => {

    return (
        <div>
            <Link to={`/locations/${props.locationId}`}><h4>{props.locationName}</h4></Link>
            {props.locationCity}, {props.locationState}
            <br/>
            <button className="btn btn-outline-danger" onClick={() => props.deleteLocation(props.locationId)}>Delete</button>
            <br/>
            <u>Events:</u>
            <ul>
                {props.locationEvents.filter(event => event.location_id === props.locationId).map((event, index) => (
                    <li key={index}>{event.event_name}</li>
                ))}
            </ul>
        </div>
    )

}

export default connect (null, { deleteLocation }) (LocationData)