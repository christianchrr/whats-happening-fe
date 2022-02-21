import React from 'react'
import { connect } from 'react-redux';
import { addLocation } from '../../Actions//locationActions'

class LocationForm extends React.Component {

    initialState = {
        locationName: "",
        locationAddressLineOne: "",
        locationAddressLineTwo: "",
        locationCity: "",
        locationState: "",                    
        locationZipCode: ""
    }

    state = this.initialState

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    translateToSnake = () => {
        const request = {
            location_name: this.state.locationName,
            location_address_line_one: this.state.locationAddressLineOne,
            location_address_line_two: this.state.locationAddressLineTwo,
            location_city: this.state.locationCity,
            location_state: this.state.locationState,
            location_zip_code: this.state.locationZipCode
        }

        return request
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const location = this.translateToSnake()
        if (this.state.locationState != null) {
            this.props.addLocation(location)
            this.setState(this.initialState)
        }
        
    }

    stateOptions = [ 
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", 
        "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", 
        "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", 
        "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ]

    render() {
        return (
            <div className="location-form-container">
                <h4>New Location Form</h4>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="locationName">
                            <input onChange={this.handleChange} value={this.state.locationName} type="text" name="locationName" placeholder="Name" required />
                        </label>
                        <br/>
                        <label htmlFor="locationAddressLineOne">
                            <input onChange={this.handleChange} value={this.state.locationAddressLineOne} type="text" name="locationAddressLineOne" placeholder="Address Line One" required />
                        </label>
                        <br/>
                        <label htmlFor="locationAddressLineTwo">
                            <input onChange={this.handleChange} value={this.state.locationAddressLineTwo} type="text" name="locationAddressLineTwo" placeholder="Address Line Two" />
                        </label>
                        <br/>
                        <label htmlFor="locationCity">
                            <input onChange={this.handleChange} value={this.state.locationCity} type="text" name="locationCity" placeholder="City" required />
                        </label>
                        <br/>
                        <label htmlFor="locationState">
                            <select onChange={this.handleChange} name="locationState">
                                <option selected disabled>State</option>
                                {this.stateOptions.map((option, index) => {
                                    return (
                                        
                                        <option value={option}>{option}</option>
                                    )
                                })}
                            </select>
                        </label>
                        <br/>
                        <label htmlFor="locationZipCode">
                            <input onChange={this.handleChange} value={this.state.locationZipCode} type="text" name="locationZipCode" placeholder="Zip" />
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-outline-primary">Create Location</button>
                    </div>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {locations: state.location.locations}
}

export default connect (mapStateToProps, { addLocation }) (LocationForm)