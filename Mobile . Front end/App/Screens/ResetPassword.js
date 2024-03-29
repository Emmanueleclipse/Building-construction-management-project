import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Image,
    Text,
    Linking,
    TouchableOpacity,
} from "react-native";
import Colors from "../Theme/Colors";
import Images from "../Theme/Images";
import CustomeFonts from "../Theme/CustomeFonts";
import Style, { HEIGHT, WIDTH } from "../Theme/Style";
import { Container, Header, Content, Input, Item, Label } from "native-base";
import TextInput from "../Compoment/TextInput";
import { ScrollView } from "react-native-gesture-handler";

const App = ({ navigation }) => {

    const [password, setPassword] = useState("");
    const [passwordView, setPasswordView] = useState(true);
    const [confrimPassword, setConfrimPassword] = useState("");
    const [confrimPasswordView, setConfrimPasswordView] = useState(true);


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={[Style.cointainer, { justifyContent: 'center', padding: '3%' }]}>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    <View >


                        <Text style={[Style.text22, { marginTop: 20, lineHeight: 25, fontFamily: CustomeFonts.Poppins_Bold, marginBottom: 8, color: Colors.lightblack, }]}>Reset Password</Text>


                        {/* <Text style={[Style.text16, { lineHeight: 25, marginBottom: 20, color: Colors.lightblack, }]}>Please enter details to register</Text> */}


                        <View style={{ paddingVertical: "4%" }}>


                            <Text style={[Style.text14, { marginTop: 10, color: Colors.lightblack, }]}>Password</Text>

                            <TextInput
                                style={[Style.textInput]}
                                onChangeText={(text) => setPassword(text)}
                                // title="Password"
                                placeholderTextColor={Colors.gray_d1}
                                value={password}
                                secureTextEntry={passwordView}
                                selectionColor={Colors.TheamColor2}
                                iconName={passwordView ? "eye-off" : "eye"}
                                iconPress={() => {
                                    console.log("passwprd 1 check ");
                                    setPasswordView(!passwordView);
                                }}
                                iconType="ionicons"
                            />

                            <Text style={[Style.text14, { marginTop: 20, color: Colors.lightblack, }]}>Repeat Password</Text>


                            <TextInput
                                style={[Style.textInput]}
                                onChangeText={(text) => setConfrimPassword(text)}
                                // title="Confirm Password"
                                placeholderTextColor={Colors.gray_d1}
                                value={confrimPassword}
                                secureTextEntry={confrimPasswordView}
                                iconName={confrimPasswordView ? "eye-off" : "eye"}
                                iconPress={() => {
                                    console.log("passwprd 1 check ");
                                    setConfrimPasswordView(!confrimPasswordView);
                                }}
                                selectionColor={Colors.TheamColor2}
                            />
                        </View>



                        <View style={[Style.buttonStyle2,]}>

                            <TouchableOpacity
                                style={{ width: '100%' }}
                                onPress={() => {

                                }}
                            >
                                <Text style={[Style.text16, { lineHeight: 20, textAlign: 'center', width: '100%', color: Colors.white }]}>Submit</Text>
                            </TouchableOpacity>

                        </View>


                    </View>

                </ScrollView>
            </View>

        </SafeAreaView >
    );
};

export default App;
