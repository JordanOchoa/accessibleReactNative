import React, { Component } from 'react';
import {
    View,
  } from 'react-native';
import { DataTable } from 'react-native-paper';

export default class SubjectsTable extends Component {
    renderHeadTable = (element, index) => {
        return(
            <DataTable.Title style={{flex: (index > 0 ? 1 : 2), justifyContent: 'center'}} accessible={true} accessibilityLabel={element} key={index} theme={{ colors: { text: '#FFF' } }}>{element}</DataTable.Title>
        );
    }
    renderBodyTable = (element, eindex) => {
        return(
            <DataTable.Row accessible={false}>
                {
                    element.map((data, index) => {
                            return(
                                <DataTable.Cell style={{flex: (index > 0 ? 1 : 2), justifyContent: 'center'}} accessible={true} accessibilityLabel={this.props.accessibilitylabel[eindex][index]} key={index}>{data}</DataTable.Cell>
                            );
                        })
                }
            </DataTable.Row>
        )
    }
    render(){
        console.log(this.props.accessibilitylabel)
        return(
            <View>  
                <DataTable>
                    <DataTable.Header style={{borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: 'blue'}}>
                    {
                        this.props.headData.map((element, index) => {
                            return(this.renderHeadTable(element, index));
                        })
                    }
                    </DataTable.Header>
                    {
                        this.props.bodyData.map((element, index) => {
                            return(this.renderBodyTable(element, index));
                        })
                    }
                </DataTable>
            </View>
        );
    }
}