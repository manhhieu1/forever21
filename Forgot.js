import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Forgot() {
    return (
        <View style={{backgroundColor:'white', flex:1}}>
            <View style={styles.Title}>
                <Text style={styles.textTitle}>RESET YOUR PASSWORD</Text>
                <Text style={styles.textTitle1}>Enter your address below an follow the instructions in the email we will sned you shortly</Text>
            </View>
            <View style={styles.content}>
                <View>
                    <Text>EMAIL ADDRESS</Text>
                    <TextInput keyboardType="email-address" style={styles.email} />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.button1}>SUBMIT</Text>
                    </TouchableOpacity>
                </View >

            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    Title: {

        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10
    },
    textTitle: {
        fontWeight: 'bold'
    },
    textTitle1: {
        textAlign: 'center',
    },
    content: {
        marginLeft:10,
        marginRight:10
    },
    email: {
        borderWidth:1,
        marginBottom:30,
    },
    button: {   
        backgroundColor:'black',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    button1: {   
        color:'white',
    }
});