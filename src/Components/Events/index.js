import React, { useContext } from 'react'
// import { Context } from '../../Store/index'
import EventList from './EventList'
import EventForm from './EventForm'

const Events = () => {

    // const [state, dispatch] = useContext(Context)

    return (
        <div className="event-container">
            <h3>All Events</h3>
            <br/>
            <EventList />
            <br/>
            <EventForm />
            {/* dispatch={dispatch} state={state} */}
        </div>
    )
}

export default Events