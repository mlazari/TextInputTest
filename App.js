import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, isMountedRef, navigate} from './RootNavigation';
import {DetailsScreen, HomeScreen} from './src/screens';

const Stack = createStackNavigator();

// Functional implementation
// Works correctly.

const App = () => {
  React.useEffect(() => {
    isMountedRef.current = true;
    navigate('Details');

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Class implementation.
// Throws "The 'navigation' object hasn't been initialized yet. This might
// happen if you don't have a navigator mounted, or if the navigator hasn't
// finished mounting.
// See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization
// for more details."

// class App extends React.Component {
//   componentDidMount() {
//     isMountedRef.current = true;
//     navigate('Details');
//   }

//   componentWillUnmount() {
//     isMountedRef.current = false;
//   }

//   render() {
//     return (
//       <NavigationContainer ref={navigationRef}>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={DetailsScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

export default App;
