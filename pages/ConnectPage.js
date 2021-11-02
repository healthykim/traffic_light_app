import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Loading from '../components/Loading';
import Destination from '../components/Destination';
import { firebase_db } from '../firebaseConfig';
import * as Location from "expo-location";
import { acos } from 'react-native-reanimated';

const PI = 3.14159265359
var validLights = {}



export default function ConnectPage({ navigation, route }) {
    const [found, setfound] = useState(false)
    const [destidx, setDestidx] = useState(-1)
    const threshold = 50


    useEffect(() => {
        navigation.setOptions({
            title: ''
        })
        //validLights={}
        getLocation();
        console.log(validLights)

    }, [])

    const getLocation = async () => {
        try {
            //실행순서 고정 -> async,await
            await Location.requestForegroundPermissionsAsync();
            const locationData = await Location.getCurrentPositionAsync();
            const latitude = locationData['coords']['latitude']
            const longitude = locationData['coords']['longitude']
            console.log(latitude)
            console.log(longitude)
            await getLight(latitude, longitude)
            if(Object.keys(validLights).length!=0){
                setfound(true)
                setDestidx(0)
            }
                    
        } catch (error) {
            Alert.alert("위치를 찾을 수가 없습니다.");
            console.log(error)
        }
    }

    function convertDecimalToRadian(deg){
        return (deg*PI) / 180
    }
    function convertRadianToDecimal(rad){
        return (rad*180) / PI
    }


    function getDist(lat1, lon1, lat2, lon2){
        var theta = lon2-lon1
        var dist = Math.sin(convertDecimalToRadian(lat1)) * Math.sin(convertDecimalToRadian(lat2))
                    + Math.cos(convertDecimalToRadian(lat1)) * Math.cos(convertDecimalToRadian(lat2)) 
                    * Math.cos(convertDecimalToRadian(theta))
        dist = convertRadianToDecimal(Math.acos(dist)) * 60 * 1.1515 * 1.609344 * 1000
        return dist;
    }


    function getLight(lat, lon){
        firebase_db.ref('/trafficLights/trafficLights').once('value').then((snapshot)=>{
            let Lights = snapshot.val()
            validLights={}
            Lights.map((light)=>{
                    if(getDist(lat, lon, light.latitude, light.longitude)<threshold){
                        validLights[Object.keys(validLights).length] = light.name
                        console.log(Object.keys(validLights).length)
                        console.log(light.name)
                        setfound(true)
                    }
                    console.log(light.name+getDist(lat, lon, light.latitude, light.longitude))
                }
            )
        }
        )
        
    }


        return found ? (
            <View style={styles.container}>
                <Text style={styles.title}>도착 신호등을 선택하세요</Text>
                <View style={styles.destContainer}>
                    <Text style={styles.destTitle}>{validLights[destidx]}</Text>
                    <View style ={styles.okContainer}>
                        <TouchableOpacity style={styles.okButton} onPress={()=>{navigation.navigate("calling")}}>
                            <Text style={styles.okText}>선택</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.okButton} 
                            onPress={()=>{
                                if(destidx+1==Object.keys(validLights).length) 
                                    return setDestidx(0)
                                else
                                    return setDestidx(destidx+1)
                            }}>
                        <Text style={styles.okText}>다음</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
        ) : <Loading />
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white'
        },
        title: {
            fontSize: 40,
            fontWeight: '700',
            textAlign: 'center'
        },
        destContainer: {
            margin: 30,
            height: 250,
            width: '90%',
            alignSelf: 'center'
        },
        destTitle:{
            marginTop: 10,
            fontSize: 70,
            fontWeight: '700',
            textAlign: 'center'
        },
        okContainer: {
            marginTop: 20,
            flexDirection: 'row'
        },
        okButton: {
            backgroundColor: 'orange',
            width: '48%',
            height: 150,
            borderRadius: 0,
            alignSelf: 'center',
            marginRight: '4%'
        },
        okText: {
            marginTop: 50,
            textAlign: 'center',
            fontSize: 50,
            fontWeight: 'bold',
        }

    })