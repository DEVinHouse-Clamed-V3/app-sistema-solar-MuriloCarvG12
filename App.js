
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { dragons } from './list.js'

export default function App() {
  return (
  
  <View style={styles.container}>
    <ImageBackground source={{uri: 'https://image.cdn2.seaart.ai/2023-11-14/22652263877110789/fda7808094ec2777d90921c7d517494312bff1b1_high.webp'}} resizeMode="cover" >
      <StatusBar></StatusBar>

      <View style={styles.header}>
      <Text style={styles.header_text}>DragonBook</Text>
      <Text style={styles.header_text}>Onde dragões se conectam  suas chamas</Text>
      </View>

    <ScrollView>
      {
        dragons.map((dragon) => (
        
        <View style={styles.post}>
          <View style={styles.post_user_info}>

          <View style={styles.post_user_pfp}>
          <Image style={styles.post_image} source={{ uri: dragon.pfp_image}} />
          <Text style={styles.Username}>{dragon.user}</Text>
          </View>
          <Text style={styles.User_text}>{dragon.user_info}</Text>
          
          
        
        </View>
        <Text>{dragon.post}</Text>
      
      <Image style={styles.image}  source={{ uri: dragon.post_image}} />

      <View style={styles.reactions}>
      <MaterialCommunityIcons name='paw' size={25} color="green" />
      <MaterialCommunityIcons name='comment' size={25} color="#CCC" />
      <MaterialCommunityIcons name='paw' size={25} color="red" />
      </View>

      </View>
        ))
      } 
    </ScrollView>
        
      
    </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create
({
  container:
  {
    flex: 1,
    justifyContent:'space-between',
    backgroundColor: 'white',
    height: "screenHeight",
    margin: 0,
    padding: 0,
    
  },
  header:
  {
    backgroundColor: 'purple',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    padding: 10,
    margin: 10,
  },
  header_text:
  {
    color: 'orange',
    fontWeight: 'bold',
  },
  post:
  {
    padding: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 40,
    width:  300,
    height: 550,
    borderWidth: 4,
    borderColor: 'orange',
    borderRadius: 20,
    marginBottom: 10,
    
  },
  post_image:
  {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  image:
  {
    height: 250,
    width: 250,
  },
  post_user_info:
  {
    alignSelf: 'flex-start',
    gap: 10,
  },
  post_user_pfp:
  {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  reactions:
  {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 50,
   
  },
  Username:
  {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  User_text:
  {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
  },


})


