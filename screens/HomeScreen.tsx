import {Button} from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }:{navigation: any}) => {
    const navigationToLogin = () => {
        navigation.navigate('Login');
    };


    return <Button title='Go to Login Screen' onPress={navigationToLogin} />;
};

export default HomeScreen;