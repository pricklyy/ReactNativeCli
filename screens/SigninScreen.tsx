import React , {useState} from 'react';
import {Image, StyleSheet, View , Alert,Text,TextInput,Button} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../assets/images/logo.png';

const SignInScreen = ({navigation} : {navigation : any})=> {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


const onPressSignIn = () => {
    let request = {username: username,password:password};
    Alert.alert('Thông báo','Xin chào'+request.username,[
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style:'cancel',
        },
        {text:'OK', onPress:() => console.log('OK Pressed')},
    ]);
};

const navigateToHome = () =>{
    navigation.navigate('Home');
};

    return (
       <View style={styles.root}>
        <Image source={Logo} style={styles.logo}></Image>
        <Text style={styles.banner}>HEY APP... </Text>

        <CustomInput
            placeholder="Username"
            value=''
            setValue=''
            secureTextEntry={false}
        />
        <CustomInput
             placeholder="Password"
             value=""
             setValue=""
             secureTextEntry={true}
        />
        <CustomButton  btnLabel='Sign In' onPress={onPressSignIn}/>
        <CustomButton  btnLabel='Back to Home' onPress={navigateToHome}/>

{/* <TextInput style={styles.input} placeholder='Username' 
            
            secureTextEntry={false} ></TextInput>
            <TextInput style={styles.input} placeholder='Password' 
            
            secureTextEntry={false} ></TextInput>

<Button  title="Login" onPress={(onPressSignIn) => Alert.alert('Đăng nhập thành công')} />


<Button title="Back to Home" onPress={(navigateToHome)} />

        <Text>Forgot Password ?</Text> */}
       </View>
       
    );
};


export default SignInScreen;

const styles = StyleSheet.create({
    root : {
        
        padding:20,
        backgroundColor: 'white',
    },
    logo: {
        width: '20%',
        height: '20%',
       
       
        

    },
    banner : {
        fontWeight:'bold',
        color:'orange',
        fontSize:50,
        width:400,
        textAlign:'center',
        marginTop:100,
        backgroundColor:'white'
    },
    input: {
        width:400,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
      },
      button: {
        marginTop: 10,
        color:'orange',
        padding:10,
        backgroundColor:"orange",
        width:400,
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius:10,
      },
});