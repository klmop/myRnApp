import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
                                                                    
export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.main}>
                <StatusBar style={styles.status} />
                <View>
                    <Text style={styles.mainText1}>SignIn</Text>
                    <Text style={styles.mainText2}>SignIn</Text>
                    <Text style={styles.mainText1}>SignIn</Text>
                    <Text style={styles.mainText2}>SignIn</Text>
                </View>
                <View>
                    <Text style={styles.mainText1}>SignIn</Text>
                    <Text style={styles.mainText2}>SignIn</Text>
                    <Text style={styles.mainText1}>SignIn</Text>
                    <Text style={styles.mainText2}>SignIn</Text>
                </View>
                <View>
                    <Text style={styles.mainText1}>SignIn</Text>
                    <Text style={styles.mainText2}>SignIn</Text>
                    <Text style={styles.mainText1}>SignIn</Text>
                    <Text style={styles.mainText2}>SignIn</Text>
                </View>
            </View>
        );
    }
}
                                                                     
const styles = StyleSheet.create({
    status: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // textAlign: 'center',
        backgroundColor: '#90A4AE',
    },
    mainText1: {
        padding: 15,
        // textAlign: 'center',
        backgroundColor: '#856f6f',
    },
    mainText2: {
        padding: 15,
        // textAlign: 'center',
        backgroundColor: '#805f5f',
        color: '#ffffff',
    }
});