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
import { ListItem, Icon } from 'react-native-elements'
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
                <View style={{ flex: 1,  flexDirection: 'column' }}>
                  
                    <Text style={[Style.text16, { backgroundColor: Colors.divider, fontFamily: CustomeFonts.Poppins_Bold, height: 56, color: Colors.lightblack, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center' }]}>More Actions</Text>


                    <FlatList
                        style={{ padding: 15,flex: 1, width: '100%', marginTop: 6 }}
                        showsVerticalScrollIndicator={false}
                        data={Data}
                        renderItem={({ item, index }) => (
                            <ListItem key={index} bottomDivider onPress={() => {
                                if (item.name == 'Crew') {
                                    navigation.navigate('Crew', {})
                                }
                                if (item.name == 'Manage Home') {
                                    navigation.navigate('ManageHome', {})
                                }
                                if (item.name == 'User Settings') {
                                    navigation.navigate('UserSetting', {})
                                }

                            }}>
                                <Icon name={item.iname} type={item.itype} color={Colors.TheamColor2} size={35} style = {{width:40, justifyContent : 'flex-start'}}/>
                                <ListItem.Content>
                                    <ListItem.Title style={{ fontSize: 14, fontFamily: CustomeFonts.Poppins_Regular }}>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron size= {30}/>
                            </ListItem>
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
        iname: 'image',
        itype: 'entypo',
        name: 'Photos',

    },
    {
        iname: 'bar-chart',
        itype: 'ionicon',
        name: 'Reports',

    },
    {
        iname: 'clipboard-notes',
        itype: 'foundation',
        name: 'Building Phases',

    },
    {
        iname: 'clipboard-notes',
        itype: 'foundation',
        name: 'Resources',

    },
    {
        iname: 'people-outline',
        itype: 'ionicon',
        name: 'Crew',

    },
    {
        iname: 'ios-home-outline',
        itype: 'ionicon',
        name: 'Manage Home',

    },
    {
        iname: 'ios-settings-sharp',
        itype: 'ionicon',
        name: 'User Settings',

    },

    {
        iname: 'ios-search-sharp',
        itype: 'ionicon',
        name: 'Help Center',

    },

    {
        iname: 'logout',
        itype: 'material-community',
        name: 'Logout',

    },

];

export default Home;


