import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <>
      <header>
        <div className="backButton" data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-sm"/>
          </Link>
        </div>
        <div className="monthPicker">
          <h1>
            <i className="fa fa-chevron-left fa-sm"/>
            month component
            <i className="fa fa-chevron-right fa-sm"/>
          </h1>
        </div>
      </header>
      <div className="row">
        <main className="monthPicker col">
          <h2>MonthView component</h2>
        </main>
        <section className="utilityBar col-2">sidebar</section>
      </div>
    </>
  );
}
