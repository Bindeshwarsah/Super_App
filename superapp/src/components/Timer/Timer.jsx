import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';
import IncBtnLogo from "../../assets/logo/IncBtnLogo.svg";
import DecBtnLogo from "../../assets/logo/DecBtnLogo.svg";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Ringtone from "../../assets/Ringtone/beep.mp3";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('Start');
  const [countdownKey, setCountdownKey] = useState(0);

  const playRingtone = () => {
    const audio = new Audio(Ringtone);
    audio.play();

    // Stop the audio after 4 seconds
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 4000);
  };

 
  const toggleTimer = () => {
    if (!isRunning) {
      if (hours > 0 || minutes > 0 || seconds > 0) {
        setIsRunning(true);
        setButtonText('Stop');
      }
    } else {
      setIsRunning(false);
      setButtonText('Start');
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setCountdownKey((prevKey) => prevKey + 1); // Change the key to reset the CountdownCircleTimer
      playRingtone();
    }
  };
  const handleInputChange = (value, maxValue, setValue) => {
    if (value >= 0 && value <= maxValue) {
      setValue(value);
    }
  };

  const formatTwoDigits = (value) => {
    return value.toString().padStart(2, '0');
  };

  const increment = (value, maxValue, setValue) => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const decrement = (value, setValue) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className={styles.timerContainer}>
      <div className={styles.countDownOuterCircle}>
        <div className={styles.countdownCircle}>
          <CountdownCircleTimer
            key={countdownKey}
            isPlaying={isRunning}
            duration={hours * 3600 + minutes * 60 + seconds}
            colors={['#FF6A6A']}
            size={150}
            onComplete={() => {
              setIsRunning(false);
              setButtonText('Start');
              setHours(0);
              setMinutes(0);
              setSeconds(0);
              setCountdownKey((prevKey) => prevKey + 1); // Change the key on completion
              playRingtone();
            }}
          >
            {({ remainingTime }) => (
              <div className={styles.timerDisplay}>
                <span>{formatTwoDigits(Math.floor(remainingTime / 3600))}</span>:
                <span>{formatTwoDigits(Math.floor((remainingTime % 3600) / 60))}</span>:
                <span>{formatTwoDigits(remainingTime % 60)}</span>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
      </div>

      <div className={styles.rightCard}>
        <div className={styles.timerSection}>
          <div className={styles.timerInput}>
            <label className={styles.level}>Hours</label>
            <div onClick={() => increment(hours, 24, setHours)}>
              <img src={IncBtnLogo} alt="incrementLogo" className={styles.IncBtnLogo}/>
            </div>
            <input
              type="text" readOnly
              value={formatTwoDigits(hours)}
              onChange={(e) => handleInputChange(parseInt(e.target.value, 10), 24, setHours)}
              className={styles.inputTime}/>
            <div onClick={() => decrement(hours, setHours)}>
              <img src={DecBtnLogo} alt="decrementLogo" className={styles.DecBtnLogo}/>
            </div>
          </div>
          <div className={styles.colon}>:</div>
          <div className={styles.timerInput}>
            <label className={styles.level}>Minutes</label>
            <div onClick={() => increment(minutes, 60, setMinutes)}>
              <img src={IncBtnLogo} alt="incrementLogo" className={styles.IncBtnLogo}/>
            </div>
            <input
              type="text" readOnly
              value={formatTwoDigits(minutes)}
              onChange={(e) => handleInputChange(parseInt(e.target.value, 10), 60, setMinutes)}
              className={styles.inputTime}/>
            <div onClick={() => decrement(minutes, setMinutes)}>
              <img src={DecBtnLogo} alt="decrementLogo" className={styles.DecBtnLogo}/>
            </div>
          </div>
          <div className={styles.colon}>:</div>
          <div className={styles.timerInput}>
            <label className={styles.level}>Seconds</label>
            <div onClick={() => increment(seconds, 60, setSeconds)}>
              <img src={IncBtnLogo} alt="incrementLogo" className={styles.IncBtnLogo} />
            </div>
            <input
              type="text" readOnly
              value={formatTwoDigits(seconds)}
              onChange={(e) => handleInputChange(parseInt(e.target.value, 10), 60, setSeconds)}
              className={styles.inputTime}/>
            <div onClick={() => decrement(seconds, setSeconds)}>
              <img src={DecBtnLogo} alt="decrementLogo" className={styles.DecBtnLogo}/>
            </div>
          </div>
        </div>

        <div className={styles.timerControls}>
            <button onClick={toggleTimer} className={styles.timerBtn}>
              {buttonText}
            </button>
          </div>

      </div>
      
    </div>
  );
};

export default Timer;