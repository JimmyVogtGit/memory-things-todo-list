import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Pomodoro.css';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import tomato from '../assets/img/pomodoro.png';

export default function Pomodoro() {
  const [settingTime, setSettingTime] = useState(1500);
  const [actualTime, setActualTime] = useState(1500);

  const [topChrono, setTopChrone] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TIME':
        if (actualTime > 0) {
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
    config.fontColor = '#faf9f2';
    config.fill = '#121212';
    config.linearGradient = ['#FFC857', '#DA9532'];
    setUpdateConfig(config);
  }, [actualTime]);

  return (
    <div className='pomodoro-container'>
      <h2>Bienvenue sur le minuteur Pomodoro</h2>
      <a
        href='https://fr.wikipedia.org/wiki/Technique_Pomodoro#:~:text=La%20technique%20Pomodoro%20est%20une,en%20italien%20%C2%AB%20tomates%20%C2%BB).'
        target='_blank'
      >
        En savoir plus sur le pomodoro
      </a>
      <br />
      <div className="global-timer">
      <div className='set-timer'>
        <button className='btn-more' onClick={addSettingTime}></button>
        <span>
          {settingTime / 60} {settingTime / 60 <= 1 ? 'minute' : 'minutes'}
        </span>
        <button className='btn-less' onClick={sousSettingTime}></button>
      </div>
      <h1>
        {Math.trunc(actualTime / 60)} :
        {actualTime % 60 < 10 ? `0${actualTime % 60}` : actualTime % 60}
      </h1>
      <div className='launch-chrono'>
        <button
          className={topChrono ? 'btn-launch stop' : 'btn-launch start'}
          onClick={startChrono}
        ></button>
        <button className='btn-reset' onClick={resetTime}></button>
      </div>

      </div>
      
      <CircularProgressBar {...updateConfig} />
    </div>
  );
}
