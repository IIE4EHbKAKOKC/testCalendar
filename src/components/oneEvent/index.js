import React from 'react';
  import './style.css';
const Event = (props) => {
  return (
    <div id = "one-event" style = {props.style}>
      <div id = "one-event-header">
        <div id = "one-event-name">
          {props.name}
        </div>
        <div id = "one-event-time">
          {props.time}
        </div>
      </div>
      <div id = "one-event-body">
        {props.body}
      </div>
    </div>
  );
}
export default Event;
