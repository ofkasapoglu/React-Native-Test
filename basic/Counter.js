import { StyleSheet, View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {

    const [number, setNumber] = useState(0);

    const hendleIncrease = () => {
        setNumber(number + 1);
    }


    const hendleDecrease = () => {
        setNumber(number - 1);
    }


    const hendleReset = () => {
        setNumber(0);
    }


    return (
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{number}</Text>
            </View>
            <View style={styles.buttonsContaianer}>
                <Button title="Artir" onPress={hendleIncrease} />
                <Button title="Azalt" onPress={hendleDecrease} />
                <Button title="Reset" onPress={hendleReset} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    number: {
        fontSize: 60
    },
    buttonsContaianer: {
        felx: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    numberContainer:{
        flex:1,
        //borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default Counter