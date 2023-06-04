import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenNameInfo from '../config/ScreenNames';
import MainTabNavigator from './MainTabNavigator';

const BaseNavigation: React.FC = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={ScreenNameInfo.App.Main}
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name={ScreenNameInfo.App.Main} component={MainTabNavigator} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default BaseNavigation;
