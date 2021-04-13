import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView, ScrollView, TextInput, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Menubottom from './MenuBottom'
const DATA1 = [
  {
    id: 1,
    photo: 'https://cdn.msiapromos.com/wp-content/uploads/2014/08/Forever-21-21-Aug-2014-300x300.jpg',

  },
  {
    id: 2,
    photo: 'https://lh3.googleusercontent.com/R8BIUI6Quae8Y_2MB07A8hg3eG3DUh7n43P4kIGwdtZ6RzTulRZdJFHX_Wl7bBWK9xzmY_uFZC1sqGdcsSrhzMRdDw=w1000',
  },
  {
    id: 3,
    photo: 'https://lh3.googleusercontent.com/0gcUzImRxv7fOgeiQHrWeG8YK0uIEtsTh5dsZfojIzGLQBDTMZWweB4fuGCW_WmL4XtTkywv3oKU4rkiC3IBls9AwIug=w1000',
  },
  {
    id: 4,
    
    photo: 'https://www.isic.nl/media/1094811/0716_isic_nlbanner_nl.jpg',
  }
];
const DATA = [
  {
    id: 1,
    
    photo: 'https://www.isic.nl/media/1094811/0716_isic_nlbanner_nl.jpg',

  },
  {
    id: 2,
    photo: 'https://www.stylecracker.com/blog/wp-content/uploads/2014/07/forever-21.jpg',

  },
  {
    id: 3,
    photo: 'https://i.pinimg.com/originals/0d/b6/0c/0db60c64732d41d24885feb29e43a8ae.jpg',

  },
  {
    id: 4,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCWdjHDfibYPW4pNu4R6jO8P28RBgG1LLaCoU0YsEcD5sHJ5r0MPz4snWlb0_VrVb2so&usqp=CAU',

  },
  {
    id: 5,
    photo: 'https://eportal.metfone.com.kh/upload/1000217/20191121/34e737a3e60bd2904634da2eaedf0694.gif',

  },
  {
    id: 6,
    photo: 'https://www.isic.nl/media/1094811/0716_isic_nlbanner_nl.jpg',

  },
  {
    id: 7,
    photo: 'https://www.stylecracker.com/blog/wp-content/uploads/2014/07/forever-21.jpg',

  },
  {
    id: 8,
    photo: 'https://i.pinimg.com/originals/0d/b6/0c/0db60c64732d41d24885feb29e43a8ae.jpg',

  },
  {
    id: 9,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCWdjHDfibYPW4pNu4R6jO8P28RBgG1LLaCoU0YsEcD5sHJ5r0MPz4snWlb0_VrVb2so&usqp=CAU',

  },
];

export default function Home() {

  const renderItem = ({ item }) => (
    <View style={{ marginTop: 12 }} >
      <Image
        style={styles.imgStyle}
        source={{ uri: item.photo, }}
      />
    </View>
  );
  const renderItem1 = ({ item }) => (
    <View style={{ marginBottom: 5, width:'47%' }} >
      <Image
        style={styles.imgStyle1}
        source={{ uri: item.photo, }}
      />
    </View>
  );
  return (

    
    <View style={styles.container}>
   <View style={{ flexDirection: 'row'}}>
        <View style={styles.header}>
        <View style={styles.search}>
          <Ionicons name="search" size={30} color={'black'} />
          <TextInput style={styles.TextInput}></TextInput>
          <Ionicons name="mic" size={30} color={'black'} />

        </View>
        <View style={styles.qrcode}>
            <TouchableOpacity>
               <MaterialCommunityIcons name="qrcode-scan" size={30} color={'black'} />
            </TouchableOpacity>
        </View>
      </View>
      </View>
      
      <ScrollView>
        <View style={{marginTop:12}}>
          <Text style={{textAlign:'center',textDecorationLine:'underline'}}>
            All Special Offers (12)
          </Text>
        </View>
        <View>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View >
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>Shop the 'Gram</Text>
        <Text>Upload your favorite F21 outfit on Instagram with </Text>
        <Text>#Forever Men for a chance to be</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Ionicons name="logo-instagram" size={30} />
          <Ionicons name="at-outline" size={30} />
          <Text style={{fontSize:20}}>Forever21Men</Text>
        </View>
      </View>
      <FlatList
       data={DATA1}
       numColumns={2}
       renderItem={renderItem1}
       keyExtractor={item => item.id}
       columnWrapperStyle={{ justifyContent:'space-evenly', flex: 1 }}
       style={{ marginBottom:0 }}
      />
        </View>
        
        <View style={{justifyContent:'center',alignItems:'center',marginTop:10,marginBottom:10}}>
          <Text style={{backgroundColor:'#ccc',fontSize:15,fontWeight:"bold"}}>View more</Text>
        </View>
      </ScrollView>
      <Menubottom />
    </View>

  )
}

const styles = StyleSheet.create({
  container: { flex: 1, position:'relative' },
  ScrollView: {
    marginHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor:'#ddd'
  },
  search: {
    width:50,
    flexDirection: "row",
    flex: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
    


  },
  TextInput: {
    width: "75%"
  },
  qrcode: {
    justifyContent: 'center',
  },
  imgStyle: {
    height: 220
  },
  imgStyle1: {
    width:'100%',
    height:180
  }

});