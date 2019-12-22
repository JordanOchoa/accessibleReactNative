import React, {Component} from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';

export default class SportTable extends Component {
  renderHeadTable = (element, index) => {
    return (
      <DataTable.Title
        accessible={true}
        accessibilityLabel={element}
        style={{flex: index > 0 ? 1 : 3, justifyContent: 'center'}}
        key={index}
        theme={{colors: {text: '#FFF'}}}>
        {element}
      </DataTable.Title>
    );
  };
  renderBodyTable = (data, index) => {
    return (
      <DataTable.Cell
        accessible={true}
        accessibilityLabel={this.props.accessibilitylabel[index]}
        style={{flex: index > 0 ? 1 : 3, justifyContent: 'center'}}
        key={index}>
        {data}
      </DataTable.Cell>
    );
  };
  render() {
    return (
      <View>
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
          <DataTable.Row accessible={false}>
            {this.props.bodyData.map((data, index) => {
              return this.renderBodyTable(data, index);
            })}
          </DataTable.Row>
        </DataTable>
      </View>
    );
  }
}
