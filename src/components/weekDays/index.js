import React from 'react';
  import './style.css';

const WeekDays = (props) => {
  return (
    <div id = "week-days">
      <div className  = "day" id = "day1">S</div>
      <div className  = "day">M</div>
      <div className  = "day">T</div>
      <div className  = "day">W</div>
      <div className  = "day">T</div>
      <div className  = "day">F</div>
      <div className  = "day">S</div>
    </div>
  );
}
export default WeekDays;
