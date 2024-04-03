import * as React from 'react';
import 'react-native-gesture-handler';
// import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './prestation/routes/StackNavigator';
import SideMenuNavigator from './prestation/routes/SideMenuNavigator';
const App = () => {
  return (
    <NavigationContainer>
      {/* <View>
        <Text>Hola Mundo</Text>
      </View> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};

export default App;
