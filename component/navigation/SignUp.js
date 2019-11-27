import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="#90A4AE" barStyle="light-content" ></StatusBar>
                <Text>SignUp</Text>
            </View>
        );
    }
}
                                                                     
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#90A4AE',
    },
    mainText: {
        textAlign: 'center'
    }
});