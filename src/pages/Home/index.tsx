import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../../layout/MainLayout';
import ImageCarousel from '../../components/module/ImageCarousel';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <ImageCarousel />
    </MainLayout>
  );
};

export default Home;
