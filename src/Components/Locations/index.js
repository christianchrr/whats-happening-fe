import React, { useContext } from 'react'
// import { Context } from '../../Store/index'
import LocationList from './LocationList'
import LocationForm from './LocationForm'
import './Locations.css'

const Locations = () => {

    // const [state, dispatch] = useContext(Context)

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
                        {/* dispatch={dispatch} state={state} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations