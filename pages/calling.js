import React, {useEffect} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

export default function calling({navigation, route}){
    useEffect(()=>{

        navigation.setOptions({
            title:''
        })   

  },[])
    return(
    <View style={styles.container}>
        <Text style={styles.title}>로봇을 호출 중입니다.</Text>
        
        <View style={styles.okContainer}>
                <TouchableOpacity style={styles.okButton} onPress={()=>{navigation.navigate('MenuPage')}}><Text style= {styles.okText}>호출 취소</Text></TouchableOpacity>
                <TouchableOpacity style={styles.okButton} onPress={()=>{navigation.navigate('returnPage')}}><Text style= {styles.okText}>호출 완료</Text></TouchableOpacity>
        </View>
    </View>
    
    )
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex: 1,
        //justifyContent:'center',
        //alignItems:'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize:50,
        fontWeight:'700',
        alignSelf: 'center'
    },
    okContainer:{
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'white',
    },
    okButton:{
        alignItems: 'center',
        justifyContent: 'center',
        margin:20,
        backgroundColor: 'orange',
        width: 350,
        height: 250,
        borderRadius: 0,
        alignSelf: 'center'
    },
    okText:{
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        margin: 10
    }

})