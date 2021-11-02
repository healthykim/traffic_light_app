import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Loading(){
    return(<View style={styles.container}><Text style={styles.title}>신호등을 찾는 중...</Text></View>)
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex: 1,
        //justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    title: {
        marginTop: 60,
        fontSize:80,
        fontWeight:'700'
    }

})