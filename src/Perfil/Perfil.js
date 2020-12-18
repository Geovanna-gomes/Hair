import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import estilo from './estilo';

const Perfil = () => {
    return(
        <ScrollView style={estilo.scroll}>
            <View >
                <View style={estilo.cardUsuario}>
                    <Image 
                        source={require('../../assets/images/cabelo2.jpg')}
                        style={estilo.imagem}
                    />
                    <View style={estilo.textoCard}>
                        <Text style={estilo.nomeUsuario}>@Nome</Text>
                        <Text >Legenda</Text>
                        <Text >Bios</Text>
                    </View>
                </View>
                <View style={estilo.imagens}>
                    <Image
                        source={require('../../assets/images/cabelo2.jpg')}
                        style={estilo.foto}
                    />
                    <Image
                        source={require('../../assets/images/cabelo1.jpg')}
                        style={estilo.foto}
                    />
                    <Image
                        source={require('../../assets/images/corte2.jpg')}
                        style={estilo.foto}
                    />
                    <Image
                        source={require('../../assets/images/corte3.jpg')}
                        style={estilo.foto}
                    />
                    <Image
                        source={require('../../assets/images/cremes1.jpg')}
                        style={estilo.foto}
                    />
                    <Image
                        source={require('../../assets/images/corte3.jpg')}
                        style={estilo.foto}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Perfil;