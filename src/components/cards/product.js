import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import FormatPrice from '../../utils/price';

const Product = ({navigation, Content}) => {
    const onSubmit = () =>{
        navigation.navigate("Details",{
            content: Content
        });
    }
    
    return (
        <Card style={styles.card}>
            <TouchableOpacity style={styles.touchablecard}>
                <Image 
                source={{uri: Content.picture}} 
                style={styles.image}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{Content.name}</Text>
            <Text style={styles.address}>{Content.address} </Text>
            <View style={styles.row}>
                <View style={styles.column2}>
                    <Text style={styles.price}>Price : Rp {FormatPrice(Content.price)} ,- </Text>
                </View>
                <View style={{...styles.column2, alignItems:'center'}}>
                    <TouchableOpacity style={styles.btncontainer} onPress={()=>onSubmit()}>
                        <Text style={styles.btn}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Card>
    )
}

export default Product;

const styles = StyleSheet.create({
    card:{
        width:"90%",
        backgroundColor:"orange",
        paddingVertical:20,
        borderRadius:10,
        marginBottom:30
    },
    touchablecard:{
        width:"100%",
        alignItems: 'center'
    },
    image:{
        width:"90%",
        height:250,
        marginVertical:20
    },
    title:{
        marginHorizontal:"5%",
        fontSize:25,
        fontWeight:"bold"
    },
    address:{
        marginHorizontal:"5%",
        marginVertical:5
    },
    row:{
        flexDirection:"row",
        marginHorizontal:"5%",
        marginVertical:5
    },
    column2:{
        width:"50%",
        justifyContent:"center"
    },
    price:{
        fontWeight:"bold"
    },
    btncontainer:{
        backgroundColor:"black",
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius:5
    },
    btn:{
        color:"white",
        fontWeight:"bold"
    }
});
