import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Calendar.css';
import routes from '../../constants/routes.json';
// import {
//   increment,
//   decrement,
//   incrementIfOdd,
//   incrementAsync,
//   selectCount,
// } from './calendarSlice';

export default function Calendar() {
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-sm"/>
        </Link>
      </div>
      <div className={styles.monthPicker}>
        <h1>YEET</h1>
      </div>
    </div>
  );
}
