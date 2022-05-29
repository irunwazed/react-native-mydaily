import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BookScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Book</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default BookScreen;
