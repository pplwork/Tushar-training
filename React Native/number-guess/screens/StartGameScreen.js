import React from 'react';
import { StyleSheet, View ,Text, TextInput, Button} from 'react-native';

const Startgamescreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='reset'/>
                    <Button style={styles.button} title='confirm'/>
                </View>
            </View>
        </View>
    );
}

export default Startgamescreen;

const styles=StyleSheet.create({    
    container:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    },
    button:{
        width:'40%'
    },
    title:{
        fontSize:20,
        marginVertical:10,
    }
});