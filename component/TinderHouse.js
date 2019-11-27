import React, { Component, useState } from 'react';
import { StyleSheet, View, Button, Dimensions, Animated, Image, Modal, PanResponder, Text } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const houses = [
    {id: "1", uri: require('../assets/tinderHouse/appt-Sandillon-6p.jpg')},
    {id: "2", uri: require('../assets/tinderHouse/longere_Lailly_En_Val-7p.jpg')},
    {id: "3", uri: require('../assets/tinderHouse/maison_Saint-Jean_Brayes_8p.jpg')},
    {id: "4", uri: require('../assets/tinderHouse/pav_Montargis_Sandillon-5p.jpg')},
    {id: "5", uri: require('../assets/tinderHouse/pav_Montargis-4p.jpg')}
];
let reset = false;
export default class TinderHouse extends Component {
    constructor() {
        super();
        console.log('TinderHouse : constructor');
        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0
        }
        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2] ,
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        });
        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate,
            },
            ...this.position.getTranslateTransform()
        ]
        }
        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2] ,
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        });

        this.rejectOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2] ,
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        });

        this.nextHouseOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2] ,
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        });

        this.nextHouseScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2] ,
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        });
    }
    componentWillMount() {
        console.log('TinderHouse : componentWillMount');
        this.setState({currentIndex: 0});
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt ,gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({x: gestureState.dx, y: gestureState.dy})
            },
            onPanResponderRelease: (evt, gestureState) => {
                if(gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: {x: SCREEN_WIDTH+100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({currentIndex: this.state.currentIndex+1}, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                } else if(gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: {x: -SCREEN_WIDTH-100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({currentIndex: this.state.currentIndex+1}, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                } else {
                    Animated.spring(this.position, {
                        toValue: {x: 0, y: 0},
                        friction: 4
                    }).start()
                }
            }
        })
    }

    resetTinderHouzze() {
        this.setState({currentIndex: 0});
    }

    seeFavoviteHouzze() {
        this.setState({currentIndex: 0});
    }

    renderHouses = () => {
        console.log('TinderHouse : renderHouses');
        return houses.map((item, key) => {
                if (key < this.state.currentIndex) {
                    return null;
                } else if(key == this.state.currentIndex) {

                    return (
                        <Animated.View
                        {...this.PanResponder.panHandlers}
                        style={[this.rotateAndTranslate, {height: SCREEN_HEIGHT -120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]} key={item.id}>
                            <Animated.View style={{ opacity: this.likeOpacity, transform: [{rotate: '-30deg'}] , position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
                                <Text style={{borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10}} >Retenir</Text>
                            </Animated.View>
                            <Animated.View style={{ opacity: this.rejectOpacity,transform: [{rotate: '30deg'}] , position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
                                <Text style={{borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10}} >On Zappe!</Text>
                            </Animated.View>
                        <Image style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20}} source={item.uri} ></Image>
                        </Animated.View>
                        );
                } else {
                           
                    return (
                        <Animated.View
                        style={[{ opacity: this.nextHouseOpacity, transform: [{ scale: this.nextHouseScale }], height: SCREEN_HEIGHT -120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]} key={item.id}>
                        <Image style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20}} source={item.uri} ></Image>
                        </Animated.View>
                        ); 
                    }
        }).reverse();
    }

    shouldComponentUpdate() {
        console.log('TinderHouse : CurrentIndex about to be resseted!', this.props.reset)
        if(this.props.reset === true) {
            this.setState({currentIndex: 0});
            console.log('TinderHouse :  CurrentIndex resseted!')
            return false;
        }
        console.log('TinderHouse : shouldComponentUpdate');
        return true;
    }

    render() {
            return (
            <Modal visible={this.props.visible} animationType="slide">
                <View style={{flex: 1}}>
                    <View style={{height: 60}}>
                    </View>
                    <View style={{flex: 1}}>
                        {this.renderHouses()}
                    </View>
                    <View style={{height: 60}}>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Retour" onPress={() => this.props.onStopTinderHouzze()} color="red" ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Favoris" onPress={() => this.seeFavoviteHouzze()} color="purple" ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={() => this.resetTinderHouzze()} color="green" ></Button>
                    </View>
                </View>
            </Modal>
             );
         }
}


const styles = StyleSheet.create({
    mainTH: {
        padding: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
    button: {
        width: '30%',
      }
});