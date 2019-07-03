import React from 'react';
  import './style.css';

class Header extends React.Component {
  state = {
    menuDisplay:"none"
  }
  getLastMonth () {
    if (this.props.month1 !== this.props.month2)
      return (this.props.month2 + " ");
    else
      return ("");
  }
  render () {
    return (
      <div id = "calendar-header">
        <div
          className = "button"
          id = "left"
          onClick = {(e)=>{this.props.prev()}}
        >
          <div id = "text">PREV</div>
        </div>
        <div id = "flex"><div
          className = "button"
          id = "center"
          onClick = {(e)=>{this.setState({menuDisplay:"block"})}}
        >
          <div id = "text">
            {this.props.month1} {this.props.firstDay}
            -
            {this.getLastMonth()}
            {this.props.lastDay}
          </div>
          <div id = "triangle">&#9660;</div>
        </div></div>
        <div
          className = "button"
          id = "right"
          onClick = {(e)=>{this.props.next()}}
        >
          <div id = "text">NEXT</div>
        </div>
        <div id = "drop-down-menu" style = {{display:this.state.menuDisplay}}>
          <div
            className = "button"
            id = "i1"
            onClick = {(e)=>{
                this.setState({menuDisplay:"none"});
                this.props.setWeekMode();
              }
            }
          >
            This week
          </div>
          <div
            className = "button"
            id = "i2"
            onClick = {(e)=>{
                this.setState({menuDisplay:"none"});
                this.props.setMonthMode();
              }
            }
          >
            This month
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
