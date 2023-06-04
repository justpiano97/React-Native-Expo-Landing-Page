import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import ImageCarousel from '../../../module/ImageCarousel';
import VectorIcon from '../../../../utils/common/VectorIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  title?: string;
};

const Products: React.FC<Props> = ({ title }) => {
  return (
    <View style={{ paddingHorizontal: 12, paddingVertical: 12, gap: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{title}</Text>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
          <Text style={{ color: 'gray' }}>See all</Text>
          <VectorIcon.AntDesign name="right" size={15} />
        </TouchableOpacity>
      </View>
      <ImageCarousel padding={24} />
      <ScrollView horizontal>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          {[...Array(5).keys()].map((index) => (
            <Image
              key={index}
              source={{ uri: 'https://miro.medium.com/v2/resize:fit:720/0*hLQFS-V60OjZ5v0g' }}
              style={{ height: 100, width: 150 }}
            />
          ))}
        </View>
      </ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>XVR</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
          <VectorIcon.MaterialIcons name="info" size={18} color={'gray'} />
          <Text>HDCVI 攝影機</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
          <VectorIcon.MaterialIcons name="info" size={18} color={'gray'} />
          <Text>HDCVI 快速球</Text>
        </View>
      </View>
    </View>
  );
};

export default Products;
