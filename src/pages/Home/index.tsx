import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import MainLayout from '../../layout/MainLayout';
import ImageCarousel from '../../components/module/ImageCarousel';

const blockList1 = ['大華系列產品', 'DJS台灣智慧科技領導品牌', '東訊智慧安全監控'];
const blockList2 = ['防疫專區(非醫療級)', '車牌辨識停車管理系統', 'HDMI系列'];

const Home: React.FC = () => {
  const width = Dimensions.get('window').width;
  return (
    <MainLayout>
      <ScrollView>
        <ImageCarousel />
        <ScrollView horizontal style={{ backgroundColor: 'red', width: width }}>
          <View style={styles.blockWrapper}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
              {blockList1.map((item) => (
                <View key={item} style={styles.block}>
                  <Text>{item}</Text>
                </View>
              ))}
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
              {blockList2.map((item) => (
                <View key={item} style={styles.block}>
                  <Text>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  blockWrapper: {
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
  block: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#D6D4D4',
    borderWidth: 1,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    width: 150,
  },
});

export default Home;
