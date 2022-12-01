import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, ViewComponent } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { Api } from "../../Global/Axios/Api";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const TimKiem = () => {
    const navigation = useNavigation()

    const DATA2 = [
        {
            ten: "Thắng",
        }
    ];


    const Item2 = ({ item, index, onPress }) => (
        <View>
            <TouchableOpacity >
                <ListItem>
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.ten}</ListItem.Title>
                        <View style={{ marginTop: 5, flexDirection: 'row' }}>
                            <Text style={{ color: 'gray' }}>Số điện thoại: </Text>
                            <Text style={{ color: 'blue' }}>0385553842</Text>
                        </View>

                    </ListItem.Content>
                    <TouchableOpacity style={{ height: 30, width: 80, backgroundColor: "#87cefa", borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'blue' }}>Kết bạn</Text>
                    </TouchableOpacity>
                </ListItem>
            </TouchableOpacity>
        </View>
    );

    const renderItem2 = ({ item, index }) => {
        return (
            <Item2
                item={item}
            />
        );
    };

    return (
        <View>
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginTop: 5, marginLeft: 20 }}>Tìm bạn qua số điện thoại (1)</Text>
            </View>
            <FlatList
                data={DATA2}
                renderItem={renderItem2}
            />
        </View>
    );
};

export default TimKiem

const styles = StyleSheet.create({
})

