import React, { useEffect, useState } from 'react';
import {View, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import getPostagens from '../api/feed';
import estilo from './estilo';

const Home = ({route, navigation}) => {

    const [post, setPosts]= useState('');
    useEffect(() => {
        getPostagens(setPosts);
    },[])

    return (
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/produto.jpg')}
                        style={estilo.post1}
                    />
                    <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                   
                </View>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/cabelo1.jpg')}
                        style={estilo.post1}
                    />
                     <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                </View>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/corte2.jpg')}
                        style={estilo.post2}
                    />
                     <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                </View>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/mechasjpg.jpg')}
                        style={estilo.post1}

                    />
                     <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                </View>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/todecacho.jpg')}
                        style={estilo.post2}
                    />
                     <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                </View>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/transicao2.jpg')}
                        style={estilo.post2}
                    />
                     <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                </View>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/cabelo2.jpg')}
                        style={estilo.post1}
                    />
                     <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                </View>
                <View style={estilo.posts}> 
                    <Image 
                        source={require('../../assets/images/ondas1.jpg')}
                        style={estilo.post1}
                    />
                     <View style={estilo.icon}>
                    <Image
                         source={require('../../assets/images/heart.png')}
                         style={{width: 20, height: 20}}

                    />
                     <Image
                         source={require('../../assets/images/floppy-disk.png')}
                         style={{width: 20, height: 20}}

                    />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;