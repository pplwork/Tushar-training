import React from 'react';
import { View, StyleSheet, TextInput, Button, Text, Modal } from 'react-native';
export default function Goalinput(props) {
    const [goalInput, setGoalInput] = React.useState('');
    const handleChange = (text) => {
        setGoalInput(text);
    }

    const handleAddGoal = () => {
        props.onAddGoal(goalInput);
        setGoalInput('');
    }
    return (
        <Modal visible={props.isModalVisible}>
            <View style={styles.inputView}>
                <TextInput placeholder='Course Goal' style={styles.textInput} value={goalInput} onChangeText={handleChange} />
                <View style={styles.buttonView}>
                    <View style={styles.button}><Button title='Cancel' color="red" onPress={props.cancelAdding} /></View>
                    <View style={styles.button}><Button title="ADD" style={styles.inputButton} onPress={handleAddGoal} /></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputView: {
        justifyContent: 'center', alignItems: 'center', flex: 1
    },
    buttonView:{
        flexDirection:'row', 
        justifyContent:'space-between',
        width:'60%'
    },
    textInput: {
        borderColor: 'black', borderWidth: 1, padding: 10, width: 300, marginBottom: 20
    },
    inputButton: {
        padding: 10,
        width:200
    },
    button:{
        width:'40%',
    }
})

