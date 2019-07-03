import React from 'react';
  import './style.css';
  import EventsVisualiser from '../eventsVisualiser/';

const Cell = (props) => {
    const thCursor = () => {
      if (props.display === "block") return 'pointer';
      else return 'default';
    }
    return (
      <div className = "cell" style = {{
        cursor:thCursor()
      }}>
        <div
          id = "content"
          onClick = {()=>{
            if (props.display === "block") props.updateMethod();
          }}
          style = {{
            display:props.display,
            backgroundColor:props.color[0],
            color:props.color[1]
          }}>
          {props.content}
        </div>
          <EventsVisualiser
            events = {props.events}
            display = {props.display}
            styles = {props.style}
          />
      </div>
    );
}
export default Cell;
