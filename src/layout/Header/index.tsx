import React from 'react';
import { View, Text } from 'react-native';

import VectorIcon from '../../utils/common/VectorIcon';
import SearchInput from '../../components/base/SearchInput';

const Header: React.FC = () => {
  return (
    <View style={{ paddingHorizontal: 12, gap: 2, paddingVertical: 10 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        <View style={{ paddingBottom: 5 }}>
          <Text style={{ fontSize: 14 }}>Good Morning</Text>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>Andrew Lue</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
          <VectorIcon.Entypo name="shopping-cart" size={25} />
          <VectorIcon.FontAwesome name="user-circle" size={25} />
        </View>
      </View>
      <SearchInput placeholder="Search Product" />
    </View>
  );
};

export default Header;
