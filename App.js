import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text, TextInput } from 'react-native';
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
  const [stepGoal, setStepGoal] = useState('');
  const [stepGoals, setStepGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isTinderHouseMode, setIsTinderHouseMode] = useState(false);
  // const [resetHouzzeApp, setResetHouzzeApp] = useState(false);
  // let resetHouzzeApp = false;
  console.log('App : resetHouzzeApp Just set : ', resetHouzzeApp)
  const addGoalHandler = () => {
    console.log('App : New ID', Math.round(Math.random() * 100000000000).toString(), ' : value = ', stepGoal)
    setStepGoals(stepGoals => [...stepGoals, {key: Math.round(Math.random() * 100000000000).toString(), value: stepGoal}]);
    // setStepGoals(stepGoals => [...stepGoals, stepGoal]);
    setIsAddMode(false);    
  };
  const textGoalHandler = tempName => {
    console.log('App : entering...', ' : value = ', tempName);
    setStepGoal(tempName);
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
      <View style={styles.inputContainer} >
        <TextInput placeHolder="Course Goal" style={styles.input}  onChangeText={textGoalHandler} value={stepGoal} />
        <Button title="Ajouter" onPress={addGoalHandler} ></Button>
      </View>
      <View >
        {stepGoals.map((goal) => {return(
          <View  style={styles.listItem} >
            <Text key={goal.key} >{goal.key} </Text>
          </View>)
        })
        }
      </View>
    </View>
    );

  };

  const appNavigator = createStackNavigator({
    app: App,
    signIn: SignIn,
    signUp: SignUp,
    tinderHouse: TinderHouse,
  },
  {
    initialRouteName: 'app',
  }
  );

  export default appContainer = createAppContainer(appNavigator);

  const styles = StyleSheet.create({
    screen: {
      padding: 50,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      borderRadius: 0.5,
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
    },
    listItem: {
      padding: 10,
      backgroundColor: '#CCC',
      borderColor: 'black',
      borderWidth: 1,
    }
  });
