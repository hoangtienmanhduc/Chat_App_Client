import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android'
import Feather from "react-native-vector-icons/Feather"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HeaderDanhBa = () => {
    const [click, setclick] = useState()
    const DATA = [
        {
            title: "BẠN BÈ",
        },
        {
            title: "NHÓM",
        },
    ];
    const Item = ({ item, index, onPress }) => (
        <View>
            {click === index ? (<View><TouchableOpacity style={{ marginLeft: 70, alignItems: 'center' }} onPress={onPress}  >
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", textDecorationLine: "underline", marginRight: 70 }}>
                    {item.title}
                </Text>
            </TouchableOpacity></View>) : (<View>
                <TouchableOpacity style={{ marginLeft: 70, alignItems: 'center' }} onPress={onPress}  >
                    <Text style={{ fontSize: 17, color: "gray", marginRight: 70 }}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            </View>)}

        </View>
    );
    
    const renderItem = ({ item, index }) => {
        return (
            <Item
                item={item}
                index={index}
                click={click}
                onPress={() => {
                    setclick()
                }
                }
            />
        );
    };

    return (
        <View>
            <View style={{ backgroundColor: '#00bfff' }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: "90%" }}>
                        <SearchBar
                            placeholderTextColor={"white"}
                            placeholder="Tìm kiếm"
                            searchIcon={{color:'white'}}
                            inputContainerStyle={{ width: "90%", marginLeft: 10, height: 40 }} />
                    </View>
                    <Feather style={{ marginRight: 10 }} title="cá nhân" size={25} name="user-plus" color={"white"} />
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    horizontal
                />
            </View>
            <View style={{ backgroundColor: '#c0c0c0', height: 1, marginTop: 10 }}></View>
        </View>

    );
};

export default HeaderDanhBa

const styles = StyleSheet.create({

})

