import React from 'react';
import { View, Text, StyleSheet, TextInput, toggleCheckBox, setToggleCheckBox, setState, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import PasswordInputText from 'react-native-hide-show-password-input';

export default function Signin() {
    return (
        <View style={styles.wrap}>
            <View style={styles.content}>
                <Text>EMAIL ADDRESS</Text>
                <TextInput keyboardType="email-address" style={styles.TextInput} />
                <Text>EMAIL ADDRESS</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.TextInput}
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                />
                <View style={styles.checkBox}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Remember me</Text>

                </View>
                <View style={styles.buttonContent} >
                    <TouchableOpacity style={styles.button}>
                        <Text>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textForgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.textAcc}>Don't have an Account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrap: {
        flex:1,
        marginTop: 10,
        marginLeft: 20,
        marginRight:20
    },

    TextInput: {
        borderWidth: 1,
        marginBottom: 15


    },
    checkBox: {
        flexDirection: 'row',
        marginTop: 10,
    },
    buttonContent: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddd'
    },
    button: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        height: 50

    },
    textForgot: {
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 30,
        textDecorationLine: "underline",
        color: '#aaa'
    },
    textAcc: {
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 30,
        textDecorationLine: "underline",
        color: 'black'
    },
});

