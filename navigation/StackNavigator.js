import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//page import
import LoginPage from '../pages/LoginPage';
import ConnectPage from '../pages/ConnectPage';
import MenuPage from '../pages/MenuPage';
import calling from '../pages/calling'
import returnPage from '../pages/returnPage';
// import Page from '../pages/';


const Stack = createStackNavigator();


const StackNavigator = () =>{
    return (

        <Stack.Navigator
            screenOptions={{
                //header setting
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                },
                headerTitleAlign:'center',
                headerTintColor: "#000",
                headerBackTitleVisible: true
            }}
            
        >

            <Stack.Screen name="LoginPage" component={LoginPage}/>  
            <Stack.Screen name="ConnectPage" component={ConnectPage}/>  
            <Stack.Screen name="MenuPage" component={MenuPage}/>    
            <Stack.Screen name="calling" component={calling}/>      
            <Stack.Screen name="returnPage" component={returnPage}/>  
        </Stack.Navigator>
    )
}

export default StackNavigator;