import * as React from 'react';
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const imageList = [
  { url: '../../../../assets/win.jpg' },
  { url: '../../../../assets/snow.jpg' },
  { url: '../../../../assets/dev.jpg' },
];

const images = [
  {
    uri: 'https://miro.medium.com/v2/resize:fit:720/0*hLQFS-V60OjZ5v0g',
    label: 'Image 2',
  },
  {
    uri: 'https://miro.medium.com/v2/resize:fit:720/0*hLQFS-V60OjZ5v0g',
    label: 'Image 2',
  },
  {
    uri: 'https://jano-next.netlify.app/_next/static/media/img_72.c42732c6.jpg',
    label: 'Image 1',
  },
];

function ImageCarousel() {
  const width = Dimensions.get('window').width;

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={200}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={3000}
        pagingEnabled={true}
        renderItem={(value) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Image source={{ uri: value?.item?.uri ?? '' }} style={{ width: '100%', height: '100%' }} />
          </View>
        )}
      />
    </View>
  );
}

export default ImageCarousel;
