import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../../Store/index'
// import { connect } from 'react-redux'
import { fetchLocations } from '../../Actions/locationActions'
import { fetchEvents } from '../../Actions/eventActions'
import LocationData from './LocationData'

// class LocationList extends React.Component {
    const LocationList = () => {

    const [state, dispatch] = useContext(Context)

    useEffect( () => {
        fetchLocations();
        fetchEvents()
    }, [])

    const [searchField, setSearchField] = useState("");


    // initialState = {
    //     locationSearchField: ""
    // }

    // state = this.initialState

    // handleChange = (e) => {
    //     const key = e.target.name
    //     const value = e.target.value
    //     this.setState({
    //         [key]: value
    //     })
    // }

    // componentDidMount = () => {
    //     this.props.boundFetchLocations()
    //     this.props.boundFetchEvents()
    // }

    const getEventsByLocationId = (id) => {
        return state.events.filter(event => event.location_id === id)
    }

    // render() {
        return (
            <div className="location-list-container">
                <h4>Existing Locations</h4>
                <form>
                    <label htmlFor="locationSearchBar">
                        <input type="search" name="locationSearchField" placeholder="Search" onChange={(e) => {setSearchField(e.target.value)}} />
                    </label>
                </form>
                <ul id="LocationList" className="list-group">
                    {state.locations.filter(location => location.location_name.toUpperCase()
                    .includes(searchField.toUpperCase()) ||  location.location_city.toUpperCase()
                    .includes(searchField.toUpperCase()) || location.location_state.toUpperCase()
                    .includes(searchField.toUpperCase()))
                    .map((location, index) => {
                        return (
                            <li key={index} className="ll-list-group-item">
                                <LocationData
                                  locationName={location.location_name}
                                  locationAddressLineOne={location.location_address_line_one}
                                  locationAddressLineTwo={location.location_address_line_two}
                                  locationCity={location.location_city}
                                  locationState={location.location_state}
                                  locationZip={location.location_zip_code}
                                  locationId={location.id}
                                  locationEvents={getEventsByLocationId(location.id)}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    // }

}

// function mapStateToProps(state){
//     return {locations: state.location.locations, events: state.event.events}
// }

// function mapDispatchToProps(dispatch){
//     return { boundFetchEvents: () => dispatch(fetchEvents()),
//         boundFetchLocations: () => dispatch(fetchLocations()) }
// }

// export default connect (mapStateToProps, mapDispatchToProps) (LocationList)
export default LocationList