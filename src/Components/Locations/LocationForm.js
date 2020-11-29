import React from 'react'
import { connect } from 'react-redux';
import { addLocation } from '../../Actions/locationActions'

class LocationForm extends React.Component {

    state = {
        locationName: "",
        locationAddressLineOne: "",
        locationAddressLineTwo: "",
        locationCity: "",
        locationState: "",                    
        locationZipCode: ""
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addLocation(this.state)
    }

    render() {
        return (
            <div className="location-form-container">
                <h4>New Location Form</h4>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <div>
                        <label htmlFor="locationName"> 
                            Location Name{" "}
                            <input onChange={this.handleChange} type="text" name="locationName" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="locationAddressLineOne">
                            Address Line 1{" "}
                            <input onChange={this.handleChange} type="text" name="locationAddressLineOne" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="locationAddressLineTwo">
                            Address Line 2{" "}
                            <input onChange={this.handleChange} type="text" name="locationAddressLineTwo" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="locationCity">
                            City{" "}
                            <input onChange={this.handleChange} type="text" name="locationCity" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="locationState">
                            State{" "}
                            <select onChange={this.handleChange} name="locationState">
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AZ">AZ</option>
                                <option value="AR">AR</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="IA">IA</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="ME">ME</option>
                                <option value="MD">MD</option>
                                <option value="MA">MA</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MS">MS</option>
                                <option value="MO">MO</option>
                                <option value="MT">MT</option>
                                <option value="NE">NE</option>
                                <option value="NV">NV</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NY">NY</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WV">WV</option>
                                <option value="WI">WI</option>
                                <option value="WY">WY</option>
                            </select>
                        </label>
                        <br/>
                        <label htmlFor="locationZipCode">
                            Zip{" "}
                            <input onChange={this.handleChange} type="text" name="locationZipCode" placeholder="" />
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