import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('Mon vrai test sur RN');

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  }

  const addGoal = () => {
    if(enteredGoal != '') {
      props.onAddGoal(enteredGoal);
    }
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer} >
        <TextInput placeholder="Entrer Votre Goal" style={styles.input} onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Ajouter" onPress={addGoal} ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Annuler" onPress={props.onCancelAddGoal} color="red" ></Button>
          </View>
        </View>
      </View>
    </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
      inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        width: '70%', 
        borderColor: 'black', 
        borderWidth: 2, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },
      button: {
        width: '40%',
      }
});