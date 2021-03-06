import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from '../styleButton';
import styles from './style';

const CarItem = (props) => {

    const { name, tagline, image, taglineCTA } = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}> {name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}&nbsp;
                    <Text style={styles.subtitleCTA}>

                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() =>
                        console.warn('Custom Order was presed')
                    }
                />

                <StyledButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() =>
                        console.warn('Existing Inventory was presed')
                    }
                />

            </View>



        </View>

    );
};

export default CarItem;