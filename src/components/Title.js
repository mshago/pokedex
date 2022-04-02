import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextApp from './TextApp'

export default ({ title, color }) => {
    return (
        <TextApp title={title} style={[styles.title,{color:color,}]} />
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
    }
})