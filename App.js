import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [ numbers, setNumbers ] = useState([1, 2, 3, 4, 5, 6]);

  const handleRandomize = () => {
    let random = [];
    while (random.length < 6) {
      var r = Math.floor(Math.random() * 100) + 1;
      if (random.indexOf(r) === -1) random.push(r);
    }

    setNumbers([...random])
  };

  return (
    <View style={styles.container}>
      <View style={styles.numbers}>
        {
          numbers.map((number, index) => (
            <Text key={`number-${index}`}>{number}</Text>
          ))
        }
      </View>
      <Button 
        title="Generate"
        onPress={handleRandomize}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbers: {
    flexDirection:'row',
    justifyContent: 'space-evenly',
    width: '80%',
  }
});
