import React from 'react'
import LocationList from './LocationList'
import LocationForm from './LocationForm'
import './Locations.css'

const Locations = () => {

    return (
        <div className="location-container container">
            <h2>Locations</h2>
            <br/>
            <div className="row">
                <div className="col-sm">
                    <div className="l-con">
                        <LocationList />
                    </div>
                </div>
                <div className="col-sm">
                    <div className="r-con">
                        <LocationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations