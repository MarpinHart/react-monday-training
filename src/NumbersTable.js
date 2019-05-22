import React, { Component } from 'react';


class NumbersTable extends Component {
  render() {
    let list = []
    for(let i = 0; i < this.props.limit; i++){
      let style = {
        backgroundColor: i % 2 == 0 ? 'red' : 'white',
      }
      list.push(<li style={style} key={i}>{i}</li>)
    }
    return (
      <div className="NumbersTable">
      <h1>Numbers Table</h1>
      <ul>
        {list}
      </ul>
      </div>
    );
  }
}

export default NumbersTable;
