import React from 'react';
  import './style.css';
  import Event from '../oneEvent/';

class Events extends React.Component {
  renderAllEvents (events) {
    var arr = [];
    for (var i = 0;i<events.length;i++)
      arr[i] = this.renderOneEvent(events[i],i);
    return(arr);
  }
  renderOneEvent (event,key) {
    return (
      <Event {...event} key = {key}/>
    );
  }
  render () {
    return (
      <div id = "events">
        {this.renderAllEvents(this.props.events)}
      </div>
    );
  }
}
export default Events;
