import React from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from '../../Actions/locationActions'
import { fetchEvents } from '../../Actions/eventActions'
import LocationShowData from './LocationShowData'
import { withRouter } from 'react-router'
import { compose } from "redux"

class LocationShow extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchLocations()
        this.props.boundFetchEvents()
    }

    getLocation = () => {
        let id = parseInt(this.props.match.params.id)
        return this.props.locations.filter(location => location.id === id)
    }

    getEvents = (id) => {
        return this.props.events.filter(event => event.location_id === id)
    }

    render() {
        return (
            <div className="location-show-container">
                {this.getLocation().map((location, index) => {
                    return (  
                        <LocationShowData key={index}
                            locationName={location.location_name}
                            locationAddressLineOne={location.location_address_line_one} 
                            locationAddressLineTwo={location.location_address_line_two} 
                            locationCity={location.location_city} 
                            locationState={location.location_state} 
                            locationZip={location.location_zip_code} 
                            locationEvents={this.getEvents(location.id)}
                        />
                    )
                })}
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

export default compose (withRouter, connect(mapStateToProps, mapDispatchToProps)) (LocationShow)
