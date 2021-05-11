import React, {useEffect} from 'react'
import { View, Image } from 'react-native'
import {useSelector} from 'react-redux';

const Splash = ({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login")
        },3000)
    },[])

    return (
        <View style={{flex:1, backgroundColor:"white", justifyContent: "center", alignItems: "center"}}>
            <Image 
            source={require('../../public/img/logo.png')} 
            />
        </View>
    )
}

export default Splash;
