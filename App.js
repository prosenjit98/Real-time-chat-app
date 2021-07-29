/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NotFound from './screens/NotFound';
import MainTabNavigator from './navigations/MainTabNavigator';
import Colors from './constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';


const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.light.tint,
            shadowOpacity: 0,
            elevation: 0
          },
          headerTintColor: Colors.light.background
        }}

      >
        <Stack.Screen name={"Root"} component={MainTabNavigator}
          options={{
            title: "Home",
            headerRight: () => (
              <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between' }}>
                <MaterialIcons name="search" size={24} color="white" />
                <Feather name="more-vertical" size={24} color="white" />
              </View>
            )
          }}
        />
        <Stack.Screen name={"Not Found"} component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
