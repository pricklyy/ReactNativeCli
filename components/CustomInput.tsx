import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text,View} from 'react-native';

const TextInputExample = ({placeholder,secureTextEntry,value,setValue}:{placeholder:string,
  secureTextEntry:boolean,
  value:string,
  setValue:string}) => {


  return (
    <View style={styles.container}>
            
            <TextInput placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input}/>
            
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width:400,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
  },
  container: {
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
});

export default TextInputExample;