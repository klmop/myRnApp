import React, { Component } from 'react';
import { StyleSheet, Text, View, Link, Ul, ListRenderItem } from 'react-native';
                                                                    
export default class DesktopNavbar extends Component {
    render() {
        return (
            <View style={styles.DesktopNavbar}>
                <Text >Logo</Text>
                <Ul>
                    <ListRenderItem >
                        <Link to="/" style={styles.link} ></Link>
                    </ListRenderItem>
                    <ListRenderItem>
                        <Link to="/" style={styles.link} ></Link>
                    </ListRenderItem>
                    <ListRenderItem>
                        <Link to="/" style={styles.link} ></Link>
                    </ListRenderItem>
                </Ul>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    DesktopNavbar: {
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center'
    },
    mainText: {
        textAlign: 'center'
    }
});