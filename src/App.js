import React, {Component}from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meet with boss',
        completed: false
      },
    ]
  }

  render() {
    console.log(this.state.todos)
    return (
        <div className="App">
          <Todos todos={this.state.todos} />
        </div>
    );
  }
}

export default App;
