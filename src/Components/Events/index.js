import React from 'react'
import EventList from './EventList'
import EventForm from './EventForm'

const Events = () => {

    return (
        <div className="event-container">
            <h3>All Events</h3>
            <br/>
            <EventList />
            <br/>
            <EventForm />
        </div>
    )
}

export default Events