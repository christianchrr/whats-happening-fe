import React, { useEffect, useContext } from 'react'
// import { Context } from '../../Store/index'
import { connect } from 'react-redux'
import { fetchLocations } from '../../Actions/locationActions'
import { fetchEvents } from '../../Actions/eventActions'
import LocationData from './LocationData'

class LocationList extends React.Component {

    // const [state, dispatch] = useContext(Context)

    // useEffect( () => {
    //     fetchLocations()
    // }, [])

    // const [searchField, setSearchField] = useState("");

    initialState = {
        locationSearchField: ""
    }

    state = this.initialState

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    componentDidMount = () => {
        this.props.boundFetchLocations()
        this.props.boundFetchEvents()
    }

    getEvents = (id) => {
        return this.props.events.filter(event => event.location_id === id)
    }

    render() {
        return (
            <div className="location-list-container">
                <h4>Existing Locations</h4>
                <form>
                    <label onChange={this.handleChange} htmlFor="locationSearchBar">
                        <input type="search" name="locationSearchField" placeholder="Search" />
                    </label>
                </form>
                <ul id="LocationList" className="list-group">
                    {this.props.locations.filter(location => location.location_name.toUpperCase()
                    .includes(this.state.locationSearchField.toUpperCase()) ||  location.location_city.toUpperCase()
                    .includes(this.state.locationSearchField.toUpperCase()) || location.location_state.toUpperCase()
                    .includes(this.state.locationSearchField.toUpperCase()))
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
                                  locationEvents={this.getEvents(location.id)}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {locations: state.location.locations, events: state.event.events}
}

function mapDispatchToProps(dispatch){
    return { boundFetchEvents: () => dispatch(fetchEvents()),
        boundFetchLocations: () => dispatch(fetchLocations()) }
}

export default connect (mapStateToProps, mapDispatchToProps) (LocationList)