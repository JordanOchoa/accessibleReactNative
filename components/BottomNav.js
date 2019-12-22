import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
  } from 'react-native';


export default class BottomNav extends Component {
    render(){
        return(
            <View style={styles.bottomNav}>
                <TouchableOpacity accessible={true} accessibilityLabel="home button" accessibilityHint="This button will send you to the Home screen" style={styles.buttonNav}>
                    <Text style={{color: 'white'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} accessibilityLabel="evaluation button" accessibilityHint="This button will send you to the evaluation screen" style={styles.buttonNav}>
                    <Text style={{color: 'white'}}>Evaluations</Text>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} accessibilityLabel="analysis button" accessibilityHint="This button will send you to the analysis screen" style={styles.buttonNav}>
                    <Text style={{color: 'white'}}>Analysis</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
bottomNav: {
    height: 75,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
},
buttonNav: {
    backgroundColor: 'blue',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'
},
});