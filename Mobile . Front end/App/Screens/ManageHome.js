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
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import Icon1 from 'react-native-vector-icons/Ionicons'


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


                    <TouchableOpacity style={{
                        marginBottom: 20,
                        justifyContent: 'flex-start', alignItems: 'flex-start'
                    }}>
                        <Icon1 name={'arrow-back-outline'} type={'ionicon'} size={30} />
                    </TouchableOpacity>

                    <Text style={[Style.text22, { fontSize: 25, lineHeight: 30, marginBottom: 30, fontFamily: CustomeFonts.Poppins_Regular, justifyContent: 'center', textAlign: 'center', }]}>Manage
                        <Text style={[Style.text22, { fontSize: 25, lineHeight: 30, fontFamily: CustomeFonts.Poppins_Bold, color: Colors.black }]}> Home</Text>
                    </Text>



                    <FlatList
                        style={{ flex: 1, width: '100%', marginTop: 6 }}
                        showsVerticalScrollIndicator={false}
                        data={Data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={{
                                    marginBottom: 10, borderRadius: 2,
                                    backgroundColor: '#e8f6fb',
                                    flex: 1, borderBottomWidth: 1, borderColor: Colors.divider,
                                    flexDirection: 'row', padding: 10
                                }}>
                                <Text style={[Style.text16, { fontFamily: CustomeFonts.Poppins_Bold, color: Colors.TheamColor2, flex: 2, textAlignVertical: 'center' }]}>{item.Time}</Text>

                                <Menu>
                                    <MenuTrigger >
                                        <Icon
                                            type='material-community' name="lead-pencil" size={18} color={Colors.white} style={{ color: Colors.white, padding: 10, borderRadius: 4, backgroundColor: Colors.TheamColor2 }} />

                                    </MenuTrigger>
                                    <MenuOptions style={{ padding: 8, }} optionsContainerStyle={{ marginTop: 45 }}>

                                        <MenuOption value={1}>
                                            <View style={{ flexDirection: 'row', }}>
                                                <Icon name={'user'} type={'font-awesome'} size={20} style={{ width: 25 }} color={Colors.lightblack} />
                                                <Text style={[Style.text16, { justifyContent: 'center', textAlignVertical: 'center', paddingLeft: 10 }]}>Edit Profile</Text>
                                            </View>
                                        </MenuOption>

                                        <MenuOption value={2} style={{ marginTop: 6 }}>
                                            <View style={{ flexDirection: 'row', }}>
                                                <Icon name={'anchor'} type={'font-awesome'} size={20} style={{ width: 25 }} color={Colors.lightblack} />
                                                <Text style={[Style.text16, { justifyContent: 'center', textAlignVertical: 'center', paddingLeft: 10 }]}>Manage Crew</Text>
                                            </View>
                                        </MenuOption>

                                    </MenuOptions>
                                </Menu>

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
        Time: '123 Green St.',

    },
    {
        Time: '123 Green St.',

    },

];

export default Home;


