import React,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,FlatList, Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalstyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm"

export default function Home({ navigation }) {
  const [modelOpen,setModelOpen]=useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const pressHandler=(key) => {
    setReviews((prevRates) =>
     {return prevRates.filter(rates=>rates.key != key)}
     )
  }

  const addReview=(review)=>{
    review.key = Math.random().toString();
    setReviews((currentReview) => {
      return [review,...currentReview]
    });
    setModelOpen(false);
  }

  return (
      <View style={globalstyles.container}>
      <Modal visible={modelOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modelContent}>
        <MaterialIcons 
       name="close"
       size={24} 
       onPress={()=>setModelOpen(false)}   
       style={{...styles.modelToggle,...styles.modalClose}}
       />
          <ReviewForm addReview={addReview}/> 
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons 
       name="add"
       size={24} 
       onPress={()=>setModelOpen(true)}
       style={styles.modelToggle}
       />
      <FlatList 
      data={reviews}
      renderItem={({item})=>(
        <TouchableOpacity  onPress={()=>navigation.navigate('Review',item)}>
         <Card>
            <View style={styles.delete}> 
            <Text style={globalstyles.titleText}>{ item.title }</Text>
            <View style={styles.deletebutton}>
            <MaterialIcons name="delete" size={18} color="#333" onPress={()=>pressHandler(item.key)} />
            </View>
            </View>
          </Card>
        </TouchableOpacity>
      )}
      />
    </View>
  ); 
}

const styles = StyleSheet.create({
  modelContent:{
       flex:1,
  },
  modelToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:"center",
  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  },
  delete:{
    flexDirection:"row",
  },
  deletebutton:{
    marginTop:5,
    alignItems:"flex-end",
  },
});