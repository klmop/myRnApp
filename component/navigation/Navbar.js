import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
                                                                    
export default class Navbar extends Component {
    render() {
        return (
            <View style={styles.main}>
                <DesktopNavbar />
                <MobileNavbar />
            </View>
        );
    }
}
                                                                     
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    mainText: {
        textAlign: 'center'
    }
});