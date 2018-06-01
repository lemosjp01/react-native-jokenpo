import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const image = require('../../imgs/jokenpo.png');

class Head extends Component {
    render() {
        return (
            <View>
                <Image style={styles.image} source={image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        margin: 8
    }
});

export default Head;