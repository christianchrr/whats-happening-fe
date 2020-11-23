import React from 'react'
import { removeLocation } from '../../Actions/locationActions'

const LocationData = (props) => {

    return(
        <div>
            {props.locationName} | <button className="btn btn-outline-danger" onClick={() => removeLocation(props.locationId)}>Delete</button>
        </div>
    )

}

export default LocationData