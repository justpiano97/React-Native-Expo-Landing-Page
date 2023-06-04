import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BaseNavigation from './src/navigations';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BaseNavigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </View>
  );
}
