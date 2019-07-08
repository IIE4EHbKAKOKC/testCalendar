import React from 'react';
  import './style.css';
  import Cell from '../cell/';
  import moment from 'moment';

class Table extends React.Component {
  renderAllCells (n){
    const arr = [];
    for (let i = 0;i<n;i++)
      if (i % 7 === 0)
        arr[i] = this.renderFirstCell(i);
      else
        arr[i] = this.renderOneCell(i);
    return arr;
  }
  renderFirstCell (i) {
    return (
      <div id = "first" key = {i}>{this.renderOneCell(i)}</div>
    );
  }
  getColor (i) {
    if (this.props.data[i]=== undefined) return (" ");
    const arr = [];
    if (this.props.data[i].date === this.props.activeDay)
      arr[0] = "#0B3157";
    else
      arr[0] = "white";

    if (this.props.data[i].date === this.props.activeDay)
        arr[1] = "white";
    else
        arr[1] = "#0B3157";

    if (this.isDayOff(i)) {
        arr[1] = "#F06543";
    }

    return arr;
  }
  isDayOff (i) {
    if (this.props.data[i] === undefined) return false;
    //заданные выходные
    if((moment(this.props.data[i].date).format('dddd') === "Sunday")||(moment(this.props.data[i].date).format('dddd') === "Saturday"))
      return true;

    if (this.props.daysOff.indexOf((moment(this.props.data[i].date).format('D.MM.YYYY'))) > -1)
      return true;

    return false;
  }
  renderOneCell (i) {
    let thEvents = undefined;
    let thStyle = undefined;
    if (this.props.data[i]!==undefined) {
      let thDate = moment(this.props.data[i].date).format('D.MM.YYYY');
      if (this.props.events[thDate] !== undefined) {
        thEvents = this.props.events[thDate].count;
        thStyle = this.props.events[thDate].styles;
      }
    }

    return (
      <Cell
        {...this.props.data[i]}
        key = {i}
        updateMethod = {()=>this.props.updateMethod(moment(this.props.data[i].date))}
        color = {this.getColor(i)}
        events = {thEvents}
        style = {thStyle}
      />
    );
  }
  render () {
    return (
      <div id = "table">
        {this.renderAllCells(this.props.n)}
      </div>
    );
  }
}
export default Table;
