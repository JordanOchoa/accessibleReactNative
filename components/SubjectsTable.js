import React, { Component } from 'react';
import {
    View,
  } from 'react-native';
import { DataTable } from 'react-native-paper';

export default class SubjectsTable extends Component {
    renderHeadTable(element, index){
        if(index === 0){
            return(
                <DataTable.Title theme={{ colors: { text: '#FFF' } }}>{element}</DataTable.Title>
             );
        }else{
            return(
                <DataTable.Title theme={{ colors: { text: '#FFF' } }} numeric>{element}</DataTable.Title>
             );
        }
          
    }
    renderBodyTable(element){
        return(
            <DataTable.Row>
                {
                    element.map(data => {
                            return(
                                <DataTable.Cell numeric>{data}</DataTable.Cell>
                            );
                        })
                }
            </DataTable.Row>
        )
    }
    render(){
        return(
            <View>  
                <DataTable>
                    <DataTable.Header style={{backgroundColor: 'green'}}>
                    {
                        this.props.headData.map((element, index) => {
                            return(this.renderHeadTable(element, index));
                        })
                    }
                    </DataTable.Header>
                    {
                        this.props.bodyData.map(element => {
                            return(this.renderBodyTable(element));
                        })
                    }
                </DataTable>
            </View>
        );
    }
}