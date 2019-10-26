import React, { FC, useContext, Fragment } from 'react';
import styled from 'styled-components';

import LocateUser from '../LocateUser';
import Slider from '../Slider';
import { UserContext, UPDATE_TEMPERATURE } from '../../Context';
import FetchWeather from '../FetchWeather';

const theme = {
  freezing: '#00ffff',
  mid: '#fff700',
  hot: '#ff8c00',
}

const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main:FC = () => {
  const { user, dispatch } = useContext(UserContext);

  const calcColour = (temp: number) => {
    if (temp <= -10 ) return theme.freezing;
    if (temp >= 30 ) return theme.hot;    
    if (temp < 10 ) {
      const normalise = (temp + 10) / 20;
      return `rgb(${normalise*255}, ${255-(normalise*8)}, ${255-(normalise*255)})`
    }
    const normalise = (temp - 10) / 20;
    return `rgb(255, ${247-(normalise*107)}, 0)`
  }

  const handleChange = (newVal: number) => {
    dispatch({ ...user, type: UPDATE_TEMPERATURE, temperature: newVal });
  }

  return (
    <MainStyled style={{ backgroundColor: user.located ? calcColour(user.temperature) : '#fff' }}>
      {user.located && <Fragment>
        <FetchWeather lat={user.latitude} lon={user.longitude} />
        <div>{user.temperature} <sup>o</sup>C</div>
        <Slider initVal={user.temperature} handleChange={handleChange} />
      </Fragment>}
      {!user.located && <LocateUser />}
    </MainStyled>
  )
}

export default Main;
