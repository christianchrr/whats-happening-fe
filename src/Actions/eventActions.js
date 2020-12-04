export function fetchEvents() {
    return (dispatch) => {
      fetch('http://localhost:3000/events')
        .then(response => response.json())
        .then(events => dispatch({ type: 'SET_EVENT_LIST', payload: events }));
    };
}

export const addEvent = (event) => {
  return (dispatch) => {
      fetch('http://localhost:3000/events', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({event: event})
      })
      .then((obj) => obj.json())
      .then((obj) => {
        return dispatch({ type: 'ADD_EVENT', payload: obj })
      })
  }
}

export const deleteEvent = (eventId) => {
  return (dispatch) => {
      fetch(`http://localhost:3000/events/${eventId}`, {
          method: 'DELETE'})
      .then((obj) => dispatch({ type: 'REMOVE_EVENT', payload: eventId}))
  }
}