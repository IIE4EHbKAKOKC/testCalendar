import React from 'react';
  import CalendarPart from '../calendar/';
  import EventsPart from '../events/';
  import moment from 'moment';

class Calendar extends React.Component {
  state = {
    date:undefined
  }
  getEvents () {
    if (this.state.date === undefined) return [];

    var thEvents = this.props.events.find(x=>x.date === this.state.date);
    if ((thEvents === undefined)||(!thEvents.hasOwnProperty("events"))) return [];

    return thEvents.events;
  }
  update (m) {
    if (m===undefined)
      m = moment();
    this.setState ({
      date:m.format('D.MM.YYYY')
    });
  }
  getStyleArray (events) {
    var arr = [];
    for (var i = 0;i < events.length; i++)
      arr[i] = events[i].visualiserStyle;
    return arr;
  }
  render () {
    return (
      <div id = "calendar-with-events">
        <CalendarPart
          daysOff = {this.props.daysOff}
          updateMethod = {(m)=>{this.update(m);}}
          events = {()=>{
            var arr = [];
            for (var i = 0;i<this.props.events.length;i++) {
              arr[this.props.events[i].date] = {
                count:this.props.events[i].events.length,
                styles:this.getStyleArray(this.props.events[i].events)
              }
            }
            return arr;
          }}
        />
        <EventsPart events = {this.getEvents(this.state.date)}/>
      </div>
    );
  }
}
export default Calendar;
