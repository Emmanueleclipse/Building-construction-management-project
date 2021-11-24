import React, { useEffect, useState } from 'react';
import { Picker, Button, SafeAreaView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../Theme/Colors';
import CustomeFonts from '../Theme/CustomeFonts';
import Style, { HEIGHT, WIDTH } from '../Theme/Style';
import TextInput from '../Compoment/TextInput';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/Ionicons'
import { Icon } from 'react-native-elements';


const Login = ({ navigation }) => {
    //admin
    const [loding, setLoding] = useState(false);
    const [loding1, setLoding1] = useState(false);
    const [username, setUserName] = useState('');
    const [desc, SetDesc] = useState('');
    const [passwordView, setPasswordView] = useState(true);
    const [selectedItems, setselecteditem] = useState([]);
    const multiSelect = React.useRef(null);

    useEffect(() => {

    }, [])

    const onSelectedItemsChange = (selectedItems) => {
        setselecteditem(selectedItems)

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={[Style.cointainer, { backgroundColor: Colors.white, padding: '3%' }]}>
                <ScrollView >
                    <View style={{ flex: 1, padding: 10 }}>

                        <TouchableOpacity style={{
                            justifyContent: 'flex-start', alignItems: 'flex-start'
                        }}>
                            <Icon1 name={'arrow-back-outline'} type={'ionicon'} size={30} />
                        </TouchableOpacity>

                        <Text style={[Style.text22, { fontFamily: CustomeFonts.Poppins_Bold, marginVertical: 20, color: Colors.lightblack, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center' }]}>New Message</Text>

                        <View style={{ borderRadius: 8, backgroundColor: Colors.divider, flex: 1, padding: 20, marginTop: 20 }}>

                            <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginVertical: 6, color: Colors.lightblack, }]}>Property</Text>

                            <View style={[{
                                padding: '1%', width: '70%', borderRadius: 8,
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

                            <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 20, color: Colors.lightblack, }]}>Send to</Text>
                            <View style={[Style.rowView, { padding: 0, justifyContent: 'flex-start' }]}>
                                <RadioButton
                                    value="1"
                                    status='checked'
                                    theme={{
                                        fonts: CustomeFonts.Poppins_Regular,
                                        style: {
                                            padding: 0,
                                            margin: 0
                                        }
                                    }}
                                    color={Colors.TheamColor2}
                                    uncheckedColor={Colors.gray}
                                />
                                <Text
                                    style={[
                                        Style.text14,
                                        { paddingVertical: '3%', textAlign: 'center' },
                                    ]}>
                                    Builder
                                </Text>



                            </View>


                            <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 20, color: Colors.lightblack, }]}>Subject</Text>
                            <TextInput style={[Style.textInput, { marginTop: 0 }]}
                                onChangeText={(text) => setUserName(text)}
                                placeholderTextColor={Colors.gray_d1}
                                value={username}
                                selectionColor={Colors.TheamColor2}
                            />

                            <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 20, color: Colors.lightblack, }]}>Message</Text>
                            <TextInput style={[Style.textInput, { marginTop: 0 }]}
                                onChangeText={(text) => SetDesc(text)}
                                numberOfLines={5}
                                multiline={true}
                                placeholderTextColor={Colors.gray_d1}
                                value={desc}
                                selectionColor={Colors.TheamColor2}
                            />

                            <Text style={[Style.text14, { fontFamily: CustomeFonts.Poppins_Bold, marginTop: 20, marginBottom: 6, color: Colors.lightblack, }]}>Attachment</Text>

                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <Text style={[Style.text16, { borderWidth: 1, borderColor: Colors.lightblack, padding: 4, marginRight: 4, }]}>Choose File</Text>
                                <Text style={[Style.text14, { textAlignVertical: 'center', flex: 7 }]}>No File Choosen</Text>
                            </View>


                            <TouchableOpacity
                                onPress={() => {

                                }}
                                style={[Style.buttonStyle2, { width: '50%', marginTop: 20, }]}>
                                <Text style={[Style.text16, { textAlign: 'center', width: '100%', color: Colors.white }]}>SEND</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </View>
            {/* </ImageBackground> */}
        </SafeAreaView >
    );

}

const Data = [
    {
        Time: '120 green St.',

    },
    {
        Time: '120 green St1.',

    }, {
        Time: '120 green St2.',

    }, {
        Time: '120 green St3.',

    },


];

export default Login;
