import  { View ,Text,StyleSheet } from 'react-native';

export const Clock = ({time}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.clockText}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)} : {("0" + Math.floor((time / 1000) % 60)).slice(-2)}. 
        {("0" + Math.floor((time / 10) % 100)).slice(-2)}
      </Text>
    </View>
  )
}

const styles=StyleSheet.create({
    clockText:{
        fontSize:60,
        fontWeight:'200',
        color:'white',
        marginTop:200
    }
})
