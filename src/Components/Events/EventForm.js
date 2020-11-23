import React from 'react'

class EventForm extends React.Component {

    state = {
        eventName: "",
        eventMonth: "",
        eventDay: "",
        eventYear: "",
        eventDescription: "",
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
        this.props.addEvent(this.state.text)
        this.setState({
            text: ''
        })
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
                            <input onChange={this.handleChange} type="integer" name="eventMonth" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventDay">
                            Day{" "}
                            <input onChange={this.handleChange} type="integer" name="eventDay" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventYear">
                            City{" "}
                            <input onChange={this.handleChange} type="integer" name="eventYear" placeholder="" />
                        </label>
                        <br/>
                        <label htmlFor="eventDescription">
                            Description{" "}
                            <input onChange={this.handleChange} type="description" name="eventDescription" placeholder="" />
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

export default EventForm