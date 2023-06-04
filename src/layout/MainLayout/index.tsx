import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Header from '../Header';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <View style={{ flex: 1, paddingVertical: 45, backgroundColor: 'white' }}>
    <Header />
    {children}
  </View>
);

export default MainLayout;
