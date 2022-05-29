import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MoneyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Money</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MoneyScreen;
