import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../../Actions/eventActions'
import { fetchLocations } from '../../Actions/locationActions'
import EventData from './EventData'

class EventList extends React.Component {

    initialState = {
        eventSearchField: ""
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
        this.props.boundFetchEvents()
        this.props.boundFetchLocations()
    }

    render() {
        return (
            <div className="event-list-container">
                <form>
                    <label onChange={this.handleChange} htmlFor="eventSearchBar">
                        <input type="text" name="eventSearchField" placeholder="Search" />
                    </label>
                </form>
                <ul id="EventList" className="list-group">
                    {this.props.events
                    .filter(
                        event => event.event_name.toUpperCase()
                        .includes(this.state.eventSearchField.toUpperCase()))
                        .map((event, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                <EventData 
                                  eventName={event.event_name} 
                                  eventMonth={event.event_month} 
                                  eventDay={event.event_day} 
                                  eventYear={event.event_year} 
                                  eventDescription={event.event_description}
                                  eventId={event.id}
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
    return {events: state.event.events}
}

function mapDispatchToProps(dispatch){
    return { boundFetchEvents: () => dispatch(fetchEvents()),
        boundFetchLocations: () => dispatch(fetchLocations()) }
}

export default connect (mapStateToProps, mapDispatchToProps) (EventList)