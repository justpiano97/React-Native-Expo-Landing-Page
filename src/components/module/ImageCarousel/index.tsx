import React, { useState } from 'react';
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PaginationDot from 'react-native-animated-pagination-dot';

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

type Props = {
  width?: number;
  height?: number;
  padding?: number;
};

const ImageCarousel: React.FC<Props> = ({ width, height, padding = 0 }) => {
  const fullWidth = Dimensions.get('window').width;
  const [curPage, setCurPage] = useState<number>(0);
  return (
    <View style={{ position: 'relative' }}>
      <Carousel
        loop
        width={width ?? fullWidth - padding}
        height={height ?? 200}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={3000}
        pagingEnabled={true}
        onSnapToItem={(index) => setCurPage(index)}
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
      <View style={styles.dotWrapper}>
        <PaginationDot activeDotColor={'black'} curPage={curPage} maxPage={images?.length ?? 0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 3,
    width: '100%',
  },
});

export default ImageCarousel;
