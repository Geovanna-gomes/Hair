import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    cardUsuario: {
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center'
    },
    imagem: {
        width: 90,
        height: 90,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 20
    },
    textoCard: {
        textAlign: 'center',
        marginLeft: 20,
    },
    nomeUsuario: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 2
    },
    imagens: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    foto: {
        width: 170,
        height: 200,
        borderRadius: 20,
        marginBottom: 10
    }
})

export default estilo;