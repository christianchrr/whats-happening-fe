import React from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from '../../Actions/locationActions'
import LocationData from './LocationData'

class LocationList extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchLocations()
    }

    render() {
        return (
            <div className="location-list-container">
                <ul id="LocationList" className="list-group">
                    {this.props.locations.map((location, index) => {
                        return (
                            <li className="list-group-item">
                                <LocationData locationName={location.name} locationAddressLineOne={location.address_line_one} locationAddressLineTwo={location.address_line_two} locationCity={location.city} locationState={location.state} locationZip={location.zip} locationId={location.id} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {locations: state.locations}
}

function mapDispatchToProps(dispatch){
    return { boundFetchLocations: () => dispatch(fetchLocations()) }
}

export default connect (mapStateToProps, mapDispatchToProps) (LocationList)