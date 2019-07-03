import React from 'react';
  import './style.css';
  import Table from '../table/';
  import Header from '../calendarHeader/';
  import WeekDays from '../weekDays/';
  import moment from 'moment';

class Calendar extends React.Component {
  state = {
    numberArray:[],
    activeDay:undefined,
    firstDay:moment(),
    lastDay:moment(),
    mode:"week"
  }
  constructor (props) {
    super(props);
    this.update(this.state.activeDay);
  }
  update (m) {
    if (m === undefined)
      m = moment();
    this.props.updateMethod(m);
    if (this.state.mode === "week")
      this.weekUpdate(m);
    else
      this.monthUpdate(m);
  }
  weekUpdate (m) {
    if (m === undefined)
      m = moment();
    var aD = moment(m);
    var fD = moment(m.startOf("week"));
    var lD = moment(m.endOf("week"));
    //задаем числа
    var arr = [];
    var th = moment(fD);
    var i = th.format('e');
    while (i<=lD.format('e')) {
      arr[i] = {display:"block", content: th.format('D'), date: th.format('YYYY-MM-DD')};
      th.add(1,'day');
      i++;
    }
    //
    var s = {
      firstDay:fD,
      lastDay:lD,
      activeDay:aD,
      mode:"week",
      numberArray:arr
    };
    if (this.state.activeDay === undefined)
      this.state = s;
      else this.setState(s);
    //
  }
  monthUpdate (m) {
    if (m === undefined)
      m = moment();
    var aD = moment(m);
    var fD = moment(m.startOf("month"));
    var lD = moment(m.endOf("month"));
    //задаем числа
    var arr = [];
    var th = moment(fD);
    var i = th.format('D');
    var ind = 0;
    var sdvig = fD.format('e');
    while (i<=lD.format('D')) {
      ind = Number(i) + Number(sdvig) - 1;
      arr[ind] = {display:"block", content: th.format('D'), date: th.format('YYYY-MM-DD')};
      th.add(1,'days');
      i++;
    }
    m = aD;
    //
    var s = {
      firstDay:fD,
      lastDay:lD,
      activeDay:aD,
      mode:"month",
      numberArray:arr
    };
    if (this.state.activeDay === undefined)
      this.state = s;
      else this.setState(s);

  }
  prev () {
    if (this.state.mode === "week")
      this.update(moment(this.state.activeDay).subtract(1,'week'));
    else
      this.update(moment(this.state.activeDay).subtract(1,'month'));
  }
  next () {
    if (this.state.mode === "week")
      this.update(moment(this.state.activeDay).add(1,'week'));
    else
      this.update(moment(this.state.activeDay).add(1,'month'));
  }
  getN () {
    if (this.state.mode === "week")
      return (7);
    else
      return(35);
  }
  setMode(m) {
    this.state.mode = m;
    if (this.state.mode === "week ") this.update(this.state.activeDay);
    else this.update(moment(this.state.activeDay).startOf('month'));
  }
  render () {
    return (
      <div id = "calendar">
        <Header
           setWeekMode = {()=>{this.setMode("week")}}
           prev = {()=>{this.prev()}}
           next = {()=>{this.next()}}
           setMonthMode = {()=>{this.setMode("month")}}
           firstDay = {this.state.firstDay.format('DD')}
           lastDay = {this.state.lastDay.format('DD')}
           month1 = {this.state.firstDay.format('MMMM')}
           month2 = {this.state.lastDay.format('MMMM')}
         />
        <WeekDays />
        <Table
          data = {this.state.numberArray}
          n = {this.getN()}
          updateMethod = {(m)=>{this.update(m)}}
          activeDay = {this.state.activeDay.format('YYYY-MM-DD')}
          daysOff = {this.props.daysOff}
          events = {this.props.events()}
        />
      </div>
    );
  }
}
export default Calendar;
