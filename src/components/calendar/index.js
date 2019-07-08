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
    firstDay:undefined,
    lastDay:undefined,
    mode:undefined
  }
  componentWillMount () {
    this.update(moment());
  }

  update (m) {
    if (this.state.mode === "week")
      this.weekUpdate(m);
    else
      this.monthUpdate(m);
  }
  weekUpdate (m) {
    this.props.updateMethod(m);
    const aD = moment(m);
    const fD = moment(m.startOf("week"));
    const lD = moment(m.endOf("week"));
    //задаем числа
    const arr = [];
    let th = moment(fD);
    let i = th.format('e');
    while (i<=lD.format('e')) {
      arr[i] = {display:"block", content: th.format('D'), date: th.format('YYYY-MM-DD')};
      th.add(1,'day');
      i++;
    }
    //
    this.setState({
      firstDay:fD,
      lastDay:lD,
      activeDay:aD,
      mode:"week",
      numberArray:arr
    });
    //
  }
  monthUpdate (m) {
    this.props.updateMethod(m);
    const aD = moment(m);
    const fD = moment(m.startOf("month"));
    const lD = moment(m.endOf("month"));
    //задаем числа
    const arr = [];
    let th = moment(fD);
    let i = th.format('D');
    let ind = 0;
    const sdvig = fD.format('e');
    while (i<=lD.format('D')) {
      ind = Number(i) + Number(sdvig) - 1;
      arr[ind] = {display:"block", content: th.format('D'), date: th.format('YYYY-MM-DD')};
      th.add(1,'days');
      i++;
    }
    m = aD;
    //
    this.setState({
      firstDay:fD,
      lastDay:lD,
      activeDay:aD,
      mode:"month",
      numberArray:arr
    });

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
    if (m === "week") this.weekUpdate(this.state.activeDay);
    else this.monthUpdate(moment(this.state.activeDay).startOf('month'));
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
