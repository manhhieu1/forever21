import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Menubottom from './MenuBottom'



export default function Card() {
    const DATA = [
        {

            id: '1',
            photo: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw5cefad71/1_front_750/00420836-01.jpg?sw=400&sh=600',
            price: '50$',
            name: 'Organic Cotton Basic Crew Neck Tee'


        }

    ]


    const renderItem = ({ item }) => (
        <View>
            <View style={styles.box}>
            <View style={styles.img}>
                <Image
                    style={styles.styleImage}
                    source={{ uri: item.photo }}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.Price}>
                    <Text style={{fontWeight:'bold'}}> {item.price}</Text>
                    <Ionicons name="ellipsis-vertical-outline" size={25} color={'black'} />
                </View>
                <View style={styles.Name}>
                    <Text style={{ marginTop: 5 }}>{item.name}</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={styles.option}>
                        <View style={styles.size1} >
                            <TouchableOpacity>
                                <Text style={{fontWeight:'bold'}}>TAUPE/WHITE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="chevron-down-outline" />

                            </TouchableOpacity>
                        </View>
                        <View style={styles.size} >
                            <TouchableOpacity>
                                <Text style={{ marginLeft: 5 ,fontWeight:'bold'}}>xs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="chevron-down-outline" />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.option}>
                        <View style={styles.size} >
                            <TouchableOpacity>
                                <Text style={{fontWeight:'bold'}}>QTY:1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="chevron-down-outline" />

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>

        </View>
        <View style={{backgroundColor:'#f2eded'}}>
            <View><Text style={{fontWeight:'bold',textAlign:'center',marginBottom:15,marginTop:15}}>Order Summary</Text></View>
            <View style={styles.orderTotal}>
                <View >
                    <Text>Subtotal</Text>
                </View>
                <View>
                    <Text>{item.price}</Text>
                </View>
            </View>
            <View style={styles.orderTotal}>
                <View>
                    <Text>Discount</Text>
                </View>
                <View>
                    <Text>0</Text>
                </View>
            </View>
            <View style={styles.orderTotal}>
                <View>
                    <Text style={{fontWeight:'bold'}}>TOTAL</Text>
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>{item.price}</Text>
                </View>
            </View>
           
               <View style={{height:50,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',alignItems:'center', marginBottom:15,}}>
               <View>
                    <Text style={{fontWeight:'bold',paddingLeft:10}}>PROMOTION CODE</Text>
                </View>
                <View style>
                    <Ionicons name="chevron-forward-outline" size={20}/>
                </View>
               </View>
           
        </View>
        </View>
      
    )
    return (
        <View style={{ flex: 1 }}>
                <View style={{height:70,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                    <Text style={{textAlign:'center',marginTop:25}}>1 Item(s): Total(excluding delivery) 50$</Text>
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
    styleImage: {
        height: 150,
        width: 100,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#ccc'

    },
    box: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft:15,
        marginRight:15,
        marginBottom:15
    },
    img: {
        flex: 0.3
    },
    content: {
        flex: 0.7,
        paddingLeft:10
    },
    styleImage: {
        height: 150,
        width: 100,
    },
    Price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    option: {
        width: '95%',
        flexDirection: 'row'
    },
    size: {
        marginTop: 10,

        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'space-between',


    },
    size1: {
        marginTop: 10,
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'space-between',
        borderRightWidth: 1


    },
    orderTotal: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10, 
        marginRight:10,
        marginBottom:15,
    }
    

});