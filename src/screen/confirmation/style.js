import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"black"
    },
    row:{
        flexDirection:"row",
        width:"100%",
        marginVertical:10
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
        alignItems:'center',
        marginBottom:30,
        flexDirection:"row",
    },
    backcontainer:{
        width:"10%"
    },
    back:{
        width:"100%",
        height:"100%"
    },
    alignheadercontainer:{
        width:"80%", 
        alignItems:"center"
    },
    header:{
        fontSize:20,
        fontWeight:"bold",
    },
    centerconfirm:{
        width:"100%",
        height:600,
        alignItems:"center",
        justifyContent:"center"
    },
    confirmcontainer:{
        width:"90%",
        backgroundColor:"orange",
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:20,
    },
    confirmtitle:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:10
    },
    labelcolumn:{
        width:"30%"
    },
    label:{
        fontSize:15,
        fontWeight:"bold",
        height:45
    },
    detailcolumn:{
        width:"70%"
    },
    detail:{
        fontSize:15,
        width:"100%",
        flexWrap:"wrap",
        height:45,
        fontStyle:"italic"
    },
    btncontainer:{
        width:"100%",
        alignItems:"center",
        backgroundColor:"black",
        paddingVertical:10,
        borderRadius:5
    },
    btn:{
        color:"white"
    }
});

export default styles;
