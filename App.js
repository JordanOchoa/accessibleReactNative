/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import SubjectsTable from './components/SubjectsTable';
import CarrerTable from './components/CarrerTable';
import BottomNav from './components/BottomNav';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      calificacion1: 'Evaluations for robotics, firts evaluation: 8, second evaluation: 9, third evaluation: 7. Final score: 8',
      calificacion2: 'Evaluations for english, firts evaluation: 10, second evaluation: 10, third evaluation: 10. Final score: 10',
      calificacion3: 'Evaluations for embedded systems, firts evaluation: 5, second evaluation: 6, third evaluation: 5. Ordinary, 8. Final score: 8',
      calificacion4: 'Evaluations for french, firts evaluation: 6, second evaluation: 8, third evaluation: 10. Final score: 8',
      tableHead: ['Sem', 'Gpo', 'Plan', 'Area', 'Carrera', 'Escuela'],
      tableData: ['7', 'A', 'K602', '', 'INGENIERO EN TELEMATICA', 'FACULTAD DE TELEMATICA'],
      tableHeadCalif: ['Materia', '1ra', '2da', '3ra', 'Ord', 'Final', 'Extra', 'Regu'],
      tableDataCalif1: [
        ['Robotics', '8', '9', '7', '0', '8', '--', '--'],
        ['English', '10', '10', '10', '0', '10', '--', '--'],
        ['Embedded Sytems', '5', '6', '5', '8', '8', '--', '--'],
        ['French', '6', '8', '10', '0', '8', '--', '--'],
      ],
    }
  }
  render (){
    const state = this.state;
    return (
      <View>
        <SafeAreaView>
          <View style={styles.background}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.burgermenu} accessible={true} accessibilityLabel="Menu button" accessibilityHint="Display the menu">
              <Image source={{uri: 'https://cdn2.iconfinder.com/data/icons/bold-ui/100/hamburger-512.png'}} style={{width: 30, height: 30, alignSelf: 'center'}}/>
              </TouchableOpacity>
              <Text accessible={true} accessibilityLabel="University name" style={{fontSize: 20, color: 'white'}}>University</Text>
              <Image source={{uri: 'https://wayf.ucol.mx/imglogin/logo-gris.png'}} style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}/>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.title}>Scholar control system</Text>
            </View>
            <View accessible={true} accessibilityLabel="This is your profile picture">
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhsS7tuHMCkWGUqWy8TLJPQ4tUqfSDZZw4DjRmyUPkjYq6Oqe&s'}} style={{width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginTop: 50}}/>
            </View>
            <View accessible={true} accessibilityLabel="This is your general information" style={styles.info}>
              <Text style={{}}>Name: Jordan Gabriel Ochoa Chavez</Text>
              <Text style={{}}>National ID: OOCJ970820HCMCHR09</Text>
              <Text style={{}}>Schoolar ID: 20123467</Text>
              <Text style={{}}>Age: 22</Text>
              <Text style={{}}>Balance in electronic wallet: $0.00</Text>
              <Text style={{}}>Social Secure ID: 5212723400</Text>
            </View>
            <View style={{height: '42%'}}>
              <ScrollView>
                <View style={styles.container} accessible={true} accessibilityLabel="This is your carreer information">
                  <CarrerTable headData={state.tableHead} bodyData={state.tableData}/>
                </View>
                <View style={{marginTop: 20, backgroundColor: '#fff', marginHorizontal: 5}}>
                <SubjectsTable headData={state.tableHeadCalif} bodyData={state.tableDataCalif1}/>
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
        <BottomNav />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {  backgroundColor: '#fff', marginHorizontal: 5 },
  wrapper: { flexDirection: 'row' },
  head: { height: 40, backgroundColor: 'green'},
  textTitle: { margin: 6, color: 'white', fontWeight: 'bold', alignSelf: 'center' },
  text: { margin: 6, alignSelf: 'center' },
  header: {
    backgroundColor: '#04B404',
    height: 50,
    flexDirection: 'row',
    alignItems: "center",
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset:{
      width: 0,
      height: 5
    },
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32
  },
  burgermenu: {
    width: 50,
    height: 50,
    justifyContent: 'center'
  },
  info : {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CCC'
  },
  tablegroup: {
    marginHorizontal: 10,
    backgroundColor: 'green',
    width: '95%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default App;
