import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextApp from './TextApp'

const NAME_STATS = [
    'HP',
    'ATK',
    'DEF',
    'SATK',
    'SDEF',
    'SPD'
]

const Row = ({ name, stat, color }) => {

    let string_stat = String(stat)
    if(string_stat.length<3){
        string_stat = string_stat.length<2?
        '00'+string_stat
        :
        '0'+string_stat
    }

    let progress = (stat * 100)/255

    return (
        <View style={styles.row}>
            <TextApp title={name} 
            style={{
                color:color,
                fontWeight:'bold',
                textTransform: 'uppercase',
            }} />
            <TextApp title={string_stat} />
            <View style={styles.progressBar}>
                <View 
                style={[styles.progress,{
                    width:progress+'%',
                    backgroundColor:color,
                }]}/>
            </View>
        </View>
    )
}

export default ({stats, color}) => {

    return (
        <View style={styles.container}>
            {
                stats.map((x, index) => {
                    return <Row key={x.name_stat} name={NAME_STATS[index]} stat={x.base_stat} color={color} />    
                })
            }
            {/*
            <Row name={'HP'} stat={stats[0].base_stat} color={colors.COLOR_TYPE_GRASS}/>
            <Row name={'ATK'} stat={stats[1].base_stat} color={colors.COLOR_TYPE_GRASS}/>
            <Row name={'DEF'} stat={stats[2].base_stat} color={colors.COLOR_TYPE_GRASS}/>
            <Row name={'SATK'} stat={stats[3].base_stat} color={colors.COLOR_TYPE_GRASS}/>
            <Row name={'SDEF'} stat={stats[4].base_stat} color={colors.COLOR_TYPE_GRASS}/>
            <Row name={'SPD'} stat={stats[5].base_stat} color={colors.COLOR_TYPE_GRASS}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        marginHorizontal:20,
        marginVertical:40,
        paddingHorizontal:5,
    },
    row:{
        alignSelf:'stretch',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:2,
    },
    progressBar:{
        width:'80%',
        height:10,
        backgroundColor:'#f0f0f0',
        borderRadius:50,
    },
    progress:{
        borderRadius:50,
        alignSelf:'stretch',
        height:'100%',
        width:0,
    }
})
