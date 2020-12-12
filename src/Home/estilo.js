import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    posts: {
        justifyContent: 'space-around',
        flexDirection: "row",
        flexWrap: 'wrap',
        flex: 1
    },
    post1: {
        width: 150,
        height: 150,
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 15
    },
})

export default estilo;