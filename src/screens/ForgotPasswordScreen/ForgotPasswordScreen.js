import { View, Text , StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {

const [email,setEmail]=useState('');


const onForgotPasswordPressed =()=>{
  console.warn("forgotpsw")
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
    <Text style={styles.title}>Parolamı Sıfırla</Text>
      <CustomInput 
                   placeholder="E-posta adresinizi giriniz" 
                   value={email} 
                   setValue={setEmail}/>
                      
      <CustomButton text="Gönder" onPress={onForgotPasswordPressed}/>
      <CustomButton text="Giriş sayfasına geri dön"
                    type="TERTIARY"> </CustomButton>

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
    fontSize:22,
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
export default ForgotPasswordScreen