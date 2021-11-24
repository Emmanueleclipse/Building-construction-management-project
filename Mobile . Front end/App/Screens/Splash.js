import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../Theme/Colors';
import Style, { HEIGHT, WIDTH } from '../Theme/Style';
import { ScrollView } from 'react-native-gesture-handler';


const App = ({ navigation }) => {
    //admin
    const [loding, setLoding] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={[Style.cointainer, { justifyContent: 'center', padding: '3%' }]}>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    <View >

                        <Text style={[Style.text22, { color: Colors.lightblack, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center' }]}>Which best describes you?</Text>


                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Register', { flag: 1 })
                            }}
                            style={[Style.card, { marginTop: 30 }]}>
                            <Text style={[Style.text16, { height: 60, color: Colors.white, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center', padding: 6 }]}>Home Owner</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Register', { flag: 2 })
                            }}

                            style={[Style.card, { marginTop: 20 }]}>
                            <Text style={[Style.text16, { height: 60, color: Colors.white, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center', padding: 6 }]}>Home Builder</Text>
                        </TouchableOpacity>

                        {/* <Text
                            onPress={() => {
                                navigation.navigate('Login', {})
                            }}
                            style={[Style.text16, { marginTop: 80, color: Colors.TheamColor2, justifyContent: 'center', textAlignVertical: "center", textAlign: 'center', padding: 6 }]}>Already have an account ? Login Here{'>'}</Text> */}

                    </View>
                </ScrollView>
            </View>
            {/* </ImageBackground> */}
        </SafeAreaView >
    );

}

export default App;
