import React, {useState, useContext} from 'react'
import {Context} from '../../Store'
import StateDropdown from "./StateDropdown";
import {addLocation} from "../../Actions/locationActions";

const LocationFormFunctional = () => {
  /** Store **/
  const [state, dispatch] = useContext(Context)

  /** Form fields **/
  const [locationName, setLocationName] = useState('')
  const [locationAddressLineOne, setLocationAddressLineOne] = useState('')
  const [locationAddressLineTwo, setLocationAddressLineTwo] = useState('')
  const [locationCity, setLocationCity] = useState('')
  const [locationState, setLocationState] = useState('')
  const [locationZipCode, setLocationZipCode] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const location = buildRequest()
    addLocation(location)
    alert("Location Added")
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
              onChange={e => setLocationName(e.target.value)}
              placeholder="Name"
              value={locationName}
            />
          </label>
          <br/>
          <label htmlFor="locationAddressLineOne">
            <input
              name="locationAddressLineOne"
              type="text"
              onChange={e => setLocationAddressLineOne(e.target.value)}
              placeholder="Address Line One"
              value={locationAddressLineOne}
            />
          </label>
          <br/>
          <label htmlFor="locationAddressLineTwo">
            <input
              name="locationAddressLineTwo"
              type="text"
              onChange={e => setLocationAddressLineTwo(e.target.value)}
              placeholder="Address Line Two"
              value={locationAddressLineTwo}
            />
          </label>
          <br/>
          <label htmlFor="locationCity">
            <input
              name="locationCity"
              type="text"
              onChange={e => setLocationCity(e.target.value)}
              placeholder="City"
              value={locationCity}
            />
          </label>
          <br/>
          <StateDropdown setLocationState={setLocationState} />
          <br/>
          <label htmlFor="locationZipCode">
            <input
              name="locationZipCode"
              type="text"
              onChange={e => setLocationZipCode(e.target.value)}
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