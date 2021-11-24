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
                <View style={{ padding: 15, flexDirection: 'column' }}>

                    <TouchableOpacity style={{
                        justifyContent: 'flex-start', alignItems: 'flex-start'
                    }}>
                        <Icon name={'arrow-back-outline'} type={'ionicon'} size={30} />
                    </TouchableOpacity>

                    <Text style={[Style.text22, {lineHeight:25, marginTop: 50, fontFamily: CustomeFonts.Poppins_Bold, color: Colors.lightblack }]}>123 Green St's Crew</Text>
                    <Text style={[Style.text14, { marginVertical: 20, color: Colors.lightblack, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center' }]}>Add family and close friends to your crew  Crew members can view and participate in photo sharing. Set permission for each person for the right balance of privacy</Text>


                    <FlatList
                        style={{ borderRadius: 8, backgroundColor: Colors.divider }}
                        showsVerticalScrollIndicator={false}
                        data={Data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={{
                                    borderBottomWidth: 1, borderColor: Colors.divider,
                                    padding: 10, flexDirection: 'column'
                                }}>
                                <View style={{ marginTop: 15, flexDirection: 'row', width: '100%' }}>
                                    <Text style={[Style.text18, { color: Colors.TheamColor2, flex: 2 }]}>Michale Devis</Text>
                                    <TouchableOpacity
                                        style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, backgroundColor: '#a3a3a3' }}>
                                        <Text style={[Style.text14, {marginTop:3, textAlign: 'center', color: Colors.white }]}>Edit</Text>
                                    </TouchableOpacity>

                                </View>
                                <ListItem containerStyle={{ padding: 4, backgroundColor: 'transparent' }}>
                                    <Icon name={'mail'} type={'ionicon'} size={20} color = {Colors.lightblack}/>
                                    <ListItem.Content>
                                        <ListItem.Title>a@a.com</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                                <ListItem containerStyle={{ padding: 4, backgroundColor: 'transparent' }}>
                                    <Icon name={'person'} type={'ionicon'} size={20} color = {Colors.lightblack} />
                                    <ListItem.Content>
                                        <ListItem.Title>Home Owner</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>

                                <ListItem containerStyle={{ padding: 4, backgroundColor: 'transparent' }}>
                                    <Icon name={'ios-lock-closed'} type={'ionicon'} size={20} color = {Colors.lightblack} />
                                    <ListItem.Content>
                                        <ListItem.Title>Access Level : Admin</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>


                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={<NoData />}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Addcrew', {})
                        }}
                        style={[Style.buttonStyle2, {width :'50%', marginTop: 20, justifyContent :'center', alignSelf :'center' }]}>
                        <Text style={[Style.text16, { textAlign: 'center', width: '100%', color: Colors.white }]}>Add Crew Member</Text>
                    </TouchableOpacity>


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
        iname: 'chart',
        itype: 'evilicon',
        name: 'Reports',

    },
    


];

export default Home;


