import React from 'react';
import { ScrollView } from 'react-native';

import Block from '../../components/page/Home/Block';
import ImageCarousel from '../../components/module/ImageCarousel';
import MainLayout from '../../layout/MainLayout';
import Products from '../../components/page/Home/Product';

const Home: React.FC = () => (
  <MainLayout>
    <ScrollView>
      <ImageCarousel />
      <Block />
      <Products title="大華系列產品" />
      <Products title="東訊智慧安全監控" />
    </ScrollView>
  </MainLayout>
);

export default Home;
