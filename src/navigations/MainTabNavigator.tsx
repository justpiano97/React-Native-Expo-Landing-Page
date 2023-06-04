import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ScreenNames from '../config/ScreenNames';
import VectorIcon from '../utils/common/VectorIcon';
import Home from '../pages/Home';
import { View, Text } from 'react-native';
import Category from '../pages/Category';

const MainTabNavigator: React.FC = () => {
  const MainTab = createBottomTabNavigator();

  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName={ScreenNames.MainTabName.Home}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View>
              <VectorIcon.Entypo name="home" size={size} color={focused ? 'black' : 'gray'} />
            </View>
          ),
        }}
        name={ScreenNames.MainTabName.Home}
        component={Home}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <VectorIcon.MaterialCommunityIcons name="widgets" size={size} color={focused ? 'black' : 'gray'} />
          ),
        }}
        name={ScreenNames.MainTabName.Category}
        component={Category}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <VectorIcon.Entypo name="shopping-cart" size={size} color={focused ? 'black' : 'gray'} />
          ),
        }}
        name={ScreenNames.MainTabName.Cart}
        component={Home}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <VectorIcon.FontAwesome name="user" size={size} color={focused ? 'black' : 'gray'} />
          ),
        }}
        name={ScreenNames.MainTabName.Users}
        component={Home}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
