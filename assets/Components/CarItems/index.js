import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './style';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../images/ModelX.jpeg')}
          style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.title}> Model S</Text>
          <Text style={styles.subtitle}> Starting at $69,420</Text>
        </View>
      </View>

    );
};

export default CarItem;