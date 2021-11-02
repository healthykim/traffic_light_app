import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'


export default function Destination({destname}){
    return(
        <View style={styles.destCard}>
            <View style={styles.destText}>
                <Text style={styles.destName} numberOfLines={1}>{destname}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    destCard:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    destText: {
     flex:2,
     flexDirection:"column",
      marginLeft:10,
    },
    destName: {
      fontSize:20,
      fontWeight:"700"
    }
});