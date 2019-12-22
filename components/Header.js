import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default class BottomNav extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.burgermenu}
          accessible={true}
          accessibilityLabel="Menu button"
          accessibilityHint="Display the menu">
          <Image
            source={{
              uri:
                'https://cdn2.iconfinder.com/data/icons/bold-ui/100/hamburger-512.png',
            }}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <Text
          accessible={true}
          accessibilityLabel="University name"
          style={{fontSize: 20, color: 'white'}}>
          University
        </Text>
        <Image
          source={{uri: 'https://i.blogs.es/672fa7/git-logo/450_1000.png'}}
          style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    height: 100,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    justifyContent: 'space-between',
  },
  burgermenu: {
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
  },
});
