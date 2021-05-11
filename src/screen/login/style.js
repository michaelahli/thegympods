import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:"100%", 
        height:"100%", 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor:"white"
    },
    title:{
        fontSize:50, 
        fontWeight:"bold", 
        color:"white"
    },
    subtitle:{
        fontSize:20, 
        color:"white"
    },
    formcontainer:{
        width:"70%", 
        marginTop:50
    },
    label:{
        fontSize:20, 
        color:"white", 
        marginBottom:10
    },
    input:{
        width:"100%", 
        backgroundColor:"white", 
        color:"black", 
        marginBottom:10, 
        fontSize:15, 
        borderRadius:5,
        paddingLeft:10
    },
    btncontainer:{
        backgroundColor:"black", 
        alignItems:"center", 
        justifyContent:"center", 
        paddingVertical:12, 
        borderRadius:5, 
        marginVertical:30
    },
    btnlabel:{
        color:"white", 
        fontSize:20, 
        fontWeight:"bold"
    }
});

export default styles;