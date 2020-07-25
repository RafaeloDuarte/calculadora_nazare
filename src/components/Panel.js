import React from 'react';
import { View, StyleSheet } from 'react-native';

import Result from './Result'
import KeyBoard from './KeyBoard'

function Panel() {
    return (
        <View style={styles.container}>
            <Result  style={styles.result}/>
            <KeyBoard  style={styles.keyboard}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        maxHeight:'100%'
    },
    result:{
        height:'30%'
    },
    keyboard:{
        height:'70%'
    }
})

export default Panel;