import React from 'react';

export const initState = {
  located: false,
  latitude: 0,
  longitude: 0,
  temperature: 0,
} 

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_TEMPERATURE = 'UPDATE_TEMPERATURE';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        located: true,
        latitude: action.latitude,
        longitude: action.longitude,
      }
    case UPDATE_TEMPERATURE:
      return {
        ...state,
        temperature: action.temperature,
      }
    default:
      return state;
  }
}

export const UserContext = React.createContext();
