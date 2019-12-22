import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Dimensions} from 'react-native';

import SubjectsTable from './components/SubjectsTable';
import CarrerTable from './components/CarrerTable';
import BottomNav from './components/BottomNav';
import SportTable from './components/SportTable';
import InfoCard from './components/InfoCard';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableEvaluationsInfo: {
        headTableEvaluations: [
          'Materia',
          '1st',
          '2nd',
          '3rd',
          'Ord',
          'Final',
          'Extra',
          'Regu',
        ],
        bodyTableEvaluations: [
          ['Robotics', '8', '9', '7', '0', '8', '--', '--'],
          ['English', '10', '10', '10', '0', '10', '--', '--'],
          ['Embedded Sytems', '5', '6', '5', '8', '8', '--', '--'],
          ['French', '6', '8', '10', '0', '8', '--', '--'],
        ],
        accessibleEvaluationLabel: [
          [
            'Robotics',
            'First evaluation: 8',
            'Second evaluation: 9',
            'Third evaluation: 7',
            'Ordinary: 0',
            'Final score: 8',
            'Extraordinary: --',
            '--',
          ],
          [
            'English',
            'First evaluation: 10',
            'Second evaluation: 10',
            'Third evaluation: 10',
            'Ordinary: 0',
            'Final score: 10',
            'Extraordinary: --',
            '--',
          ],
          [
            'Embedded Sytems',
            'First evaluation: 5',
            'Second evaluation: 6',
            'Third evaluation: 5',
            'Ordinary: 8',
            'Final score: 8',
            'Extraordinary: --',
            '--',
          ],
          [
            'French',
            'First evaluation: 6',
            'Second evaluation: 8',
            'Third evaluation: 10',
            'Ordinary: 0',
            'Final score: 8',
            'Extraordinary: --',
            '--',
          ],
        ],
      },
      tableCareerInfo: {
        tableCareerHead: ['Sem', 'Gpo', 'Plan', 'Area', 'Carrera', 'Escuela'],
        tableCareerBody: [
          '7',
          'A',
          'K602',
          '',
          'INGENIERO EN TELEMATICA',
          'FACULTAD DE TELEMATICA',
        ],
      },
      tableSport: {
        tableSportHead: [
          'Sport',
          '1st',
          '2nd',
          '3rd',
          'Ord',
          'Extra',
          'Eve',
          'Total',
        ],
        tableSportBody: ['TAEKWONDO', '10', '10', '12', '0', '0', '0', '32'],
        accessibleSportLabel: [
          'Taekwondo',
          'First evaluation: 10 hours',
          'Second evaluation: 10 hours',
          'Third evaluation: 12 hours',
          'Ordinary',
          'Extraordinary',
          'Eve',
          'Total hours: 32',
        ],
      },
    };
  }
  render() {
    const {tableEvaluationsInfo, tableCareerInfo, tableSport} = this.state;
    return (
      <View>
        <Header />
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.cardContainer}>
              <InfoCard />
            </View>
            <View style={styles.cardContainer}>
              <CarrerTable
                headData={tableCareerInfo.tableCareerHead}
                bodyData={tableCareerInfo.tableCareerBody}
              />
            </View>
            <View style={styles.cardContainer}>
              <SubjectsTable
                accessibilitylabel={
                  tableEvaluationsInfo.accessibleEvaluationLabel
                }
                headData={tableEvaluationsInfo.headTableEvaluations}
                bodyData={tableEvaluationsInfo.bodyTableEvaluations}
              />
            </View>
            <View style={styles.cardContainer}>
              <SportTable
                accessibilitylabel={tableSport.accessibleSportLabel}
                headData={tableSport.tableSportHead}
                bodyData={tableSport.tableSportBody}
              />
            </View>
          </ScrollView>
        </View>
        <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    backgroundColor: '#CCC',
    height: Dimensions.get('window').height - 175,
  },
  cardContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default App;
