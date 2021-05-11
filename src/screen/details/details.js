import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import DayFrom from '../../utils/date';
import styles from './style';
import Content from '../../public/json/details.json';

const Details = ({navigation, route}) => {
    const [data, setData] = useState({
        days:[1,2,3,4,5,6,7],
        chosendate:1
    });
    const {content} = route.params
    const monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    const GetDaysAfter = (inDays)=>{
        const daysafter = DayFrom(inDays,1);
        const arraydays = daysafter.match(/\b(\w+)\b/g);
        switch(arraydays[1]){
            case 1:
                return arraydays[1]+"st";
            case 2:
                return arraydays[1]+"nd";
            case 3:
                return arraydays[1]+"rd";
            default:
                return arraydays[1]+"th";
        }
    }

    const GetMonthsAfter = (inDays)=>{
        const daysafter = DayFrom(inDays,1);
        const arraydays = daysafter.match(/\b(\w+)\b/g);
        return monthnames[arraydays[0]-1];
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
                    <View style={styles.datecontainer}>
                        <ScrollView horizontal={true} style={{width:"100%"}}>
                            {data.days.map(date=>{
                                return <TouchableOpacity style={{...styles.datecard, backgroundColor:data.chosendate != date ? "orange" : "yellow" }} onPress={()=>setData({...data, chosendate:date})}>
                                    <Text style={styles.day}>{GetDaysAfter(date)}</Text>
                                    <Text style={styles.month}> {GetMonthsAfter(date)}</Text>
                                </TouchableOpacity>
                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.orangecontainer}>
                        <View style={{width:"25%"}}>
                            {Content.list[data.chosendate-1].time.map(hour=>{
                                return <Text style={styles.schedulehour}>{hour}</Text>
                            })}
                        </View>
                        <View style={{width:"75%"}}>
                            {Content.list[data.chosendate-1].schedule.map((status, index)=>{
                                return <View style={{width:"100%", flexDirection:"row", justifyContent:"flex-end", alignItems: "center", height:80, borderBottomWidth:1}}>
                                    {status == "full" ? 
                                        <>
                                            <Text style={{...styles.condition,color:"red"}}>Status : {status}</Text>    
                                            <TouchableOpacity style={{...styles.btnpick, paddingHorizontal:22}} disabled={true}>
                                                <Text style={{color:"grey", fontSize:15}}>Full Booked</Text>
                                            </TouchableOpacity>
                                        </>
                                    :
                                    <>
                                        <Text style={{...styles.condition,color:"green"}}>Status : {status}</Text>
                                        <TouchableOpacity style={styles.btnpick} onPress={()=>{navigation.navigate("Confirmation",{date:data.chosendate, hour:Content.list[data.chosendate-1].time[index], content:content})}}>
                                            <Text style={{color:"white", fontSize:15}}>Pick</Text>
                                        </TouchableOpacity>
                                    </>
                                    }
                                    
                                </View>
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Details;
