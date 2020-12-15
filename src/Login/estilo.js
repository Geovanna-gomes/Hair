import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs: {
        width: '80%',
        flex: 1,
    },
    input: {
        padding: 10,
        borderRadius: 15,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    botoes: {
        marginTop: 30,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    botaoEntrar: {
        width: 50,
        padding: 5,
        backgroundColor: 'green',
        borderRadius: 15,
        alignItems: 'center'

    },
    botaoCriar: {
        width: 50,
        padding: 5,
        backgroundColor: 'rgb(5, 100, 200)',
        borderRadius: 15,
        alignItems: 'center'

    },
    botaoEsqueci: {
        alignItems: 'center',
        marginTop: 90,
    },
    textoEsqueci: {
        color: 'rgb(0, 90, 250)',
        textDecorationColor: 'rgb(0, 90, 250)',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }


})

export default estilo;