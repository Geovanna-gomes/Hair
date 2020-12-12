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
        <ScrollView style={estilo.container}>
            <FlatList
                data={post}
                keyExtractor={(item, index) => index.toString ()}
                renderItem= {({item}) => (
                    <View style={estilo.posts}> 
                <Image 
                source={{uri: item.image}}
                style={estilo.post1}
                />
                <Image 
                source={{uri: item.image}}
                style={estilo.post1}
                /><Image 
                source={{uri: item.image}}
                style={estilo.post1}
                /><Image 
                source={{uri: item.image}}
                style={estilo.post1}
                />
            </View>
            
                )} 
            />
            
        </ScrollView>
    )
}

export default Home