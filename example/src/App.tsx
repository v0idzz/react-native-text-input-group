import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import TextInputGroup from 'react-native-text-input-group';

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TextInputGroup>
          <TextInput style={styles.input} placeholder="First name" />
          <TextInput style={styles.input} placeholder="Last name" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            textContentType="emailAddress"
            autoCompleteType="email"
            autoCapitalize="none"
          />
        </TextInputGroup>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: '#e3e3e3',
    padding: 8,
    marginVertical: 8,
  },
});
