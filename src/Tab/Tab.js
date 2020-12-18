import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'
import Home from '../Home/Home';
import Perfil from '../Perfil/Perfil';

const NavegacaoTabs = createBottomTabNavigator ();

const Tab = ({route, navigation}) => {
    return(
        <NavegacaoTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                let iconName;
        
                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Perfil':
                        iconName = 'users';
                        break;
                    default:
                        iconName = 'circle';
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
            <NavegacaoTabs.Screen name="Perfil" component={Perfil} navigation={navigation} />
        </NavegacaoTabs.Navigator>
    )
}
export default Tab;
