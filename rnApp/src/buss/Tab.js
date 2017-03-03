import React, {
  Component,
  PropTypes
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

let pageWidth = Dimensions.get('window').width;

export class TabItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    name: PropTypes.string
  };
  render() {
    return (
      <TouchableOpacity style={style.item} onPress={() => this.props.onSwithTab(this.props.name)}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

class Tab extends Component {
  render() {
    return (
      <View style={style.wrapper}>
        {this.props.children}
      </View>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: pageWidth,
    height: 60,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderTopWidth: 1
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Tab;

