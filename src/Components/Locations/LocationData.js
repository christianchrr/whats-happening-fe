import React from 'react'

const LocationData = (props) => {

    return(
        <div>
            {props.locationName} | <button className="btn btn-outline-danger">Delete</button>
        </div>
    )

}

export default LocationData