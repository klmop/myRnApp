import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default class GoalItem extends Component {
   render() {
       return (
        <ScrollView>
            <TouchableOpacity onPress={this.props.onDelete.bind(this, this.props.id)}>
                <View style={itemStyles.item}>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        );}
    };
    
const itemStyles = StyleSheet.create({
    item: {
        padding: 10,
        color: 'red',
        backgroundColor: 'grey',
        borderColor: 'green', 
        borderWidth: 1
        }
});

