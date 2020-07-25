import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Pizza from './Pizza'

const Cat = (props) => (
    <Text>Hello I am the cat {props.name}</Text>
)

const fullName = (first, mid, last) => {
    return first + ' ' + mid + ' ' + last
}

function Cate(props) {

    const [isHungry, setIsHungry] = useState(true)
    const textos = 'Eu gosto de Pizza'

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Cat name="Juan" />
            <Text
                style={{
                    fontSize: 20,
                    borderBottomWidth: 5
                }}
            >Esse é o nome {fullName('Juan', 'james', 'jamesson')}</Text>
            <Image
                source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
                style={{ height: 200, width: 200, opacity: isHungry ? 1 : .5 }}

            />
            <Button
                title='alimente-me'
                style={{ height: 20, width: 100 }}
                onPress={() => {
                    setIsHungry(!isHungry)
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Cate;