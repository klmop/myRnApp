import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';
import TinderHouse from './component/TinderHouse';
import Navbar from './component/navigation/Navbar';
import SignIn from './component/navigation/SignIn';
import SignUp from './component/navigation/SignUp';

let resetHouzzeApp = false;
function App(props) {
  const [stepGoals, setStepGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isTinderHouseMode, setIsTinderHouseMode] = useState(false);
  // const [resetHouzzeApp, setResetHouzzeApp] = useState(false);
  // let resetHouzzeApp = false;
  console.log('App : resetHouzzeApp Just set : ', resetHouzzeApp)
  const addGoalHandler = goalName => {
    console.log('App : New ID', Math.round(Math.random() * 100000000000).toString())
    setStepGoals(stepGoals => [...stepGoals, {key: Math.round(Math.random() * 100000000000).toString(), value: goalName}]);
    setIsAddMode(false);
  };

  const cancelAddGoal = () => {
    console.log('App : cancelAddGoal ')
    setIsAddMode(false);
  }
  
  const removeStepGoal = goalId => {
    console.log('App : Delete Id = ', goalId)
    setStepGoals(stepGoals => {
      return stepGoals.filter((goal) => goal.key !== goalId);
    });
  }

  const stopTinderHouzze = () => {
    setIsTinderHouseMode(false);
  }
console.log('App : ResetHouzz : ', resetHouzzeApp)
// <Button title="Reset Houzze App!" onPress={() => { resetHouzzeApp = true}}/>
  return (
    <View style={styles.screen} >
          <View style={styles.button}>
            <Button title="Ajouter" onPress={addGoalHandler} ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Annuler" onPress={props.onCancelAddGoal} color="red" ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Signn" onPress={() => props.navigation.navigate('signIn')} color="red" ></Button>
          </View>
    </View>
    );

  };

  const appNavigator = createStackNavigator({
    app: App,
    signIn: SignIn,
    signUp: SignUp,
  },
  {
    initialRouteName: 'app',
  }
  );

  export default appContainer = createAppContainer(appNavigator);

  const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    button: {
      borderRadius: 0.6,
    }
  });
