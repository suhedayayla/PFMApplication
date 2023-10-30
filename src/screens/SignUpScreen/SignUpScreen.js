import { View, Text , StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignUpScreen = () => {
const [username,setUsername]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [passwordRepeat,setPasswordRepeat]=useState('');


const onRegisterPressed =()=>{
  console.warn("sign up")
}
const onSignInPressed =()=>{
  console.warn("signin")
}

const onTermsOfUsePressed=()=>{
    console.warn("termsOfUse")

}
const onPrivacyPolicy=()=>{
    console.warn("privacyPolicy")

}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}> Hesap Oluştur</Text>
      <CustomInput 
                   placeholder="Kullanıcı Adı" 
                   value={username} 
                   setValue={setUsername}/>
      <CustomInput 
                   placeholder="Email" 
                   value={email} 
                   setValue={setEmail}/>
      <CustomInput 
                   placeholder="Parola" 
                   value={password} 
                   setValue={setPassword}
                   secureTextEntry={true}/> 
     <CustomInput placeholder="Parolayı Tekrar Giriniz" 
                   value={passwordRepeat} 
                  setValue={setPasswordRepeat}
                  secureTextEntry={true}/>                        
      <CustomButton text="Hesap Oluştur" onPress={onRegisterPressed}/>
      <Text style={styles.text}>Kayıt olduğunuzda, {''}
                  <Text style={styles.link} onPress={onTermsOfUsePressed}>kullanım koşullarımızı</Text> ve {''}
                  <Text style={styles.link} onPress={onPrivacyPolicy}>gizlilik politikamızı</Text> {''} kabul ettiğinizi onaylamış olursunuz.</Text>

        <SocialSignInButtons/>
      <CustomButton 
                    text="Hesabınız var mı? Giriş yapın"
                    onPress={onSignInPressed}
                    type="TERTIARY"         
      />
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
  title: {
    fontSize:24,
    fontWeight:'bold',
    color: '#051C60',
    margin:10,
  },
  text: {
    color:'gray',
    marginVertical:10,
  },
  link:{
    color: '#FDB075',


  }
});
export default SignUpScreen;