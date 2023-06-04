import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import VectorIcon from '../../../utils/common/VectorIcon';

type Props = {
  placeholder?: string;
};

const SearchInput: React.FC<Props> = ({ placeholder }) => (
  <View style={{ position: 'relative' }}>
    <TextInput placeholder={placeholder} style={styles.inputWrapper} />
    <VectorIcon.AntDesign name="search1" size={18} style={{ position: 'absolute', top: '30%', paddingLeft: 8 }} />
  </View>
);

const styles = StyleSheet.create({
  inputWrapper: {
    paddingVertical: 5,
    paddingLeft: 32,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 16,
  },
});

export default SearchInput;
