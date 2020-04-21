import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const logRef = (ref) => console.log('***> textInput: ', ref);

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.textInput} ref={logRef} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount((x) => x + 1)}>
        <Text>Increment {count}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 50,
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 10,
  },
});

export default App;
