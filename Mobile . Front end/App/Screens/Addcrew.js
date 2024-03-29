import React, { useEffect, useState } from 'react';
import { Picker, Button, SafeAreaView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../Theme/Colors';
import CustomeFonts from '../Theme/CustomeFonts';
import Images from '../Theme/Images';
import Style, { HEIGHT, WIDTH } from '../Theme/Style';
import TextInput from '../Compoment/TextInput';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Ionicons'


const App = ({ navigation }) => {
    //admin
    const [loding, setLoding] = useState(false);
    const [loding1, setLoding1] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordView, setPasswordView] = useState(true);
    const [selectedItems, setselecteditem] = useState([]);
    const multiSelect = React.useRef(null);
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())

    useEffect(() => {

    }, [])

    const onSelectedItemsChange = (selectedItems) => {
        setselecteditem(selectedItems)

    };

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <View style={[Style.cointainer, {}]}>

                <TouchableOpacity style={{
                    marginHorizontal: 20,
                    marginVertical: 15,
                    justifyContent: 'flex-start', alignItems: 'flex-start'
                }}>
                    <Icon1 name={'arrow-back-outline'} type={'ionicon'} size={30} />
                </TouchableOpacity>

                <ScrollView >
                    <View style={{ backgroundColor: Colors.divider, flex: 1, padding: 20 }}>
                        {/* <Text style={[Style.text22, { fontFamily: CustomeFonts.Poppins_Bold, marginVertical: 20, color: Colors.lightblack, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center' }]}>New Message</Text> */}


                        <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginBottom: 6, color: Colors.lightblack, }]}>Select Property</Text>

                        <View style={[{
                            paddingLeft: '1%', width: '70%',
                            backgroundColor: Colors.white, marginBottom: 10
                        }]}>

                            <Picker

                                style={{ height: 50, }}
                                onValueChange={(itemValue, itemIndex) => { }}
                            >
                                <Picker.Item label="120 green St." value="120 green St." />
                                <Picker.Item label="120 green St." value="js" />
                            </Picker>

                        </View>

                        <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 20, color: Colors.lightblack, }]}>Date</Text>

                        <View style={{ flexDirection: 'row', marginTop: 8, }}>
                            <View style={{ backgroundColor: Colors.white }}>

                                <DatePicker

                                    mode="date"
                                    placeholder="From"
                                    format="DD.MM.YYYY"
                                    confirmBtnText="Ok"
                                    cancelBtnText="Abbrechen"
                                    customStyles={{
                                        style: { backgroundColor: Colors.white },
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 4,
                                            top: 4,
                                            marginLeft: 0,
                                        },

                                        dateInput: { paddingLeft: 6, justifyContent: 'center', alignItems: 'flex-start', borderWidth: 0 },
                                        placeholderText: {
                                            fontSize: 12,
                                            textAlign: 'left',
                                            fontFamily: CustomeFonts.Poppins_Regular,
                                            color: Colors.black
                                        }
                                    }}
                                    iconComponent={
                                        <Icon
                                            size={30}
                                            style={{ marginRight: 5 }}
                                            color='#a3a3a3'
                                            name='calendar-sharp'
                                        />
                                    }
                                    onDateChange={(date) => { }}
                                />


                            </View>
                            <View style={{ marginLeft: 10, backgroundColor: Colors.white }}>
                                <DatePicker

                                    mode="date"
                                    placeholder="To"
                                    format="DD.MM.YYYY"
                                    confirmBtnText="Ok"
                                    cancelBtnText="Abbrechen"
                                    customStyles={{
                                        style: { backgroundColor: Colors.white },
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 4,
                                            top: 4,
                                            marginLeft: 0,
                                        },

                                        dateInput: { paddingLeft: 6, justifyContent: 'center', alignItems: 'flex-start', borderWidth: 0 },
                                        placeholderText: {
                                            fontSize: 12,
                                            textAlign: 'left',
                                            fontFamily: CustomeFonts.Poppins_Regular,
                                            color: Colors.black
                                        }
                                    }}
                                    iconComponent={
                                        <Icon
                                            size={30}
                                            style={{ marginRight: 5 }}
                                            color='#a3a3a3'
                                            name='calendar-sharp'
                                        />
                                    }
                                    onDateChange={(date) => { }}
                                />

                            </View>
                        </View>


                        <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 15, color: Colors.lightblack, }]}>Options</Text>


                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <CheckBox
                                textStyle={{ marginRight: 0, fontFamily: CustomeFonts.Poppins_Regular, }}
                                containerStyle={{
                                    paddingTop: 0, paddingBottom: 0,
                                    paddingLeft: 0, paddingRight: 0, marginRight: 0,
                                    textAlignVertical: 'center',
                                    fontFamily: CustomeFonts.Poppins_Regular, borderWidth: 0, backgroundColor: 'transparent'
                                }}
                                title='Private'
                            />
                            <Icon name={'ios-lock-closed'} type={'ionicon'} size={20}
                                color={'#a3a3a3'} style={{ marginLeft: 6, justifyContent: 'center' }} />
                        </View>

                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <CheckBox
                                textStyle={{ marginRight: 0, fontFamily: CustomeFonts.Poppins_Regular, }}
                                containerStyle={{
                                    paddingTop: 0, paddingBottom: 0,
                                    paddingLeft: 0, paddingRight: 0, marginRight: 0,
                                    textAlignVertical: 'center',
                                    fontFamily: CustomeFonts.Poppins_Regular, borderWidth: 0, backgroundColor: 'transparent'
                                }}
                                title='Favorite'
                            />
                            <Icon name={'star'} type={'material-community'} size={20}
                                color={'#a3a3a3'} style={{ marginLeft: 6, justifyContent: 'center' }} />

                        </View>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <CheckBox
                                textStyle={{ marginRight: 0, fontFamily: CustomeFonts.Poppins_Regular, }}
                                containerStyle={{
                                    paddingTop: 0, paddingBottom: 0,
                                    paddingLeft: 0, paddingRight: 0, marginRight: 0,
                                    textAlignVertical: 'center',
                                    fontFamily: CustomeFonts.Poppins_Regular, borderWidth: 0, backgroundColor: 'transparent'
                                }}
                                title='Milesatone'
                            />
                            <Icon name={'bookmark'} type={'ionicon'} size={20}
                                color={'#a3a3a3'} style={{ marginLeft: 6, justifyContent: 'center' }} />

                        </View>

                        <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 15, color: Colors.lightblack, }]}>*Title</Text>
                        <TextInput style={[Style.textInput, { marginTop: 0 }]}
                            onChangeText={(text) => setUserName(text)}
                            placeholderTextColor={Colors.gray_d1}
                            value={username}
                            selectionColor={Colors.TheamColor2}
                        />

                        <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 15, color: Colors.lightblack, }]}>Description</Text>
                        <TextInput style={[Style.textInput, { marginTop: 0 }]}
                            onChangeText={(text) => setPassword(text)}
                            numberOfLines={5}
                            multiline={true}
                            placeholderTextColor={Colors.gray_d1}
                            value={password}
                            selectionColor={Colors.TheamColor2}
                        />

                        <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 15, marginBottom: 6, color: Colors.lightblack, }]}>Photo or Video</Text>

                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <Text style={[Style.text16, { borderWidth: 1, borderColor: Colors.lightblack, padding: 4, marginRight: 4, }]}>Choose File</Text>
                            <Text style={[Style.text14, { textAlignVertical: 'center', flex: 7 }]}>No File Choosen</Text>
                        </View>


                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={[Style.buttonStyle2, { width: '50%', marginTop: 20, }]}>
                            <Text style={[Style.text16, { textAlign: 'center', width: '100%', color: Colors.white }]}>Create Activity</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
            {/* </ImageBackground> */}
        </SafeAreaView >
    );

}




export default App;
