import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButtons = () => {

    const onSignInFacebookPressed =()=>{
        console.warn("SignInFacebook")
      }
      const onSignInGooglePressed =()=>{
        console.warn("SignInGoogle")
      }

    

  return (
    <>
   <CustomButton 
          text="Facebook ile Giriş Yap" 
          onPress={onSignInFacebookPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
          />
      <CustomButton 
          text="Google ile Giriş Yap" 
          onPress={onSignInGooglePressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
          />
    
          </>
  )
}

export default SocialSignInButtons