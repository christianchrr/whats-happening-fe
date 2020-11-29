import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../../Actions/eventActions'
import { fetchLocations } from '../../Actions/locationActions'
import EventData from './EventData'

class EventList extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchEvents()
        this.props.boundFetchLocations()
    }

    render() {
        return (
            <div className="event-list-container">
                <ul id="EventList" className="list-group">
                    {this.props.events.map((event, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                <EventData eventName={event.event_name} eventMonth={event.event_month} eventDay={event.event_day} eventYear={event.event_year} eventDescription={event.event_description} eventId={event.id}/>
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