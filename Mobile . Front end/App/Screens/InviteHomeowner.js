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

const App = ({ navigation }) => {

    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={[Style.cointainer, { justifyContent: 'center', padding: '3%' }]}>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    <View >



                        <Text style={[Style.text22, { marginTop: 20, lineHeight: 25, fontFamily: CustomeFonts.Poppins_Bold, marginBottom: 8, color: Colors.lightblack, }]}>Invite Home Builders</Text>


                        <Text style={[Style.text16, { lineHeight: 25, marginBottom: 20, color: Colors.lightblack, }]}>Please enter email to invite home builders</Text>


                        <View style={{ paddingVertical: "4%" }}>

                            <TextInput
                                style={[Style.textInput]}
                                onChangeText={(text) => setEmail(text)}
                                title="Email"
                                placeholderTextColor={Colors.gray_d1}
                                value={email}
                                selectionColor={Colors.TheamColor2}
                            />

                        </View>

                        <View style={[Style.buttonStyle2, {}]}>

                            <TouchableOpacity
                                style={{ width: '100%' }}
                                onPress={() => {
                                    navigation.replace('Home', {})
                                }}
                            >
                                <Text style={[Style.text16, { lineHeight: 20, textAlign: 'center', width: '100%', color: Colors.white }]}>Submit</Text>
                            </TouchableOpacity>

                        </View>


                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default App;
