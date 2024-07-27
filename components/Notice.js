import { View, Text, Button, Alert, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

export default function Notice({noticeName}) {
  return (
    <SafeAreaView style={styles.notice}>
         <View>
        <Text style={styles.textStyle}>{noticeName}</Text>
      <Button title='Log Out' onPress={() =>Alert.alert("Log Out")}></Button>
    </View>
    </SafeAreaView>
   
  );
}

const styles =StyleSheet.create({
    notice:{
       flex:1,
     backgroundColor: '#ED1212',
     alignItems: 'center', 
     justifyContent: 'center',
    },
    textStyle:{
        color:"black",
    }
});