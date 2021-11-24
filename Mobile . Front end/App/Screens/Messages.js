import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList, Platform,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Colors from '../Theme/Colors';
import CustomeFonts from '../Theme/CustomeFonts';
import Style, { HEIGHT } from '../Theme/Style';
import { Icon } from 'react-native-elements';
import { Indicator, NoData, } from '../Common/CommonMethods';



const Home = ({ navigation, route }) => {
    const [isLoding, setIsLoding] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <SafeAreaView style={Style.cointainer}>

            {isLoding ? (
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                    <Indicator></Indicator>
                </View>
            ) : (
                <View style={{ flex: 1, padding: 15, flexDirection: 'column' }}>
                    <Text style={[Style.text16, { fontFamily: CustomeFonts.Poppins_Bold, height: 56, color: Colors.lightblack, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center' }]}>Messages</Text>

                    <View style={{ marginBottom: 15, flexDirection: 'row', width: '100%' }}>
                        <Text style={[Style.text22, { textAlignVertical: 'center', flex: 7 }]}>Messages</Text>
                        <View style={[Style.buttonStyle2, { flex: 4 }]}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('NewMessage', {})
                                }}
                                style={{ width: '100%' }}>
                                <Text style={[Style.text16, { textAlign: 'center', width: '100%', color: Colors.white }]}>Compose</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    <TouchableOpacity
                        style={{
                            borderRadius: 8,
                            flexDirection: 'row', paddingVertical: 10, backgroundColor: Colors.TheamColor2
                        }}>
                        <Text style={[Style.text16, { marginLeft: 4, color: Colors.white, flex: 2 }]}>Time</Text>
                        <Text style={[Style.text16, { marginHorizontal: 4, color: Colors.white, flex: 3 }]}>From</Text>
                        <Text style={[Style.text16, { flex: 2, color: Colors.white, }]}>Subject</Text>

                    </TouchableOpacity>

                    <FlatList
                        style={{ flex: 1, width: '100%', marginTop: 6 }}
                        showsVerticalScrollIndicator={false}
                        data={Data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={{
                                    flex: 1, borderBottomWidth: 1, borderColor: Colors.divider,
                                    flexDirection: 'row', paddingVertical: 10
                                }}>
                                <Text style={[Style.text16, { flex: 2 }]}>{item.Time}</Text>
                                <Text style={[Style.text16, { marginHorizontal: 4, flex: 3 }]}>{item.From}</Text>
                                <Text style={[Style.text16, {color : Colors.TheamColor2, flex: 2 }]}>{item.subject}</Text>

                                {item.isattach ? <Icon type='entypo' name="attachment" size={15} /> : <View style={{ width: 15 }} />}

                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={<NoData />}
                    />
                </View>
                // </ScrollView>
            )
            }
        </SafeAreaView >
    );
};

const Data = [
    {
        Time: 'sep 30',
        From: 'Steve J.\nBuilder',
        subject: 'Hello all',
        isattach: false,
    },
    {
        Time: 'sep 30',
        From: 'Steve',
        isattach: true,
        subject: 'Hello all'
    }, {
        Time: 'sep 30',
        From: 'Steve J.\nBuilder',
        subject: 'Hello all',
        isattach: false,
    },
    {
        Time: 'sep 30',
        From: 'Steve',
        isattach: true,
        subject: 'Hello all'
    }, {
        Time: 'sep 30',
        From: 'Steve J.\nBuilder',
        subject: 'Hello all',
        isattach: false,
    },
    {
        Time: 'sep 30',
        From: 'Steve',
        isattach: true,
        subject: 'Hello all'
    }, {
        Time: 'sep 30',
        From: 'Steve J.\nBuilder',
        subject: 'Hello all',
        isattach: false,
    },
    {
        Time: 'sep 30',
        From: 'Steve',
        isattach: true,
        subject: 'Hello all'
    }, {
        Time: 'sep 30',
        From: 'Steve J.\nBuilder',
        subject: 'Hello all',
        isattach: false,
    },
    {
        Time: 'sep 30',
        From: 'Steve',
        isattach: true,
        subject: 'Hello all'
    }, {
        Time: 'sep 30',
        From: 'Steve J.\nBuilder',
        subject: 'Hello all',
        isattach: false,
    },


];

export default Home;


