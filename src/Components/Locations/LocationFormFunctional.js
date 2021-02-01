import React, {useState, useContext} from 'react'
import {Context} from '../../Store'
import StateDropdown from "./StateDropdown";
import {addLocation} from "../../Actions/locationActions";

const LocationFormFunctional = () => {
  /** Store **/
  const [state, dispatch] = useContext(Context)

  const initialState - {
    locationName: '',
    locationAddressLineOne: '',
    locationAddressLineTwo: '',
    locationCity: '',
    locationState: '',
    locationZipCode: ''
  }

  /** Form fields **/
  const [{
    locationName,
    locationAddressLineOne,
    locationAddressLineTwo,
    locationCity,
    locationState,
    locationZipCode
  }, setState] = useState(initialState)

  const buildRequest = () => {
    return {
      location_name: locationName,
      location_address_line_one: locationAddressLineOne,
      location_address_line_two: locationAddressLineTwo,
      location_city: locationCity,
      location_state: locationState,
      location_zip_code: locationZipCode
    }
  }

  const handleChange = (e) => {
    setState(previousState => {...previousState, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const location = buildRequest()
    addLocation(location)
    setState(initialState)
  }

  return (
    <div className="location-form-container">
      <h4>New Location Form</h4>
      <form onSubmit={e => handleSubmit(e)} >
        <div>
          <label htmlFor="locationName">
            <input
              name="locationName"
              type="text"
              onChange={handleChange}
              placeholder="Name"
              value={locationName}
            />
          </label>
          <br/>
          <label htmlFor="locationAddressLineOne">
            <input
              name="locationAddressLineOne"
              type="text"
              onChange={handleChange}
              placeholder="Address Line One"
              value={locationAddressLineOne}
            />
          </label>
          <br/>
          <label htmlFor="locationAddressLineTwo">
            <input
              name="locationAddressLineTwo"
              type="text"
              onChange={handleChange}
              placeholder="Address Line Two"
              value={locationAddressLineTwo}
            />
          </label>
          <br/>
          <label htmlFor="locationCity">
            <input
              name="locationCity"
              type="text"
              onChange={handleChange}
              placeholder="City"
              value={locationCity}
            />
          </label>
          <br/>
          <StateDropdown onChange={handleChange} value={locationState} />
          <br/>
          <label htmlFor="locationZipCode">
            <input
              name="locationZipCode"
              type="text"
              onChange={handleChange}
              placeholder="Zip"
              value={locationZipCode} />
          </label>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-primary">Create Location</button>
        </div>
      </form>
    </div>
  )
}

export default LocationFormFunctional