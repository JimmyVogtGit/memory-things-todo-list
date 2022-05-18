import React, { useState, useEffect, useReducer } from 'react';
import '../assets/css/Pomodoro.css';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

export default function Pomodoro() {
  const [settingTime, setSettingTime] = useState(1500);
  const [actualTime, setActualTime] = useState(1500);

  const [topChrono, setTopChrone] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TIME':
        if (actualTime >= 0) {
          setActualTime(actualTime - 1);
        } else if (actualTime <= 0) {
          setActualTime(settingTime);
        }
    }
  };

  const [state, dispatch] = useReducer(reducer);

  const startChrono = () => {
    setTopChrone(!topChrono);
  };

  useEffect(() => {
    let id;

    if (topChrono) {
      id = window.setInterval(() => {
        dispatch({ type: 'TIME' });
      }, 1000);
    }
    return () => {
      window.clearInterval(id);
    };
  }, [topChrono]);

  const addSettingTime = () => {
    setSettingTime(settingTime + 60);
    setActualTime(actualTime + 60);
  };
  const sousSettingTime = () => {
    setSettingTime(settingTime - 60);
    setActualTime(actualTime - 60);
  };

  const resetTime = () => {
    setActualTime(settingTime);
  };
  const [updateConfig, setUpdateConfig] = useState(0);
  useEffect(() => {
    const percent = Math.round(Math.floor(actualTime * 100) / settingTime);
    const config = {};
    config.percent = percent;
    config.colorSlice = '#64b6ac';
    config.fontColor = '#202021';
    config.fill = '#121212';
    config.linearGradient = ['#34a3a1', 'blue'];
    setUpdateConfig(config);
  }, [actualTime]);

  return (
    <div className='pomodoro-container'>
      <div className='set-timer'>
        <button onClick={addSettingTime}>+</button>
        <span>
          Timer {settingTime / 60}{' '}
          {settingTime / 60 <= 1 ? 'minute' : 'minutes'}
        </span>
        <button onClick={sousSettingTime}>-</button>
      </div>
      <h1>
        {Math.trunc(actualTime / 60)} :
        {actualTime % 60 < 10 ? `0${actualTime % 60}` : actualTime % 60}
      </h1>
      <div>
        <button onClick={startChrono}>{topChrono ? 'stop' : 'start'}</button>
        <button onClick={resetTime}>reset</button>
      </div>
      <CircularProgressBar {...updateConfig} />
    </div>
  );
}
