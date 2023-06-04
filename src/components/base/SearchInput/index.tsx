import React from 'react';
import { View, Text, TextInput } from 'react-native';
import VectorIcon from '../../../utils/common/VectorIcon';

type Props = {
  placeholder?: string;
};

const SearchInput: React.FC<Props> = ({ placeholder }) => {
  return (
    <View style={{ position: 'relative' }}>
      <TextInput
        placeholder={placeholder}
        style={{
          paddingVertical: 5,
          paddingLeft: 32,
          borderColor: 'gray',
          borderWidth: 2,
          borderRadius: 10,
          fontSize: 16,
        }}
      />
      <VectorIcon.AntDesign name="search1" size={18} style={{ position: 'absolute', top: '30%', paddingLeft: 8 }} />
    </View>
  );
};

export default SearchInput;
