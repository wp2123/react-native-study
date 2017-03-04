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

class MessageItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
    onPress: PropTypes.func
  };
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={style.wrapper}>
          <View style={style.leftContent}>
            <View style={style.avator}></View>
          </View>
          <View style={style.rightContent}>
            <Text style={style.name}>{this.props.name}</Text>
            <Text style={style.message} numberOfLines={1}>{this.props.message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: pageWidth,
    height: 60
  },
  leftContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60
  },
  rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  avator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#999'
  },
  name: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10
  },
  message: {
    fontSize: 14,
    color: '#999'
  }
});

export default MessageItem;

