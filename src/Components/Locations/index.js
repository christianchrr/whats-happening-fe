import React from 'react'
import LocationList from './LocationList'
import LocationForm from './LocationForm'
import './Locations.css'

const Locations = () => {

    return (
        <div className="location-container container">
            <h3>Locations</h3>
            <br/>
            <div className="row">
                <div className="col-sm">
                    <LocationForm />
                </div>
                <div className="col-sm">
                    <h4>Existing Locations</h4>
                    <LocationList />
                </div>
            </div>
        </div>
    )
}

export default Locations