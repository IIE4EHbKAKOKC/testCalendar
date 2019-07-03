import React from 'react';
  import './style.css';

const Visualiser = (props) => {
  const renderOnePart = (i,thStyle) => {
    return (
      <div id = "one-part" key = {i} style = {thStyle}>
      </div>
    );
  }
  const getStyle = (i,width) => {
    var style = {};
    var anotherS = {};
    style.width = width;
    if (props.styles[i]!==undefined)
      anotherS = Object.assign({},props.styles[i]);

    return Object.assign(anotherS,style);
  }
  const renderAllParts = (n) => {
    var arr = [];
    const width = ('calc(90% / ' + props.events + ')');
    if (props.events !== undefined)
    for (var i = 0; i < n; i++) {
      arr[i] = renderOnePart(i,getStyle(i,width));
    }
    return arr;
  }
  return (
    <div id = "events-visualiser" style = {{display:props.display}}>
      {renderAllParts(props.events)}
    </div>
  );
}
export default Visualiser;
