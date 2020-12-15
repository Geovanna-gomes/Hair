import React, { useEffect, useState } from 'react';
import {View, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import getPostagens from '../api/feed';
import estilo from './estilo';

const Home = ({navigation}) => {

    const [post, setPosts]= useState('');
    useEffect(() => {
        getPostagens(setPosts);
    },[])
    return (
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <FlatList
                    data={post}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString ()}
                    renderItem= {({item}) => (
                        <View style={estilo.posts}> 
                            <Image 
                                source={{uri: item.image}}
                                style={estilo.post1}
                            />
                        </View>
                    )} 
                />
            </View>
        </ScrollView>
    )
}

export default Home