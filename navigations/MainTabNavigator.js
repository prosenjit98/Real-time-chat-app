import React from 'react'
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../screens/Chat';
import Colors from '../constants/Colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{
        activeTintColor: Colors.light.background,
        style: { backgroundColor: Colors.light.tint },
        indicatorStyle: {
          backgroundColor: Colors.light.background,
          height: 4
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        showIcon: true,
      }}
    >
      <Tab.Screen name="Camera" component={Chat} options={{
        tabBarIcon: () => <FontAwesomeIcon name="camera" size={20} color="white" />,
        tabBarLabel: () => null
      }} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Chat} />
      <Tab.Screen name="Calls" component={Chat} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
