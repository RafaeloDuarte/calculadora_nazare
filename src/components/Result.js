import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

function Result() {

    const {
        number1,
        number2,
        operation,
        result
    } = useSelector(state => state)

    return (
        <View style={styles.container}> 
            <Text style={styles.text}>{`${number1} ${operation} ${number2} = ${result}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'black',
        flexDirection:'row-reverse'
    },
    text:{
        color:'white',
        fontSize: 50
    }
})

export default Result;