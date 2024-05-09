import React,{Component} from 'react';

class Counter extends Component {

  constructor() {
    super();
    this.state={
      data : 0,
    }
  }

  updateData() {
    this.setState({data: this.state.data+1})
  }
  render() {

    return (
      <div>
        <h1>Counter value: {this.state.data}</h1>
        <button onClick={()=>this.updateData()}>Update Counter {this.state.data}</button>

        <hr />
        <Counter />
      </div>
    );
  }

}
export default Counter;