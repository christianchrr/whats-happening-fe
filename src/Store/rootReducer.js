import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    location: locationReducer,
    event: eventReducer
});

export default rootReducer

function locationReducer(state = { locations: [] }, action) {
    switch (action.type) {
   
        case 'SET_LOCATION_LIST':
            return {
                ...state,
                locations: action.payload
            }

        case 'ADD_LOCATION':
            return {
                ...state,
                locations: [...state.locations, action.payload]
            }

        case 'REMOVE_LOCATION':
            let locationidx = state.locations.findIndex(location => location.id === location.id);
            return {
                ...state,
                locations: [...state.locations.slice(0, locationidx), ...state.locations.slice(locationidx + 1)]
            }
   
        default:
            return state;
    }
  };

  function eventReducer(state = { events: [] }, action) {
    switch (action.type) {
   
        case 'SET_EVENT_LIST':
            return {
                ...state,
                events: action.payload
            }

        case 'ADD_EVENT':
            return {
                ...state,
                events: [...state.events, action.payload]
            }

        case 'REMOVE_EVENT':
            let eventidx = state.events.findIndex(event => event.id === event.id);
            return {
                ...state,
                events: [...state.events.slice(0, eventidx), ...state.events.slice(eventidx + 1)]
            }
   
        default:
            return state;
    }
  };