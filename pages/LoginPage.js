import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { firebase_db } from '../firebaseConfig';

export default function LoginPage({navigation, route}){

    const [first, setfirst] = useState([])
    const [second, setsecond] = useState([])
    const [password, setpassword] = useState()

    useEffect(()=>{
        navigation.setOptions({
            title:''
        })
        setfirst('주민등록번호 앞자리')
        setsecond('주민등록번호 뒷자리')
        setpassword(false)
    
    },[])


    function auth() {
        firebase_db.ref(first).once('value').then((snapshot)=>{
            
            if(snapshot.val()==second) navigation.navigate('MenuPage') 
            
            else Alert.alert('비밀번호를 확인하세요')
            
        })
            

    }
    
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.loginText}>본인인증</Text>
            <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.idContainer}>
                    <TextInput 
                        clearTextOnFocus={true}
                        style={styles.idText}
                        value={first.toString()}
                        onChangeText={(text) => setfirst(text)}
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        onEndEditing={() => console.log("onEndEditing")}
                        onSubmitEditing={() => console.log("onSubmitEditing")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.idContainer}>
                    {/*<Text style= {styles.idText}>주민등록번호 앞자리</Text>*/}
                    <TextInput
                        onTouchStart={()=>setpassword(true)}
                        clearTextOnFocus={true}
                        style={styles.idText}
                        value={second.toString()}
                        onChangeText={(text) => setsecond(text)}
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        onEndEditing={() => console.log("onEndEditing")}
                        onSubmitEditing={() => console.log("onSubmitEditing")}
                        secureTextEntry={password}
                        />
                </TouchableOpacity>
            </View>
            <View style={styles.okContainer}>
                <TouchableOpacity style={styles.okButton} onPress={()=>auth()}>
                    <Text style= {styles.dashText}>OK</Text></TouchableOpacity>
            </View>
        </ScrollView>
    
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    loginText:{
        fontSize: 40,
        textAlign: 'center',
        // marginTop: 60,
        fontWeight: 'bold'
    },
    loginContainer:{
        // marginTop: 40,
        margin: 30,
        backgroundColor: 'white'
    },
    idContainer:{
        margin: 15,
        width: '90%',
        height: 50,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    dashText:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    idText:{
        marginTop: 10,
        textAlign: 'left',
        fontSize: 30
    },
    okContainer:{
        margin: 30,
        backgroundColor: 'white',
    },
    okButton:{
        backgroundColor: 'orange',
        width: '90%',
        height: 50,
        borderRadius: 0,
        alignSelf: 'center'
    }
})