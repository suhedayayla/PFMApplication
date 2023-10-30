import { View, Text , StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const NewPasswordScreen = () => {

const [code,setCode]=useState('');
const [newPassword,setNewPassword]=useState('');


const onNewPasswordPressed =()=>{
  console.warn("newpsw")
}
const onSignInPressed =()=>{
  console.warn("signin")
}



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Parolamı Sıfırla</Text>
      <CustomInput
                placeholder="Kodunuzu giriniz"
                value={code}
                setValue={setCode}>

      </CustomInput>
      
      
      <CustomInput 
                   placeholder="Yeni parolanızı giriniz" 
                   value={newPassword} 
                   setValue={setNewPassword}/>
                      
      <CustomButton text="Kaydet" onPress={onNewPasswordPressed}/>
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
export default NewPasswordScreen