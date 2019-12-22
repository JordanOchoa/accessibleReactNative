import React, {Component} from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';

export default class CarrerTable extends Component {
  renderHeadTable = (element, index) => {
    return (
      <DataTable.Title
        style={{flex: index < 4 ? 1 : 2, justifyContent: 'center'}}
        key={index}
        theme={{colors: {text: '#FFF'}}}>
        {element}
      </DataTable.Title>
    );
  };
  renderBodyTable = (data, index) => {
    return (
      <DataTable.Cell
        style={{flex: index < 4 ? 1 : 2, justifyContent: 'center'}}
        key={index}>
        {data}
      </DataTable.Cell>
    );
  };
  render() {
    return (
      <View
        accessible={true}
        accessibilityLabel="This is your carreer information">
        <DataTable>
          <DataTable.Header
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              backgroundColor: 'blue',
            }}>
            {this.props.headData.map((element, index) => {
              return this.renderHeadTable(element, index);
            })}
          </DataTable.Header>
          <DataTable.Row>
            {this.props.bodyData.map((data, index) => {
              return this.renderBodyTable(data, index);
            })}
          </DataTable.Row>
        </DataTable>
      </View>
    );
  }
}
