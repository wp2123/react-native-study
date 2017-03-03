import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Index from 'boxes/Index';

class App extends Component {
  render() {
    return (
      <Index/>
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

