import { View, Text , StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const ConfirmEmailScreen = () => {

const [code,setCode]=useState('');


const onConfirmPressed =()=>{
  console.warn("confirm")
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
    <Text style={styles.title}>E-posta adresinizi doğrulayın</Text>
      <CustomInput 
                   placeholder="Doğrulama kodunu giriniz" 
                   value={code} 
                   setValue={setCode}/>
                      
      <CustomButton text="E-posta adresimi doğrula" onPress={onConfirmPressed}/>
      <CustomButton text="Kodu tekrar gönder" 
                    type="SECONDARY"> </CustomButton>
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
export default ConfirmEmailScreen