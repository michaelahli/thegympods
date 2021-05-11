import React, {useEffect} from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import DayFrom from '../../utils/date';
import styles from './style';
import FormatNumber from '../../utils/price';

const Confirmations = ({navigation, route}) => {
    useEffect(()=>{
        console.log(route.params)
    },[])
    const monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const { content, date, hour } = route.params;
    const GetDaysAfter = (inDays)=>{
        const daysafter = DayFrom(inDays,1);
        const arraydays = daysafter.match(/\b(\w+)\b/g);
        switch(arraydays[1]){
            case 1:
                return arraydays[1]+" st";
            case 2:
                return arraydays[1]+" nd";
            case 3:
                return arraydays[1]+" rd";
            default:
                return arraydays[1]+" th";
        }
    }

    const GetMonthsAfter = (inDays)=>{
        const daysafter = DayFrom(inDays,1);
        const arraydays = daysafter.match(/\b(\w+)\b/g);
        return monthnames[arraydays[0]-1];
    }

    const onSubmit = ()=>{
        Alert.alert("We have booked the pods for you, we are cannot wait to see you !")
        navigation.popToTop();
    }

    return (
        <ImageBackground source={require('../../public/img/login.jpg')} style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.center}>
                    <View style={styles.headercontainer}>
                        <View style={styles.backcontainer}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                <Image source={require('../../public/img/back.png')} style={styles.back}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.alignheadercontainer}>
                            <Text style={styles.header}>{content.name}</Text>
                        </View>
                    </View>
                    <View style={styles.centerconfirm}>
                        <View style={styles.confirmcontainer}>
                            <Text style={styles.confirmtitle}>Confirm Booking</Text>
                            <View style={styles.row}>
                                <View style={styles.labelcolumn}>
                                    <Text style={styles.label}>Pod </Text>
                                    <Text style={styles.label}>Address </Text>
                                    <Text style={styles.label}>Date</Text>
                                    <Text style={styles.label}>Hour</Text>
                                    <Text style={styles.label}>Total</Text>
                                </View>
                                <View style={styles.detailcolumn}>
                                    <Text style={styles.detail}>{content.name}</Text>
                                    <Text style={styles.detail}>{content.address}</Text>
                                    <Text style={styles.detail}>{GetDaysAfter(date) +" "+ GetMonthsAfter(date)}</Text>
                                    <Text style={styles.detail}>{hour}</Text>
                                    <Text style={styles.detail}>Rp {FormatNumber(content.price)} ,-</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.btncontainer} onPress={()=>{onSubmit()}}>
                                <Text style={styles.btn}>
                                    Confirm Booking
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Confirmations;
