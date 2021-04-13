import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var hobbies = [
  {label: "Teasing", value: 0},
  {label: "Catching plate", value: 1},
  {label: "Soaking in the mud", value: 2},
];

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RadioForm
          radio_props={hobbies}
          initial={2}
          onPress={(value) => {ToastAndroid.show(value.toString(), ToastAndroid.SHORT)}}
          buttonSize={40}
          buttonOuterSize={60}
          selectedButtonColor={'green'}
          selectedLabelColor={'green'}
          labelStyle={{ fontSize: 20, }}
          disabled={false}
          formHorizontal={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
