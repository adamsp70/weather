import React, { FC, useContext, useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import { UserContext, UPDATE_TEMPERATURE } from '../../Context';

export interface IProps {
  lat: number,
  lon: number,
}

const FetchWeather:FC<IProps> = (props) => {
  const [data, setData] = useState();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://api.openweathermap.org/data/2.5/weather?APPID=b3b799439a921271f19884129933e53b&units=metric&lat=${props.lat}&lon=${props.lon}`,
      );
//      console.log(result.data)
      setData(result.data);
      dispatch({ type: UPDATE_TEMPERATURE, temperature: result.data.main.temp, latitude: 0, longitude: 0 });
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {data && data.weather && data.weather[0].icon && <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather.description} />}
    </Fragment>
  );
}

export default FetchWeather;
