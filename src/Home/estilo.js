import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white',

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    posts: {
        margin: 7,
    

    },
    post1: {
        width: 150,
        height: 200,
        padding: 5,
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 5,
    },
    post2: {
        width: 300,
        height: 200,
        padding: 5,
        borderRadius: 15,
        marginTop: 15,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }

})

export default estilo;