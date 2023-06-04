import * as React from 'react';
import { Dimensions, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function ImageCarousel() {
  const width = Dimensions.get('window').width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={3000}
        renderItem={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Image source={require('../../../../assets/win.jpg')} style={{ width: '100%', height: '100%' }} />
          </View>
        )}
      />
    </View>
  );
}

export default ImageCarousel;
