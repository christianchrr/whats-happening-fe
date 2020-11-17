export function fetchEvents() {
    return (dispatch) => {
      fetch('http://localhost:3000/events')
        .then(response => response.json())
        .then(events => dispatch({ type: 'SET_EVENT_LIST', payload: events }));
    };
}
