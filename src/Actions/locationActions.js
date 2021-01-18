export const fetchLocations = () => {
    return (dispatch) => {
        try {
            fetch('http://localhost:3000/locations')
              .then(response => response.json())
              .then(locations => dispatch({ type: 'SET_LOCATION_LIST', payload: locations }));
        }
        catch(e) {
            console.log(e)
        }

    };
}

export const addLocation = (location) => {
    try {
        return (dispatch) => {
            fetch('http://localhost:3000/locations', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({location: location})
            })
              .then((obj) => obj.json())
              .then((obj) => dispatch({type: 'ADD_LOCATION', payload: obj}))
        }
    }
    catch(e) {
        console.log(e)
    }
}

export const deleteLocation = (locationId) => {
    try {
        return (dispatch) => {
            fetch(`http://localhost:3000/locations/${locationId}`, {
                method: 'DELETE',
            })
              .then((obj) => dispatch({ type: 'REMOVE_LOCATION', payload: locationId}))
        }
    }
    catch(e) {
        console.log(e)
    }
}
