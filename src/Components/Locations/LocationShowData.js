import React from 'react'

const LocationShowData = (props) => {

    return (
        <div>
            <h2>{props.locationName}</h2>
            <p>{props.locationAddressLineOne}</p>
            <p>{props.locationAddressLineTwo}</p>
            <p>{props.locationCity}, {props.locationState} {props.locationZip}</p>
            <h5>Events</h5>
            <ul>
                {props.locationEvents.map((event, index) => (
                    <li key={index}>{event.event_name}</li>
                ))}
            </ul>
        </div>
    )

}

export default LocationShowData