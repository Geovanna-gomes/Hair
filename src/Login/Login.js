import React from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextComponent}
    from 'react-native';
import estilo from './estilo';
    
const Login = ({navigation}) => {
    return(
        <ImageBackground 
            source={require('../../assets/images/bg.jpg')}
            style={estilo.container}>
            <View style={estilo.logo}>
                <Image 
                    source={require('../../assets/images/H.png')}
                    style={{width: 180, height: 180}}
                />
            </View>
            <View style={estilo.inputs}>
                <TextInput
                    placeholder='E-mail ou Usuário'
                    style={estilo.input}
                />
                <TextInput
                    placeholder='Senha'
                    style={estilo.input}
                />
                <View style={estilo.botoes}>
                    <TouchableOpacity style={estilo.botaoCriar}>
                        <Image
                            source={require('../../assets/images/add-user.png')}
                            style={{width: 35, height: 35}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.replace('Home') } 
                    style={estilo.botaoEntrar}>
                        <Image
                            source={require('../../assets/images/user.png')}
                            style={{width: 35, height: 35}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={estilo.botaoEsqueci}> 
                    <TouchableOpacity>
                        <Text style={estilo.textoEsqueci}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login;
