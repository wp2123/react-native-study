import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import request from 'superagent';

class Contacts extends Component {
  render() {
    return (
      <View>
        <Text>联系人</Text>
        <TouchableOpacity style={style.btn} onPress={() => {
          request.get('http://localhost:3000/test').query({test: '123'}).end((err, res) => {
            console.log('err----->', err);
            console.log('res----->', res);
          });
        }}>
          <Text>get请求</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn} onPress={() => {
          request.post('http://localhost:3000/test').send({test: '123'}).end((err, res) => {
            console.log('err----->', err);
            console.log('res----->', res);
          });
        }}>
          <Text>post请求</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    margin: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd'
  }
});

export default Contacts;

