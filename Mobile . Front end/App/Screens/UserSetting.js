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
import { Indicator, NoData, } from '../Common/CommonMethods';
import { ListItem, Icon } from 'react-native-elements'
import Icon1 from 'react-native-vector-icons/Ionicons'
import TextInput from '../Compoment/TextInput';
import { CheckBox } from 'react-native-elements'

const Home = ({ navigation, route }) => {
    const [isLoding, setIsLoding] = useState(false);
    const [username, setUserName] = useState('');

    useEffect(() => {

    }, []);

    return (
        <SafeAreaView style={Style.cointainer}>

            {isLoding ? (
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                    <Indicator></Indicator>
                </View>
            ) : (
                <View style={{ flex: 1, padding: 10, flexDirection: 'column' }}>

                    <TouchableOpacity style={{
                        marginBottom: 20,
                        justifyContent: 'flex-start', alignItems: 'flex-start'
                    }}>
                        <Icon1 name={'arrow-back-outline'} type={'ionicon'} size={30} />
                    </TouchableOpacity>

                    <View style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, backgroundColor: Colors.divider, padding: 10, flex: 1, flexDirection: 'column' }}>

                        <ListItem containerStyle={{ padding: 4, backgroundColor: 'transparent' }}>
                            <Icon name={'mail'} type={'ionicon'} size={30} color={Colors.lightblack} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: 18, fontFamily: CustomeFonts.Poppins_Bold }}> Email Preferences</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>

                        <Text style={[Style.text14, { marginTop: 25, color: Colors.lightblack, }]}>Email Address</Text>
                        <TextInput style={[Style.textInput, { marginTop: 0 }]}
                            onChangeText={(text) => { }}
                            placeholderTextColor={Colors.gray_d1}
                            value={username}
                            selectionColor={Colors.TheamColor2}
                        />

                        <Text style={[Style.text14, { marginTop: 15, color: Colors.lightblack, }]}>ReType Email</Text>
                        <TextInput style={[Style.textInput, { marginTop: 0, marginBottom: 50, }]}
                            onChangeText={(text) => { }}
                            placeholderTextColor={Colors.gray_d1}
                            value={username}
                            selectionColor={Colors.TheamColor2}
                        />

                        <CheckBox
                            textStyle={{ fontSize: 16, fontFamily: CustomeFonts.Poppins_Regular }}
                            containerStyle={{ padding: 0, borderWidth: 0, backgroundColor: 'transparent' }}
                            title='send me fewer emails'
                            checked={true}
                        />

                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Icon name={'infocirlce'} type={'antdesign'} size={20} style={{ marginRight: 10 }} color={Colors.lightblack} />
                            <View >
                                <Text style={[Style.text14, { lineHeight: 20, color: Colors.gray, }]}>Checking this option means that report and real-time photo/video emails will be withheld.(

                                    <Text style={[{ lineHeight: 20, color: Colors.lightblack, fontFamily: CustomeFonts.Poppins_Bold }]}>Homeowners </Text>

                                    will still receive emails of
                                    <Text style={[{ lineHeight: 20, color: Colors.lightblack, fontFamily: CustomeFonts.Poppins_Bold }]}> construction </Text>

                                    notices.)
                                    <Text textDecorationLine={'italic'} style={[{ textDecorationLine: 'italic', lineHeight: 20, color: Colors.lightblack, fontFamily: CustomeFonts.Poppins_Bold }]}> Recommended if you already receive notifications via the app.</Text>
                                </Text>
                            </View>

                        </View>

                    </View>


                    <ListItem containerStyle={{ backgroundColor: Colors.divider, padding: 10, }}>
                        <Icon name={'ios-lock-closed'} type={'ionicon'} size={30} color={Colors.lightblack} />
                        <ListItem.Content>
                            <ListItem.Title style={{ fontSize: 18, fontFamily: CustomeFonts.Poppins_Bold }}>Password</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>

                    <Text style={[Style.text14, { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, backgroundColor: Colors.divider, justifyContent: 'center', paddingVertical: 10, paddingLeft: 10, color: Colors.TheamColor2, }]}>Change your password {'>'} </Text>


                </View>
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


