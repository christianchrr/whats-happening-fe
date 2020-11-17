export function fetchLocations() {
    return (dispatch) => {
      fetch('http://localhost:3000/locations')
        .then(response => response.json())
        .then(locations => dispatch({ type: 'SET_LOCATION_LIST', payload: locations }));
    };
}
