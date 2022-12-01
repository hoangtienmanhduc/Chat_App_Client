import React from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from "react-native";
import HeaderDanhBa from "./HeaderDanhBa";
// import BanBeDanhBa from "./BanBeDanhBa";
// import NhomDanhBa from "./NhomDanhBa";
import TimKiem from "./TimKiem";


const DanhBa = () => {
    return (
        <View>
            <HeaderDanhBa></HeaderDanhBa>
            <ScrollView>
                {/* <BanBeDanhBa></BanBeDanhBa> */}
                {/* <NhomDanhBa></NhomDanhBa> */}
<TimKiem></TimKiem>
            </ScrollView>
        </View>

    )
}

export default DanhBa

const style = StyleSheet.create({})