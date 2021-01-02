import React from 'react'
import { connect } from 'react-redux';
import { addEvent } from '../../Actions/eventActions'

class EventForm extends React.Component {

    initialState = {
        eventName: "",
        eventMonth: "",
        eventDay: "",
        eventYear: "",
        eventDescription: "",
        locationId: ""
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
            event_name: this.state.eventName,
            event_month: this.state.eventMonth,
            event_day: this.state.eventDay,
            event_year: this.state.eventYear,
            event_description: this.state.eventDescription,
            location_id: this.state.locationId
        }

        return request
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const event = this.translateToSnake()
        this.props.addEvent(event)
        this.setState(this.initialState)
    }

    render() {
        return (
            <div className="event-form-container">
                <h4>New Event Form</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="eventName">
                            <input onChange={this.handleChange} value={this.state.eventName} type="text" name="eventName" placeholder="Name" />
                        </label>
                        <br/>
                        {/* <label htmlFor="eventDate">
                            <input onChange={this.handleChange} type="date" name="eventDate" placeholder="Date" />
                        </label>
                        <br/> */}
                        <label htmlFor="eventMonth">
                            <input onChange={this.handleChange} value={this.state.eventMonth} type="number" name="eventMonth" placeholder="Month" />
                        </label>
                        <br/>
                        <label htmlFor="eventDay">
                            <input onChange={this.handleChange} value={this.state.eventDay} type="number" name="eventDay" placeholder="Day" />
                        </label>
                        <br/>
                        <label htmlFor="eventYear">
                            <input onChange={this.handleChange} value={this.state.eventYear} type="number" name="eventYear" placeholder="Year" />
                        </label>
                        <br/>
                        <label htmlFor="eventDescription">
                            <input onChange={this.handleChange} value={this.state.eventDescription} type="description" name="eventDescription" placeholder="Description" />
                        </label>
                        <br/>
                        <label htmlFor="eventLocation">
                            <select onChange={this.handleChange} value={this.state.LocationId} name="locationId">
                                <option selected disabled>Location</option>
                                {this.props.locations.map((location, index) => {
                                    return <option key={index} value={location.id}>{location.location_name}</option>
                                })}
                            </select>
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-outline-primary">Create Event</button>
                    </div>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {events: state.event.events, locations: state.location.locations}
}

export default connect (mapStateToProps, { addEvent }) (EventForm)