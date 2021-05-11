import React, {useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import styles from './style';
import Content from '../../public/json/dashboard.json';
import ProductCard from '../../components/cards/product';

const Dashboard = ({navigation}) => {
    useEffect(() => {
        console.log(Content.pods)
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.center}>
                    <View style={styles.headercontainer}>
                        <Text style={styles.header}>The Gym Pod</Text>
                    </View>
                    {
                        Content.pods.map(item=>{
                            return <ProductCard 
                            key = {item.id}
                            Content = {item}
                            navigation = {navigation}
                            />
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard;
