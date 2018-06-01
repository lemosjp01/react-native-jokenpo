import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

class Icon extends Component {
    render() {
        //this.props.escolha
        //this.props.jogador

        if (this.props.escolha === 'pedra') {

            return (
                <View style={styles.icon}>
                    <Text style={styles.textPlayer}>{this.props.jogador}</Text>
                    <Image style={styles.gameImages} source={imgPedra} />
                </View>
            );

        } else if (this.props.escolha === 'papel') {

            return (
                <View style={styles.icon}>
                    <Text style={styles.textPlayer}>{this.props.jogador}</Text>
                    <Image style={styles.gameImages} source={imgPapel} />
                </View>
            );
        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.icon}>
                    <Text style={styles.textPlayer}>{this.props.jogador}</Text>
                    <Image style={styles.gameImages} source={imgTesoura} />
                </View>
            );
        }
        return false;
    }
}

const styles = StyleSheet.create({
    gameImages: {
        width: 200,
        height: 150,
        marginTop: 5
    },
    icon: {
        alignItems: 'center',
    },
    textPlayer: {
        fontWeight: 'bold',
        color: 'blue'
    }
});

export default Icon;
