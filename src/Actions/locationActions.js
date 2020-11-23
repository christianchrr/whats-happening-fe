export const fetchLocations = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/locations')
            .then(response => response.json())
            .then(locations => dispatch({ type: 'SET_LOCATION_LIST', payload: locations }));
    };
}

export const addLocation = (locationName, locationAddressLineOne, locationAddressLineTwo, locationCity, locationState, locationZip) => {
    let locationData = {
        locationName: locationName,
        locationAddressLineOne: locationAddressLineOne,
        locationAddressLineTwo: locationAddressLineTwo,
        locationCity: locationCity,
        locationState: locationState,
        locationZip: locationZip
    }
    return (dispatch) => {
        fetch(`http://localhost:3000/locations` , {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(locationData)})
            .then((res) => res.json())
            .then((res) => dispatch({ type: 'ADD_LOCATION', location: res }))
        };
    };

export const removeLocation = (locationId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/locations/${location.Id}')
            .then(locations => dispatch({ type: 'REMOVE_LOCATION', id: locationId}))
    }
}