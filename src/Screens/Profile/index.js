import React from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from "react-native";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";


const Profile = () => {
    return (
        <View>
            <HeaderProfile></HeaderProfile>
            <FooterProfile></FooterProfile>
        </View>

    )
}

export default Profile

const style = StyleSheet.create({})