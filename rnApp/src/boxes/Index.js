import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Navigator
} from 'react-native';

import Tab, {TabItem} from 'buss/Tab';
import Messages from 'boxes/Messages';
import Contacts from 'boxes/Contacts';
import Notifications from 'boxes/Notifications';

let pageWidth = Dimensions.get('window').width;

class Index extends Component {
  switchTab(tabName) {
    switch (tabName) {
      case 'messages':
        this._navigator.push({
          name: '消息',
          title: '消息',
          component: Messages
        });
        break;
      case 'contacts':
        this._navigator.push({
          name: '联系人',
          title: '联系人',
          component: Contacts
        });
        break;
      case 'notifications':
        this._navigator.push({
          name: '动态',
          title: '动态',
          component: Notifications
        });
        break;
    }
  }
  render() {
    return (
      <View style={style.wrapper}>
        <StatusBar
          animated={true}
          hidden={false}
          barStyle="default"
          backgroundColor="red"
        />
        <View style={style.header}>
          <TouchableOpacity style={style.actionBtn} onPress={() => this._navigator.pop()}>
            <Text>返回</Text>
          </TouchableOpacity>
          <Text style={style.title}>{this.props.title}</Text>
          <TouchableOpacity style={style.actionBtn}>
            <Text></Text>
          </TouchableOpacity>
        </View>
        <View style={style.body}>
          <Navigator
            initialRoute={{title: '消息', component: Messages}}
            renderScene={(route, navigator) => {
              if (!this._navigator) {
                this._navigator = navigator;
              }
              let NewComponent = route.component;
              return (<NewComponent {...route.params} navigator={navigator} />);
            }}
          />
        </View>
        <View style={style.footer}>
          <Tab>
            <TabItem title="消息" name="messages" onSwithTab={(tabName) => this.switchTab(tabName)}></TabItem>
            <TabItem title="联系人" name="contacts" onSwithTab={(tabName) => this.switchTab(tabName)}></TabItem>
            <TabItem title="动态" name="notifications" onSwithTab={(tabName) => this.switchTab(tabName)}></TabItem>
          </Tab>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: pageWidth,
    height: 60,
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  body: {
    flex: 1
  },
  footer: {
    width: pageWidth,
    height: 61
  },
  actionBtn: {
    width: 60
  },
  title: {
    flex: 1,
    textAlign: 'center'
  }
});

export default Index;

