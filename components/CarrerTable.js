import React, { Component } from 'react';
import {
    View,
  } from 'react-native';
import { DataTable } from 'react-native-paper';

export default class CarrerTable extends Component {
    renderHeadTable(element){
        return(
            <DataTable.Title theme={{ colors: { text: '#FFF' } }}>{element}</DataTable.Title>
        );   
    }
    renderBodyTable(element){
        return(
            <DataTable.Cell>{element}</DataTable.Cell>
        );
    }
    render(){
        return(
            <View>
                <DataTable>
                    <DataTable.Header style={{backgroundColor: 'green'}}>
                    {
                        this.props.headData.map((element) => {
                            return(this.renderHeadTable(element));
                        })
                    }
                    </DataTable.Header>
                    <DataTable.Row style={{height: 70}}>
                        {
                            this.props.bodyData.map((element) => {
                                return(this.renderBodyTable(element));
                            })
                        }
                    </DataTable.Row>
                </DataTable>
            </View>
        );
    }
}