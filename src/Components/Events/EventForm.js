import React from 'react'
import { connect } from 'react-redux';
import { addEvent } from '../../Actions/eventActions'

class EventForm extends React.Component {

    state = {
        eventName: "",
        eventMonth: "",
        eventDay: "",
        eventYear: "",
        eventDescription: "",
        locationId: ""
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
        this.props.addEvent(this.state)
    }

    render() {
        return (
            <div className="event-form-container">
                <h4>New Event Form</h4>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="eventName"> 
                            Event Name{" "}
                            <input onChange={this.handleChange} type="text" name="eventName" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventMonth">
                            Month{" "}
                            <input onChange={this.handleChange} type="number" name="eventMonth" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventDay">
                            Day{" "}
                            <input onChange={this.handleChange} type="number" name="eventDay" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventYear">
                            Year{" "}
                            <input onChange={this.handleChange} type="number" name="eventYear" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventDescription">
                            Description{" "}
                            <input onChange={this.handleChange} type="description" name="eventDescription" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventLocation">
                            <select onChange={this.handleChange} name="locationId">
                                <option selected disabled>-select-</option>
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