import React from 'react';
import {SafeAreaView, TextInput, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput multiline={true} style={styles.textInput} />
      </SafeAreaView>
    </>
  );
};

const styles = {
  textInput: {
    fontSize: 17,
    lineHeight: 21,
    margin: 12,
    color: '#2A3135',
    borderColor: '#000000',
    borderWidth: 1,
  },
};

export default App;
