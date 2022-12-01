import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Icon2 from "@expo/vector-icons/AntDesign";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, CheckBox, Input, ListItem } from 'react-native-elements';
import { theme } from "../../Mau/theme";
import { Api } from "../../Global/Axios/Api";
const ChinhSuaThonTinCaNhan = () => {
    const navigation = useNavigation()
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{ height: 70, backgroundColor: 'blue' }}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity >
                        <Icon2 style={{ marginTop: 25, marginLeft: 20 }}
                            name="close"
                            size={25}
                            color={theme.colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 25, marginLeft: 15, fontSize: 17, fontWeight: 'bold', color: 'white' }}>Thông tin cá nhân</Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity >
                    <ListItem>
                        <Avatar
                            size={70}
                            rounded
                            source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                        <TouchableOpacity style={{ width: 25, height: 25, backgroundColor: '#fffaf0', borderRadius: 15, position: 'absolute', marginLeft: 70, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon2 name="camera" size={15} />
                        </TouchableOpacity>
                        <ListItem.Content>
                            <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center', justifyContent: 'space-between', width: 250 }}>
                                <TextInput style={{ fontSize: 18 }}>Hoàng Tiến Mạnh Đức</TextInput>
                                <TouchableOpacity>
                                    <Feather style={{ color: 'blue' }} name="edit-3" size={15} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 250 }}>
                                <TextInput style={{ fontSize: 18 }}>12/01/2000 </TextInput>
                                <TouchableOpacity>
                                    <Feather style={{ color: 'blue' }} name="edit-3" size={15} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <CheckBox
                                    
                                    center
                                    title="Nam"
                                    checked={check1}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon="circle-o"
                                    onPress={() => setCheck1(!check1)}
                                />
                                <CheckBox
                                    center
                                    title="Nữ"
                                    checked={check2}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon="circle-o"
                                    onPress={() => setCheck2(!check2)}
                                />
                            </View>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{width:300,height:40,backgroundColor:'#afeeee',borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Lưu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default ChinhSuaThonTinCaNhan;