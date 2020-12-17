import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'
import Home from '../Home/Home';

const NavegacaoTabs = createBottomTabNavigator ();

const Tab = ({navigation}) => {
    return(
        <NavegacaoTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                let iconName;
        
                switch (route.name) {
                    case 'Home':
                    iconName = 'home';
                    break;
                }
                return <Icon name={iconName} size={size} color={color} />;

            },
            })}
            tabBarOptions={{
                activeTintColor: '#3498db',
                inactiveTintColor: '#777',
                showLabel: false,
              }} 
            >
            <NavegacaoTabs.Screen name="Home" component={Home} navigation={navigation} />
            {/*<NavegacaoTabs.Screen name="Home" component={Home} navigation={navigation} />*/}
        </NavegacaoTabs.Navigator>
    )
}
export default Tab;
