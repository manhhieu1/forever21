import React from 'react'
import { View, Text, ScrollView, TouchableOpacity,StyleSheet,FlatList } from 'react-native'
import Ionions from 'react-native-vector-icons/Ionicons'
import Menubottom from './MenuBottom'

export default function Account() {
    const DATA = [
        {
          id: 1,
          Title: 'MY ORDER',
          info: 'Oder Status, History and Tracking',
        },
        {
          id: 2,
          Title: ' PROFILE',
          info: 'Manage user infomation',

        },
        {
          id: 3,
          Title: 'PASSWORD',
          info: 'Manage password',

        },
        {
          id: 4,  
          Title: 'MANANAGE PRENFERENCE',
          info: 'Maketting preference for email and push notification',

        },
        {
            id: 5,
            Title: 'ADDRESS BOOK',
            info: 'Manage shipping and billing address',
  
          },
          {
            id: 6,
            Title: 'WALLET',
            info: 'Manage payment type methods',
  
          },
          {
            id: 7,
            Title: 'FOREVER21 CREADIT CARD',
            info: 'Manage F21 Credit Card',
  
          },
      ];

      const renderItem = ({ item }) => (
        <View>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <View>
                <Text style={styles.Title}>{item.Title}</Text>
                <Text style={styles.info}>{item.info}</Text>
            </View>
            <View>
                <Ionions name="chevron-forward-outline" size={25}/>
            </View>
        </TouchableOpacity>
    </View>
      ); 

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <View><Text>Hello, Hieu</Text></View>
            </View>
            <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
            {/* <Menubottom /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:50,
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#ccc',
    },
    TouchableOpacity: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        height:70
    },
    Title:{
        fontSize:15
    },
    info: {
        fontSize:12
    }
});