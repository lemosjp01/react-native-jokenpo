//Imports
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Button, View } from 'react-native';
import Head from './src/components/head';
import Icon from './src/components/icon'

class app3 extends Component {

    constructor(props) {
        super(props);

        this.state = { escolhaDoUsuario: '', escolhaDoComputador: '', resultado: '' }
    }

    jokenpo(escolhaDoUsuario) {

        //gerar número aleatório (0, 1, 2)
        const randomNumber = Math.floor(Math.random() * 3);

        let escolhaDoComputador = '';

        switch (randomNumber) {
            case 0: escolhaDoComputador = 'pedra'; break;
            case 1: escolhaDoComputador = 'papel'; break;
            case 2: escolhaDoComputador = 'tesoura'; break;
            default: escolhaDoComputador = '';
        }

        let resultado = '';

        if (escolhaDoComputador === 'pedra') {
            if (escolhaDoUsuario === 'pedra') {
                resultado = 'Empate';
            }

            if (escolhaDoUsuario === 'papel') {
                resultado = 'Você Ganhou!!!';
            }

            if (escolhaDoUsuario === 'tesoura') {
                resultado = 'Você Perdeu!!!';
            }
        }

        if (escolhaDoComputador === 'papel') {
            if (escolhaDoUsuario === 'pedra') {
                resultado = 'Você Perdeu!!!';
            }

            if (escolhaDoUsuario === 'papel') {
                resultado = 'Empate';
            }

            if (escolhaDoUsuario === 'tesoura') {
                resultado = 'Você Ganhou!!!';
            }
        }

        if (escolhaDoComputador === 'tesoura') {
            if (escolhaDoUsuario === 'pedra') {
                resultado = 'Você Ganhou!!!';
            }

            if (escolhaDoUsuario === 'papel') {
                resultado = 'Você Perdeu!!!';
            }

            if (escolhaDoUsuario === 'tesoura') {
                resultado = 'Empate';
            }
        }

        this.setState({ escolhaDoUsuario, escolhaDoComputador, resultado });

    }

    render() {
        return (
            <View>

                <Head />

                <View style={styles.allButtons}>
                    <View style={styles.changeBtn}>
                        <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
                    </View>
                    <View style={styles.changeBtn}>
                        <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
                    </View>
                    <View style={styles.changeBtn}>
                        <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
                    </View>
                </View>
                <View style={styles.results}>
                    <Text style={styles.textResult}>{this.state.resultado}</Text>

                    <Icon escolha={this.state.escolhaDoComputador} jogador='CPU' />

                    <Icon escolha={this.state.escolhaDoUsuario} jogador='Você' />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    changeBtn: {
        width: 90,
        height: 50
    },
    allButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    results: {
        alignItems: 'center',
        marginTop: 10
    },
    textResult: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 30
    }
});

AppRegistry.registerComponent('app3', () => app3);
