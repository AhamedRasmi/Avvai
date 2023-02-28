import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';


const SignInScreen = ({ navigation }) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })

    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" backgroundColor="#80683c" />

            <View style={styles.header}>
                <ImageBackground source={require('../../assets/translate.png')} style={{ height: 100, width: 100, opacity: 0.7 }} />
                <Text style={styles.textHeader}>Welcome!</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textFooter}>Email</Text>
                <View style={styles.action}>
                    <Ionicons
                        name='ios-mail'
                        size={20}
                        color='#80683c'
                    />
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize='none'
                        placeholder='Your Email'

                    />
                </View>

                <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        size={20}
                        color='#80683c'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}

                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Ionicons name='eye' color='grey' size={20} /> :
                            <Ionicons name='eye-off' color='grey' size={20} />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={{ alignSelf: 'flex-end', marginVertical: 8, color: 'grey' }}>Forgot your password ?</Text>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn, styles.shadowBtn, { shadowColor: '#000' }]}
                    >

                        <Text style={[styles.textSign, { color: 'white' }]}>Log in</Text>

                    </TouchableOpacity>
                </View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'grey', marginTop: 20 }}>Or login with</Text>
                <View style={styles.socialView}>
                    <Image source={require('../../assets/google.png')} style={{ height: 45, width: 45, marginHorizontal: 20 }} />
                    <Image source={require('../../assets/microsoft.png')} style={{ height: 45, width: 45, marginHorizontal: 20 }} />

                </View>

                <View style={{ marginTop: 45 }}>
                    <Text style={{ textAlign: 'center' }}>Don't have an account? <Text style={{ color: '#80683c' }}>Sign up</Text></Text>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80683c',
    },
    header: {
        flex: 1,
        backgroundColor: '#80683c',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
        paddingHorizontal: 20
    },
    textHeader: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    textFooter: {
        fontSize: 14,
        color: 'grey',
        marginVertical: 8
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d2d2d2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -12,
        paddingLeft: 12,
        color: '#05375a',
        height: 50
    },
    button: {
        alignItems: 'center',
        marginVertical: 19
    },
    signIn: {
        width: '95%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    socialView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 30
    },
    shadowBtn: {
        shadowOffset: { height: 10, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    }
})

export default SignInScreen;