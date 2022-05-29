import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default TodoScreen;
