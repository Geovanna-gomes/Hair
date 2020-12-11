import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const Home = () => {
    return (
        <View>
            <View>
                <Image 
                source={require('../../../Hair/assets/images/H.png')}
                style={{width: 110, height: 110, borderRadius: 15}}
                />
            </View>
        </View>
    )
}

export default Home