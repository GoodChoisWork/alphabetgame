import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import FlipCard from "react-native-flip-card";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(false)
  const { width: screenWidth } = Dimensions.get("window");

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentIndex = Math.floor(contentOffset.x / screenWidth);
    setActiveIndex(currentIndex);
  };
  

  const renderItems = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.slide}>
        <View style={styles.cardContainer} >
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          clickable={true}
          flip={false} 
        >
          {/* Face Side */}
          <View style={styles.face}>
            <Text style={styles.letter}>{item.letter}</Text>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
            <Image source={item.image} style={styles.image} resizeMode="contain"/>
            <Text style={styles.letter}>{item.trend}</Text>
          </View>
        </FlipCard>
        </View>
      </View>
    ));
  };

  const scrollViewRef = React.createRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={200}
      >
        {renderItems()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  slideText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  cardContainer :{
    alignItems: "center",
    justifyContent : 'center',
    flex: 1,
    width: '100%',
  },
  card : {
    width: '100%',
    alignItems : 'center',
    alignSelf: "center",
    backgroundColor : 'white'
  },
  face:{
    justifyContent : 'center',
    alignItems: 'center',
    flex: 1,
    width: Dimensions.get("window").width,
  },
  back :{
    justifyContent : 'center',
    alignItems: 'center',
    flex: 1,
    width: Dimensions.get("window").width
  },
  letter :{
    fontSize : 70
  },
  image :{
    width: '70%',
    height: '50%'
  }
});

export default Carousel;
