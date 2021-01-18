import React from 'react'
import LocationFormFunctional from "./LocationFormFunctional";
import LocationList from './LocationList'
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
                        <LocationFormFunctional />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations