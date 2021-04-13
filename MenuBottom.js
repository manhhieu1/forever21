import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function MenuBottom() {
    return (
     
     <View style={{flexDirection:'row'}}>
               <View style={styles.footer}>
                        <View style={styles.icon}>
                            <TouchableOpacity>
                                <Ionicons name="home-outline" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.icon}>
                            <TouchableOpacity>
                                <Ionicons name="heart-outline" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.icon}>
                            <TouchableOpacity>
                                <Ionicons name="cart-outline" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.icon}>
                            <TouchableOpacity><Ionicons name="person-outline" size={30}/></TouchableOpacity>
                        </View>
             </View>
     </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        bottom:0 
    },
    icon: {
        justifyContent: 'center',
    },
    ScrollView: {
      
    }

});