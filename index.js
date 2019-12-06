import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  condition=1;
  isFirstCondition=false;
  render() {
    let conditionalElement=null;
    if(this.condition==2)
    {
      conditionalElement=<span>Condition 2</span>;
    }
    else if(this.isFirstCondition){
      conditionalElement=<span>Condition 1</span>;
    }
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        {this.condition===1?<span>Condition 1</span>
        :<span>Condition 2</span>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
