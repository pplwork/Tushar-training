import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { EachLap } from './EachLap'
import React from 'react'

export const Laps = ({laps}) => {

    return (
        <View style={styles.container}>
            {laps.length!=0 && <Text style={styles.headerText}>LAP     LAP TIMING    OVERALL TIME</Text> }
            <ScrollView>
                {
                    laps.map((theLap,index) => {
                        var lapTime=0;
                        if(index-1>=0){
                            const prevTime=laps[index-1];
                            const curTime=theLap;
                            lapTime=curTime-prevTime;
                        }
                        return (
                            <EachLap key={index} index={index+1} laptime={lapTime} lap={theLap}/>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
                            {/* <Text style={styles.lapText}>   {eachLap.id}          {eachLap.time}             {eachLap.overall}</Text> */}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        maxHeight: 290,
    },
    headerText: {
        color: '#408be0',
        fontSize: 16,
    },
    lapText: {
        color: 'white',
        marginTop: 10,
        fontSize: 16
    }
})