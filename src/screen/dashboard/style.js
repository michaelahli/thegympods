import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"black"
    },
    scroll:{
        width:"100%"
    },
    center:{
        alignItems:'center', 
        width:"100%"
    },
    headercontainer:{
        width:"100%",
        height:60,
        alignItems: 'center',
        backgroundColor:"orange",
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30
    },
    header:{
        fontSize:20,
        fontWeight:"bold",
    }
});

export default styles;
