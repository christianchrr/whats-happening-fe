import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../../Actions/eventActions'
import EventData from './EventData'

class EventList extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchEvents()
    }

    render() {
        return (
            <div className="event-list-container">
                <ul id="EventList" className="list-group">
                    {this.props.events.map((event, index) => {
                        return (
                            <li className="list-group-item">
                                <EventData eventName={event.name} eventMonth={event.month} eventDay={event.day} eventYear={event.year} eventDescription={event.description}/>
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
    return { boundFetchEvents: () => dispatch(fetchEvents()) }
}

export default connect (mapStateToProps, mapDispatchToProps) (EventList)