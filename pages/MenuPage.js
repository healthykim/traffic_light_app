import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import icon from '../assets/loginIcon.png'

export default function MenuPage({navigation, route}){
    useEffect(()=>{
            navigation.setOptions({
                title:''
            })    
    
      },[])
      
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>서비스 선택</Text>
            <View style={styles.functionContainer}>
                <TouchableOpacity style={styles.functionButton} onPress={()=>{navigation.navigate('ConnectPage')}}><Text style={styles.functionText}>횡단보도 이용</Text></TouchableOpacity>
                <TouchableOpacity style={styles.functionButton}><Text style={styles.functionText}>사용 방법 안내</Text></TouchableOpacity>
                <TouchableOpacity style={styles.functionButton}><Text style={styles.functionText}>도움 센터 전화 연결</Text></TouchableOpacity>
            </View>


        </ScrollView>
    
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    title:{
        textAlign: 'center',
        margin: 15,
        fontSize: 40,
        fontWeight: 'bold'
    },
    functionContainer:{
        // marginTop: 60,
        backgroundColor: 'white',
        flexDirection:'row'

    },
    functionButton:{
        margin: 10,
        marginTop:10,
        marginBottom: 10,
        width: 250,
        height: 250,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10

    },
    functionText:{
        textAlign: 'center',
        margin: 15,
        fontSize: 50,
        fontWeight: 'bold'
    }
 
})