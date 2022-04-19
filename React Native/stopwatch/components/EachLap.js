import React from 'react'
import {Text, StyleSheet} from 'react-native'

export const EachLap = ({index,lap,laptime}) => {
  return (
    <Text style={styles.lapText}>  {("0"+index).slice(-2)}        {("0" + Math.floor((laptime / 60000) % 60)).slice(-2)} : {("0" + Math.floor((laptime / 1000) % 60)).slice(-2)} : {("0" + ((laptime / 10) % 100)).slice(-2)}        {("0" + Math.floor((lap / 60000) % 60)).slice(-2)} : {("0" + Math.floor((lap / 1000) % 60)).slice(-2)} : {("0" + ((lap / 10) % 100)).slice(-2)}</Text>
  )
}

const styles=StyleSheet.create({
    lapText: {
        color: 'white',
        marginTop: 10,
        fontSize: 16
    }
})