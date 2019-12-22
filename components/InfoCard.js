import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class BottomNav extends Component {
  render() {
    return (
      <View style={{paddingVertical: 5}}>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.title}>Scholar control system</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            accessible={true}
            accessibilityLabel="This is your profile picture">
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhsS7tuHMCkWGUqWy8TLJPQ4tUqfSDZZw4DjRmyUPkjYq6Oqe&s',
              }}
              style={{width: 75, height: 75, borderRadius: 37.5}}
            />
          </View>
          <View
            accessible={true}
            accessibilityLabel="This is your general information"
            style={styles.info}>
            <Text style={styles.textInfo}>
              Name: Jordan Gabriel Ochoa Chavez
            </Text>
            <Text style={styles.textInfo}>National ID: OOCJ970820HCMCHR09</Text>
            <Text style={styles.textInfo}>Scholar ID: 20123467</Text>
            <Text style={styles.textInfo}>Age: 22</Text>
            <Text style={styles.textInfo}>
              Balance in electronic wallet: $0.00
            </Text>
            <Text style={styles.textInfo}>Social Secure ID: 5212723400</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  textInfo: {
    fontSize: 16,
  },
});
