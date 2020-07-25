import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

function Pizza(props) {

    const [textos, setTextos] = useState('')

    return (
        <View>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate!"
                onChangeText={text => setTextos(text)}
                defaultValue={textos}
            />
            <Text>{textos.split(' ').map(d => d + '🍕').join('')}!</Text>
        </View>
    );
}

export default Pizza;