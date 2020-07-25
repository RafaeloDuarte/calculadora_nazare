import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function KeyBoard() {

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(0)

    function op(ope) {
        switch (ope) {
            case '+':
                setResult(Number(number1) + Number(number2))
                setOperation('')
                setNumber1('')
                setNumber2('')
                break;
            case '-':
                setResult(Number(number1) - Number(number2))
                setOperation('')
                setNumber1('')
                setNumber2('')
                break;
            case '*':
                setResult(Number(number1) * Number(number2))
                setOperation('')
                setNumber1('')
                setNumber2('')
                break;
            case '/':
                setResult(Number(number1) / Number(number2))
                setOperation('')
                setNumber1('')
                setNumber2('')
                break;
        }
        console.log(result)
    }

    function setNumber(number) {
        if (operation === '') {
            setNumber1(number1.toString() + number.toString())
        } else {
            setNumber2(number2.toString() + number.toString())
        }
    }

    return (
        <View style={styles.container}>
            <Text>{number1} {operation} {number2}</Text>
            <Text>{result}</Text>
            <View>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(1)} style={styles.buttons}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(4)} style={styles.buttons}>
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(7)} style={styles.buttons}>
                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setOperation('+')} style={styles.buttons}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(2)} style={styles.buttons}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(5)} style={styles.buttons}>
                    <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(8)} style={styles.buttons}>
                    <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(0)} style={styles.buttons}>
                    <Text>0</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(3)} style={styles.buttons}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(6)} style={styles.buttons}>
                    <Text>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keys} onPress={() => setNumber(9)} style={styles.buttons}>
                    <Text>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => op(operation)}>
                    <Text>=</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => setOperation('+')} style={styles.buttons}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOperation('-')} style={styles.buttons}>
                    <Text>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOperation('*')} style={styles.buttons}>
                    <Text>*</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOperation('/')} style={styles.buttons}>
                    <Text>/</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    buttons: {
        width: 100,
        height: 80,
        backgroundColor: 'rgb(58, 58, 58)',
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textKeys: {
        color: 'white'
    }
})

export default KeyBoard;