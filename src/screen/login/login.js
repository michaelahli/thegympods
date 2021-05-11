import React,{useState, useEffect} from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {AuthAction} from '../../global/actions/authActions';

const Login = ({navigation, route})=>{
    const [data, setData] = useState({
        username:'',
        password:'',
    });
    const authstate = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const onSubmit = ()=>{
        dispatch(AuthAction(data.username, data.password))
    }
    return (
        <ImageBackground 
        source={require('../../public/img/login.jpg')} 
        style={styles.container}
        >
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Let's rock again!</Text>

            <View style={styles.formcontainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput 
                style={styles.input}
                placeholder="Input Your Username..."
                onChangeText={(value)=>setData({...data, username:value})}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                style={styles.input}
                placeholder="Input Your Password..."
                onChangeText={(value)=>setData({...data, password:value})}
                />

                <TouchableOpacity 
                style={styles.btncontainer}
                onPress={()=>onSubmit()}
                >
                    <Text style={styles.btnlabel}>Login</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default Login;
