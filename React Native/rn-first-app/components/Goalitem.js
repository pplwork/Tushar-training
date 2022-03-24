import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Goalitem = (props) => {
    return (
        <TouchableWithoutFeedback opacity={0.8} onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.goalContainer}>
                <Text>{props.items}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    goalContainer: {
        padding: 10,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default Goalitem;