import React from 'react';
import { Image, View } from 'react-native';

const Header = () => {
    return (
        <View>
            <Image source={require('../assets/math-gifs.gif')}
                style={{ height: 200, width: '100%' }} />
        </View>
    );
};

export default Header;