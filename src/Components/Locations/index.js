import React from 'react'
import LocationList from './LocationList'
import LocationForm from './LocationForm'

const Locations = () => {

    return (
        <div className="location-container">
            <h3>All Locations</h3>
            <br/>
            <LocationList />
            <br/>
            <LocationForm />
        </div>
    )
}

export default Locations