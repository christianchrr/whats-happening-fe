export const fetchLocations = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/locations')
            .then(response => response.json())
            .then(locations => dispatch({ type: 'SET_LOCATION_LIST', payload: locations }));
    };
}

export const addLocation = (location) => {
    return (dispatch) => {
        fetch('http://localhost:3000/locations', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({location: location})
        })
        .then((obj) => obj.json())
        .then((obj) => dispatch({ type: 'ADD_LOCATION', payload: obj }))
    }
}

export const deleteLocation = (locationId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/locations/${locationId}`, {
            method: 'DELETE',
        })
        .then((obj) => dispatch({ type: 'REMOVE_LOCATION', payload: locationId}))
    }
}
