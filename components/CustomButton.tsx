import React from "react";
import { View, Button, StyleSheet,Text, Alert ,Pressable,TouchableOpacity} from "react-native";

const App = ({btnLabel,onPress} : {btnLabel:string,onPress: any}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.title}>{btnLabel}</Text>
      </TouchableOpacity>
      
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
    container: {
      // flex:1,
      width:400,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
      
    },
    button:{
      padding:10,
      borderWidth:1,
      borderRadius:10,
      justifyContent:'center',
      backgroundColor:'orange',
      borderColor:'white',
      alignItems:'center',
      marginTop:10,
    
  },
  title:{
    color:'white',
    fontWeight:'bold'

}
});