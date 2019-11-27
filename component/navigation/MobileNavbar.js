import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
                                                                    
export default class MobileNavbar extends Component {
    render() {
        return (
            <View>
                <Text>Je suis dans la MobileNavbar!</Text>
            </View>
        );
    }
}
                                                                     
const styles = StyleSheet.create({
    MobileNavbar: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    mainText: {
        textAlign: 'center'
    }
});