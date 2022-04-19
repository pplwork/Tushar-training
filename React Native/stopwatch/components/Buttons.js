import { View, StyleSheet, Pressable ,Text, TouchableOpacity} from 'react-native'

export const Buttons = ({onStartStopPress,onResetPress,onLapPress,isRunning}) => {
    return (
        <View style={styles.container}>
            <Pressable disabled={!isRunning} style={isRunning?styles.buttonStop:styles.buttonStopDisabled} onPress={onStartStopPress}>
                <Text style={styles.buttonText}>Stop</Text>
            </Pressable>
            <Pressable disabled={isRunning} style={!isRunning?styles.buttonStart:styles.buttonStartDisabled} onPress={onStartStopPress}>
                <Text style={styles.buttonText}>Start</Text>
            </Pressable>
            <Pressable style={!isRunning?styles.buttonReset:styles.buttonResetDisabled} onPress={onResetPress}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
            <Pressable style={isRunning?styles.buttonReset:styles.buttonResetDisabled} onPress={onLapPress}>
                <Text style={styles.buttonText}>Lap</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: "row",
        flexWrap:'wrap',
        width:'80%',
        justifyContent:'space-between',
        position:'absolute',
        bottom:100
    },
    buttonStop:{
        backgroundColor:'#ee5135',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:100,
        width:150,
        alignItems:'center',
        marginTop:10
    },

    buttonStopDisabled:{
        backgroundColor:'#ee5135',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:100,
        width:150,
        alignItems:'center',
        marginTop:10,
        opacity:0.4
    },
    buttonStart:{
        backgroundColor:'#408be0',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:100,
        width:150,
        alignItems:'center',
        marginTop:10

    },
    buttonStartDisabled:{
        backgroundColor:'#408be0',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:100,
        width:150,
        alignItems:'center',
        marginTop:10,
        opacity:0.4
    },
    buttonText:{
        textTransform:'uppercase',
        fontSize:15,
        color:'white'
    },
    buttonReset:{
        backgroundColor:'#464545',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:100,
        width:150,
        alignItems:'center',
        marginTop:10,
    },
    buttonResetDisabled:{
        backgroundColor:'#464545',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:100,
        width:150,
        alignItems:'center',
        marginTop:10,
        opacity:0.4
    }
})
