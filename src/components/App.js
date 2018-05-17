import React, { Component } from 'react';
import TodosContainer from 'containers/TodosContainer'
import { Provider } from 'react-redux'
import store from 'store'
import 'stylesheets/global.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    );
  }
}

export default App;
