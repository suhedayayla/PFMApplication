import { View, Text ,Image , StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignInScreen = () => {
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');

const {height}=useWindowDimensions();

const onSignInPressed =()=>{
  console.warn("sign in")
}
const onForgotPasswordPressed =()=>{
  console.warn("Forgotpsw")
}

const onSignUpPressed =()=>{
  console.warn("SignUp")
}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image 
      source={Logo} 
      style={[styles.logo, {height: height*0.3}] }
      resizeMode="contain"/>

      <CustomInput                   
                   placeholder="Kullanıcı Adı" 
                   value={username} 
                   setValue={setUsername}/>
      <CustomInput
                  placeholder="Parola" 
                  value={password} 
                  setValue={setPassword}
                  secureTextEntry={true}/>
      <CustomButton text="Giriş Yap" onPress={onSignInPressed}/>
      <CustomButton text="Parolamı Unuttum" 
      onPress={onForgotPasswordPressed} 
      type="TERTIARY"/>

      <SocialSignInButtons/>
      <CustomButton text="Henüz bir hesabınız yok mu? Hesap Oluşturun" 
            onPress={onSignUpPressed} 
            type="TERTIARY"/>
      
    </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
  },
  logo: {
    width:'70%',
    maxWidth:300,
    maxHeight:200,
  },
});
export default SignInScreen