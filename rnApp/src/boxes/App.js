import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Provider} from 'react-redux';
import store from 'reducers';

import Index from 'boxes/Index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloWords: {
    fontSize: 30,
    color: 'green'
  }
});

export default App;

