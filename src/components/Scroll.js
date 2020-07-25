import React from 'react';
import { ScrollView, Image } from 'react-native'

function Scroll() {

    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        height: 64,
        width: 64
    }

    return (
        <ScrollView>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>

        </ScrollView>
    );
}

export default Scroll;