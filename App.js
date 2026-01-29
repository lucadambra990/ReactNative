import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import AddEditUser from './components/AddEditUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Lista Utenti' }} 
        />
        <Stack.Screen 
          name="AddEditUser" 
          component={AddEditUser} 
          options={{ title: 'Gestione Utente' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

