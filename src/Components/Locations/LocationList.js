import React from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from '../../Actions/locationActions'
import { fetchEvents } from '../../Actions/eventActions'
import LocationData from './LocationData'

class LocationList extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchLocations()
        this.props.boundFetchEvents()
    }

    render() {
        return (
            <div className="location-list-container">
                <ul id="LocationList" className="list-group">
                    {this.props.locations.map((location, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                <LocationData locationName={location.location_name} locationAddressLineOne={location.location_address_line_one} locationAddressLineTwo={location.location_address_line_two} locationCity={location.location_city} locationState={location.location_state} locationZip={location.location_zip} locationId={location.id} locationEvents={this.props.events}/>
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