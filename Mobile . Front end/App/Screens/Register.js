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
import TextInput from "../Compoment/TextInput";
import { ScrollView } from "react-native-gesture-handler";

const App = ({ navigation, route }) => {

    const { flag } = route.params

    const [firstName, setFirstName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordView, setPasswordView] = useState(true);
    const [confrimPassword, setConfrimPassword] = useState("");
    const [confrimPasswordView, setConfrimPasswordView] = useState(true);



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View
                style={[Style.cointainer, { justifyContent: "center", padding: "5%" }]}
            >
                <ScrollView showsVerticalScrollIndicator={false}>


                    <Text style={[Style.text22, { marginTop: 20, lineHeight: 25, fontFamily: CustomeFonts.Poppins_Bold, marginBottom: 8, color: Colors.lightblack, }]}>Register</Text>


                    <Text style={[Style.text16, { lineHeight: 25, marginBottom: 20, color: Colors.lightblack, }]}>Please enter details to register</Text>



                    <View style={{ paddingVertical: "4%" }}>

                        <Text style={[Style.text14, { marginTop: 10, color: Colors.lightblack, }]}>Name</Text>


                        <TextInput
                            style={[Style.textInput]}
                            onChangeText={(text) => setFirstName(text)}
                            // title="Name"
                            placeholderTextColor={Colors.gray_d1}
                            value={firstName}
                            selectionColor={Colors.TheamColor2}
                        />

                        <Text style={[Style.text14, { marginTop: 10, color: Colors.lightblack, }]}>Email</Text>

                        <TextInput
                            style={[Style.textInput]}
                            onChangeText={(text) => setEmail(text)}
                            // title="Email"
                            placeholderTextColor={Colors.gray_d1}
                            value={email}
                            selectionColor={Colors.TheamColor2}
                        />

                        <Text style={[Style.text14, { marginTop: 10, color: Colors.lightblack, }]}>Mobile Number</Text>

                        <TextInput
                            style={[Style.textInput]}
                            onChangeText={(text) => setMobile(text)}
                            // title="Mobile Number"
                            keyboardType="number-pad"
                            placeholderTextColor={Colors.gray_d1}
                            maxLength={10}
                            value={mobile}
                            selectionColor={Colors.TheamColor2}
                        />

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

                        <Text style={[Style.text14, { marginTop: 10, color: Colors.lightblack, }]}>Confirm Password</Text>


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



                    <View style={[Style.buttonStyle2, { flex: 1 }]}>

                        <TouchableOpacity
                            style={{ width: '100%' }}
                            onPress={() => {
                                if (flag == "2") { navigation.replace('CreateProperty', {}) }
                                else {
                                    navigation.replace('Home', {})
                                }
                            }}
                        >
                            <Text style={[Style.text16, { lineHeight: 20, textAlign: 'center', width: '100%', color: Colors.white }]}>Register</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={[Style.text14, { justifyContent: 'center', textAlign: 'center', marginTop: 20 }]}>Already have an account?
                        <Text style={[Style.text14, { color: Colors.TheamColor2 }]}
                            onPress={() => {
                                navigation.replace('Login', { flag: flag })
                            }}
                        > Login</Text>
                    </Text>


                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default App;
