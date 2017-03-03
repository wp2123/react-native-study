import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={style.wrapper}>
        <Text style={style.helloWords}>Hello, RN!</Text>
      </View>
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

