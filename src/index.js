import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import Calendar from './components/calendarWithEvents/';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state.events = [
      {date:"20.06.2019", events:[{name:"event name",body:"event body", time:"11:00"}]},
      {date:"22.06.2019", events:[{name:"event 2",body:"event 2", time:"12:00"}]},
      {date:"2.07.2019", events:[
        {name:"PRACTICE",body:"Sope Creek", time:"12:00", style:{backgroundColor:'#0B3157', opacity:0.5}}
      ]},
      {date:"3.07.2019", events:[
        {name:"PRACTICE",body:"Sope Creek", time:"11:00"},
        {
          name:"PRACTICE",body:"Blanket's Creek", time:"10:00",
          style:{backgroundColor:'#0B3157', opacity:0.5},
          visualiserStyle:{backgroundColor:"#BAD1CD"}
        }
      ]},
      {date:"9.07.2019", events:[
        {
          name:"PRACTICE",body:"Test Creek", time:"17:00",
          style:{backgroundColor:'#0B3157', opacity:0.5},
          visualiserStyle:{backgroundColor:"#BAD1CD"}
        },
        {
          name:"PRACTICE",body:"Test's Creek", time:"18:00",
          style:{backgroundColor:'red', opacity:0.5},
          visualiserStyle:{backgroundColor:"#F06543"}
        }
      ]}
    ];
    this.state.daysOff = [
      "1.07.2019",
      "9.05.2019"
    ];
  }
  state = {
    events:undefined
  }
  render () {
    return (
      <div id = "main">
        <Calendar
          events = {this.state.events}
          daysOff = {this.state.daysOff}
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
