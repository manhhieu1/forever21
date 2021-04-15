import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ImageBackground } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';



const DATA = [
    {
        id: '1',
        photo: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw5cefad71/1_front_750/00420836-01.jpg?sw=400&sh=600',
        price: '50$',
        name: 'Organic Cotton Basic Crew Neck Tee'
    },
    {
        id: '2',
        photo: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw68c1ef52/1_front_750/00430113-01.jpg?sw=400&sh=600',
        price: '50$',
        name: 'Organic Cotton Basic Crew Neck Tee'

    },
    {
        id: '3',
        photo: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw10d6d313/1_front_750/00428700-03.jpg?sw=500&sh=750',
        price: '50$',
        name: 'Organic Cotton Basic Crew Neck Tee'
    },
];

export default function Wishlist() {


    const renderItem = ({ item }) => (
        <View style={styles.box}>
            <View style={styles.img}>
                <Image
                    style={styles.styleImage}
                    source={{ uri: item.photo }}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.Price}>
                    <Text > {item.price}</Text>
                    <Ionicons name="ellipsis-vertical-outline" size={25} color={'black'} />
                </View>
                <View style={styles.Name}>
                    <Text style={{marginTop:5}}>{item.name}</Text>
                </View>
                <View style={{marginTop:45}}>
                    <View style={styles.option}>
                        <View style={styles.size1} >
                            <TouchableOpacity>
                                <Text>TAUPE/WHITE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="chevron-down-outline" />

                            </TouchableOpacity>
                        </View>
                        <View style={styles.size} >
                            <TouchableOpacity>
                                <Text style={{ marginLeft: 5 }}>xs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="chevron-down-outline" />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.option}>
                        <View style={styles.size} >
                            <TouchableOpacity>
                                <Text>QTY:1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="chevron-down-outline" />

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>

        </View>
    )
    return (
        <View style={styles.container}>

            <View style={styles.heading}>
                <Text >1 Item(s)</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        marginTop: 15
    },
    img: {
        flex: 0.3
    },
    content: {
        flex: 0.7
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


    }


});


