import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import SubjectsTable from './components/SubjectsTable';
import CarrerTable from './components/CarrerTable';
import BottomNav from './components/BottomNav';
import SportTable from './components/SportTable';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tableEvaluationsInfo: {
        headTableEvaluations: ['Materia', '1st', '2nd', '3rd', 'Ord', 'Final', 'Extra', 'Regu'],
        evaluations: [
          ['Robotics', '8', '9', '7', '0', '8', '--', '--'],
          ['English', '10', '10', '10', '0', '10', '--', '--'],
          ['Embedded Sytems', '5', '6', '5', '8', '8', '--', '--'],
          ['French', '6', '8', '10', '0', '8', '--', '--'],
        ],
        accessibleEvaluationLabel: [
          ['Robotics', 'First evaluation: 8', 'Second evaluation: 9', 'Third evaluation: 7', 'Ordinary: 0', 'Final score: 8', 'Extraordinary: --', '--'],
          ['English', 'First evaluation: 10', 'Second evaluation: 10', 'Third evaluation: 10', 'Ordinary: 0', 'Final score: 10', 'Extraordinary: --', '--'],
          ['Embedded Sytems', 'First evaluation: 5', 'Second evaluation: 6', 'Third evaluation: 5', 'Ordinary: 8', 'Final score: 8', 'Extraordinary: --', '--'],
          ['French', 'First evaluation: 6', 'Second evaluation: 8', 'Third evaluation: 10', 'Ordinary: 0', 'Final score: 8', 'Extraordinary: --', '--'],
        ],
      },
      tableCareer: {
        tableHead: ['Sem', 'Gpo', 'Plan', 'Area', 'Carrera', 'Escuela'],
        tableBody: ['7', 'A', 'K602', '', 'INGENIERO EN TELEMATICA', 'FACULTAD DE TELEMATICA'],
      },
      tableSport: {
        tableSportHead: ['Sport', '1st', '2nd', '3rd', 'Ord', 'Extra', 'Eve', 'Total'],
        tableSportBody: ['TAEKWONDO', '10', '10', '12', '0', '0', '0', '32'],
        accessibleSportLabel: ['Taekwondo', 'First evaluation: 10 hours', 'Second evaluation: 10 hours', 'Third evaluation: 12 hours', 'Ordinary', 'Extraordinary', 'Eve', 'Total hours: 32']
      }
    }
  }
  render (){
    const state = this.state;
    return (
      <View>
        <View>
          <View style={{backgroundColor: 'yellow'}}>
            <View style={{backgroundColor: 'red'}}>
              <View style={styles.header}>
                <TouchableOpacity style={styles.burgermenu} accessible={true} accessibilityLabel="Menu button" accessibilityHint="Display the menu">
                  <Image source={{uri: 'https://cdn2.iconfinder.com/data/icons/bold-ui/100/hamburger-512.png'}} style={{width: 30, height: 30, alignSelf: 'center'}}/>
                </TouchableOpacity>
                <Text accessible={true} accessibilityLabel="University name" style={{fontSize: 20, color: 'white'}}>University</Text>
                <Image source={{uri: 'https://i.blogs.es/672fa7/git-logo/450_1000.png'}} style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}/>
              </View>
              <View style={styles.background}>
                <ScrollView>
                    <View style={{backgroundColor: 'white', marginHorizontal: 5, marginVertical: 10, borderRadius: 5}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={styles.title}>Scholar control system</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View accessible={true} accessibilityLabel="This is your profile picture">
                          <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhsS7tuHMCkWGUqWy8TLJPQ4tUqfSDZZw4DjRmyUPkjYq6Oqe&s'}} style={{width: 75, height: 75, borderRadius: 37.5}}/>
                        </View>
                        <View accessible={true} accessibilityLabel="This is your general information" style={styles.info}>
                          <Text style={{fontSize: 16}}>Name: Jordan Gabriel Ochoa Chavez</Text>
                          <Text style={{}}>National ID: OOCJ970820HCMCHR09</Text>
                          <Text style={{}}>Scholar ID: 20123467</Text>
                          <Text style={{}}>Age: 22</Text>
                          <Text style={{}}>Balance in electronic wallet: $0.00</Text>
                          <Text style={{}}>Social Secure ID: 5212723400</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={styles.container} accessible={true} accessibilityLabel="This is your carreer information">
                        <CarrerTable headData={state.tableCareer.tableHead} bodyData={state.tableCareer.tableBody} />
                      </View>
                      <View style={{marginTop: 10, backgroundColor: '#fff', marginHorizontal: 5, borderRadius: 5}}>
                        <SubjectsTable accessibilitylabel={state.tableEvaluationsInfo.accessibleEvaluationLabel} headData={state.tableEvaluationsInfo.headTableEvaluations} bodyData={state.tableEvaluationsInfo.evaluations}/>
                      </View>
                      <View style={{marginTop: 10, marginBottom: 10, backgroundColor: '#fff', marginHorizontal: 5, borderRadius: 5}}>
                        <SportTable accessibilitylabel={state.tableSport.accessibleSportLabel} headData={state.tableSport.tableSportHead} bodyData={state.tableSport.tableSportBody} />
                      </View>
                    </View>
                </ScrollView>
              </View>
            </View>
          </View>
          <BottomNav />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {  backgroundColor: '#fff', marginHorizontal: 5, borderRadius: 5},
  header: {
    backgroundColor: 'blue',
    height: 100,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: "flex-end",
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
    justifyContent: 'flex-end',
  },
  info : {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  background: {
    width: '100%',
    backgroundColor: '#CCC',
    height: Dimensions.get('window').height-175,
  },
});

export default App;
