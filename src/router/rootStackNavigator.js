import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Dashboard from '../screen/dashboard/dashboard';
import Details from '../screen/details/details';
import Splash from '../screen/splash/splash';
import Login from '../screen/login/login';
import Confirmation from '../screen/confirmation/confirmation';

const RootNavigator = () => {
    const authstate = useSelector((state) => state.authReducer);
    const RootStack = createStackNavigator();
    const [dashboard, setDashboard] = useState(false)
    useEffect(() =>{
        if (typeof authstate.data === 'string'){
            setDashboard(true)
        }
        console.log(authstate.data)
    },[authstate.data])

    return(
        <RootStack.Navigator headerMode='none'>
            {dashboard == false ? 
            <>
                <RootStack.Screen name="Splash" component={Splash}/>
                <RootStack.Screen name="Login" component={Login}/>
            </>
            :
            <>
                <RootStack.Screen name="Dashboard" component={Dashboard}/>
                <RootStack.Screen name="Details" component={Details}/>
                <RootStack.Screen name="Confirmation" component={Confirmation}/>
            </>
            }
        </RootStack.Navigator>
    )
};

export default RootNavigator;