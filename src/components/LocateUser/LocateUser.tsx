import React, { FC, useEffect, useContext } from 'react';
import { GeolocatedProps, geolocated } from "react-geolocated";

import { UPDATE_LOCATION, UserContext } from '../../Context.jsx';

const LocateUser:FC<GeolocatedProps> = (props) => {
  const { user, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (user && props.coords) {
      dispatch({ type: UPDATE_LOCATION, temperature: 0, latitude: props.coords.latitude, longitude: props.coords.longitude });
    }
  }, [props.coords])

  return !props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : props.coords ? (
      <table>
        <tbody>
            <tr>
                <td>latitude</td>
                <td>{props.coords.latitude}</td>
            </tr>
            <tr>
                <td>longitude</td>
                <td>{props.coords.longitude}</td>
            </tr>
        </tbody>
      </table>
    ) : (
      <div>Please enable location for this site in your browser</div>
    );
}

export default geolocated()(LocateUser);