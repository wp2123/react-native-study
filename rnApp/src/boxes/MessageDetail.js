import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

let mockData = [
  {isSelf: false, message: '你好'},
  {isSelf: true, message: '你好'},
  {isSelf: false, message: '很高兴认识你'},
  {isSelf: true, message: '我也是'},
  {isSelf: false, message: '吃了吗'},
  {isSelf: true, message: '没'},
  {isSelf: false, message: '那你赶紧去吃饭吧'},
  {isSelf: true, message: '你不请我吗'},
  {isSelf: false, message: '为什么要请'},
  {isSelf: true, message: '不请加什么好友'},
  {isSelf: false, message: '加好友为了哪天让你请我吃饭'},
  {isSelf: true, message: '想得美'},
  {isSelf: false, message: '其实长得更美'},
  {isSelf: true, message: '神一般的逻辑'},
  {isSelf: false, message: '谢谢'},
];

class MessageDetail extends Component {
  componentDidMount() {
    setTimeout(() => this._scrollView.scrollToEnd({animated: false}), 0);
  }
  render() {
    return (
      <ScrollView ref={(scrollView) => this._scrollView = scrollView} style={style.wrapper}>
        {
          mockData.map((data, index) => {
            return data.isSelf ? (
              <View key={index} style={style.selfMessage}>
                <View style={style.message}>
                  <Text>{data.message}</Text>
                </View>
                <View style={style.avator}></View>
              </View>
            ) : (
              <View key={index} style={style.otherMessage}>
                <View style={style.avator}></View>
                <View style={style.message}>
                  <Text>{data.message}</Text>
                </View>
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  selfMessage: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  otherMessage: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  avator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd'
  },
  message: {
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 10,
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 1
  }
});

export default MessageDetail;

