import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Dimensions,
  RefreshControl
} from 'react-native';

import MessageItem from 'buss/MessageItem';

let pageWidth = Dimensions.get('window').width;

let mockData = [
  {name: '张', message: 'dataSource'},
  {name: '李', message: 'initialListSize'},
  {name: '王', message: 'onChangeVisibleRows'},
  {name: '陈', message: 'onEndReached'},
  {name: '刘', message: 'onEndReachedThresholdonEndReachedThresholdonEndReachedThresholdonEndReachedThresholdonEndReachedThreshold'},
  {name: '路', message: 'pageSize'},
  {name: '吴', message: 'removeClippedSubviews'},
  {name: '孙', message: 'renderFooter'},
  {name: '徐', message: 'renderHeader'},
  {name: '胡', message: 'renderRow'},
  {name: '苏', message: 'renderScrollComponent'},
  {name: '田', message: 'renderSectionHeader'},
  {name: '杜', message: 'renderSeparator'},
];

class Messages extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: ds.cloneWithRows(mockData),
      data: mockData,
      refreshing: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        refreshing: false
      });
    }, 2000);
  }
  init() {
    this.setState({
      refreshing: true
    }, () => {
      setTimeout(() => {
        this.setState({
          data: mockData,
          dataSource: this.state.dataSource.cloneWithRows(mockData),
          refreshing: false
        });
      }, 2000);
    });
  }
  nextPage() {
    setTimeout(() => {
      let newData = this.state.data.concat(mockData);
      this.setState({
        data: newData,
        dataSource: this.state.dataSource.cloneWithRows(newData)
      });
    }, 1000);
  }
  render() {
    return (
      <View style={style.wrapper}>
        <Text>消息</Text>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          onEndReachedThreshold={10}
          refreshControl={<RefreshControl
            onRefresh={() => this.init()}
            refreshing={this.state.refreshing}
          />}
          renderHeader={() => <Text>我是listview的header</Text>}
          renderFooter={() => <Text>我是listview的footer</Text>}
          renderSectionHeader={() => <Text>我是listview的sectionHeader</Text>}
          renderSeparator={(sectionId, rowId) => <View key={sectionId + '-' + rowId} style={{width: pageWidth, height: 1, backgroundColor: '#ddd'}}></View>}
          renderRow={(rowData) => {
            return <MessageItem {...rowData}/>;
          }}
          onEndReached={() => this.nextPage()}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

export default Messages;

