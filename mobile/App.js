import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SaveFactScreen from './screens/SaveFactScreen';
import GetFactScreen from './screens/GetFactScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="GetFact">
        <Drawer.Screen
          name="GetFact"
          component={GetFactScreen}
          options={{ title: 'Frases' }}
        />
        <Drawer.Screen
          name="SaveFact"
          component={SaveFactScreen} 
          options={{ title: 'Guardar frase' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}