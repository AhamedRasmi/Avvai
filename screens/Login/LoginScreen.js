import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';


const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" backgroundColor="#80683c" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    source={require('../../assets/translate.png')}
                    style={styles.image} />
            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.title}>Helloo!</Text>
                <Text style={styles.text}>Learn and stay connected with {'\n'}everyone!</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.linearGradient} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.textSignIn}>Get Started</Text>
                        <MaterialIcons
                            name='navigate-next'
                            color='#fff'
                            size={25}
                        />

                    </TouchableOpacity>
                </View>
            </Animatable.View >

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80683c',
    },
    header: {
        flex: 2,
        backgroundColor: '#80683c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    image: {
        height: 120,
        width: 120,
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#80683c'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: 30,
        color: '#000'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 30
    },
    linearGradient: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 200,
        backgroundColor: '#80683c',
    },
    textSignIn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
    }
})

export default LoginScreen;