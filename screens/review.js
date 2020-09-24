import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { globalstyles,images } from "../styles/global";
import Card from "../shared/card"
import { MaterialIcons } from "@expo/vector-icons";

export default function Review( {route, navigation } ){
  const { title } = route.params;
  const {rating} = route.params;
  const { body } = route.params;
  const { key } = route.params;

    return(
     <View style={globalstyles.container}>
       <Card>
         <Text style={globalstyles.titleText}>{JSON.stringify(title)}</Text>
         <Text style={globalstyles.titleText}>{JSON.stringify(body)}</Text>
         <View style={styles.rating}>
           <Text>The Gaming Rate:</Text>
           <Image source={images.ratings[rating]}/> 
         </View>
       </Card>  
     </View>
    );
}

const styles =  StyleSheet.create({
      rating:{
         flexDirection:'row',
         justifyContent:'center',
         paddingTop:16,
         marginTop:16,
         borderTopWidth:1,
         borderTopColor:'#eee',
      }
});